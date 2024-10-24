import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const startLoadData = async (uid = '') => {
  if (!uid) throw new Error('You must be logged in')

  const collectionRef = collection(FirebaseDB, uid)

  // Ordenar por timestamp
  const queryRef = query(collectionRef, orderBy('timestamp'))
  const groupDocs = await getDocs(queryRef)

  const tasksData = {}

  // Utilizar un bucle for...of para mantener el orden
  for (const doc of groupDocs.docs) {
    const tasksDocs = await getDocs(
      collection(FirebaseDB, `${uid}/${doc.id}/tasks`)
    )

    const tasks = []

    tasksDocs.forEach(task => tasks.push({ db_id: task.id, ...task.data() }))

    tasksData[doc.id] = tasks.sort((a, b) => a.order - b.order)
  }

  return tasksData
}

export const startCreateTask = async (uid = '', task) => {
  if (!uid) throw new Error('You must be logged in')

  const tasksRef = collection(FirebaseDB, `${uid}/${task.group}/tasks`)
  const docsRef = doc(tasksRef)

  const querySnapshot = await getDocs(tasksRef)

  // Obtener el número actual de tareas en el grupo para asignar el próximo orden
  const ordersList = querySnapshot.docs.map(doc => doc.data().order)

  // Obtener el número máximo + 1 para asignar el orden del siguiente elemento.
  const nextOrder = Math.max(...ordersList) + 1

  await setDoc(docsRef, { ...task, order: nextOrder })
  task.db_id = docsRef.id

  return task
}

export const startReorderTasks = async (uid = '', newOrder, group) => {
  if (!uid) throw new Error('You must be logged in')

  const tasksRef = collection(FirebaseDB, `${uid}/${group}/tasks`)
  const docsRef = await getDocs(tasksRef)

  // Mapear las tareas a un array para facilitar la actualización
  const tasksToUpdate = docsRef.docs.map(doc => ({
    db_id: doc.id,
    data: doc.data()
  }))

  // Actualizar el orden de las tareas según el nuevoOrder
  newOrder.forEach((taskId, index) => {
    const taskToUpdate = tasksToUpdate.find(task => task.db_id === taskId.db_id)
    if (taskToUpdate) {
      taskToUpdate.data.order = index + 1
      const taskDocRef = doc(FirebaseDB, tasksRef.path, taskToUpdate.db_id)
      updateDoc(taskDocRef, taskToUpdate.data)
    }
  })
}

export const startUpdateTask = async (uid = '', task) => {
  if (!uid) throw new Error('You must be logged in')
  const taskToFireStore = { ...task }
  delete taskToFireStore.db_id

  const docRef = doc(FirebaseDB, `${uid}/${task.group}/tasks/${task.db_id}`)
  await setDoc(docRef, taskToFireStore, { merge: true })
}

export const startDeleteTask = async (uid = '', task) => {
  if (!uid) throw new Error('You must be logged in')
  const docRef = doc(FirebaseDB, `${uid}/${task.group}/tasks/${task.db_id}`)
  await deleteDoc(docRef)
}

export const startCreateGroup = async (uid = '', group) => {
  if (!uid) throw new Error('You must be logged in')
  const newDoc = doc(FirebaseDB, `${uid}/${group}`)
  await setDoc(newDoc, { group, timestamp: serverTimestamp() })
}

export const startDeleteGroup = async (uid = '', group) => {
  if (!uid) throw new Error('You must be logged in')
  const docRef = doc(FirebaseDB, `${uid}/${group}`)
  await deleteDoc(docRef)
}

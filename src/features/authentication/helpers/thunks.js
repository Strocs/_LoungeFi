import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const startLoadTasks = async (uid = '') => {
  if (!uid) throw new Error('You must be logged in')

  const collectionRef = collection(FirebaseDB, uid, 'loungefi', 'tasks')
  const docs = await getDocs(collectionRef)
  const tasks = []

  docs.forEach(doc => {
    tasks.push({
      db_id: doc.id,
      ...doc.data()
    })
  })
  console.log({ collectionRef, docs, tasks })
  return tasks
}

export const startAddTask = async (uid = '', task) => {
  if (!uid) throw new Error('You must be logged in')

  const newDoc = doc(collection(FirebaseDB, `${uid}/loungefi/tasks`))
  await setDoc(newDoc, task)
  task.db_id = newDoc.id

  return task
}

export const startReorderTasks = async (uid = '', newOrder) => {
  if (!uid) throw new Error('You must be logged in')

  const collectionRef = collection(FirebaseDB, `${uid}/loungefi/tasks`)
  const docs = await getDocs(collectionRef)

  docs.forEach(async doc => {
    const task = { ...doc.data(), db_id: doc.id }
    const docRef = doc(FirebaseDB, `${uid}/loungefi/tasks/${task.db_id}`)
    await setDoc(docRef, task, { merge: true })
  })
}

export const startUpdateTask = async (uid = '', task) => {
  if (!uid) throw new Error('You must be logged in')
  const taskToFireStore = { ...task }
  delete taskToFireStore.db_id

  const docRef = doc(FirebaseDB, `${uid}/loungefi/tasks/${task.db_id}`)
  await setDoc(docRef, taskToFireStore, { merge: true })
}

export const startDeleteTask = async (uid = '', task) => {
  if (!uid) throw new Error('You must be logged in')
  const docRef = doc(FirebaseDB, `${uid}/loungefi/tasks/${task.db_id}`)
  await deleteDoc(docRef)
}

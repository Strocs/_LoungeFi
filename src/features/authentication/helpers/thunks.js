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

  const collectionRef = collection(FirebaseDB, `${uid}/tasks`)
  const docs = await getDocs(collectionRef)
  const notes = []
  docs.forEach(doc => {
    notes.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return notes
}

export const startAddTask = async (uid = '', note) => {
  if (!uid) throw new Error('You must be logged in')

  const newDoc = doc(collection(FirebaseDB, `${uid}/tasks`))
  await setDoc(newDoc, note)
  note.id = newDoc.id

  return note
}

export const startUpdateTask = async (uid = '', activeNote) => {
  if (!uid) throw new Error('You must be logged in')
  const noteToFireStore = { ...activeNote }
  delete noteToFireStore.id

  const docRef = doc(FirebaseDB, `${uid}/tasks/${activeNote.id}`)
  await setDoc(docRef, noteToFireStore, { merge: true })
}

export const startDeleteTask = async (uid = '', activeNote) => {
  if (!uid) throw new Error('You must be logged in')
  const docRef = doc(FirebaseDB, `${uid}/tasks/${activeNote.id}`)
  await deleteDoc(docRef)
}

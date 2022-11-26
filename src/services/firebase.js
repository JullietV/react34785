// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkUpVFXEidvBoO4Yow2cwA8q32stDa9Fo",
  authDomain: "memento-eee21.firebaseapp.com",
  projectId: "memento-eee21",
  storageBucket: "memento-eee21.appspot.com",
  messagingSenderId: "157969191403",
  appId: "1:157969191403:web:b0935d3562e578fe9d09ae"
};

const firebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(firebaseApp)

export function testDB () {
  console.log(firebaseApp)
}

export async function getItemsFromAPI () {
  try {
    const ref = collection(DB, 'products')
    const { docs } = await getDocs(ref)
    return docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })
  } catch (e) {
    console.error(e)
  }
}

export async function getItemFromAPI (id) {
  const docRef = doc(DB, 'products', id)
  const snap = await getDoc(docRef);

  if (snap.exists()) {
    return {
      ...snap.data(),
      id: snap.id
    }
  } else {
    console.error('Este producto no existe')
  }
}

export async function getItemsFromAPIByCategory (cat) {
  const productsRef = collection(DB, 'products')
  const q = query(productsRef, where('category', '==', cat))
  const {docs} = await getDocs(q)

  if (docs && docs.length) {
    return docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })
  } else {
    console.error('No se consiguieron documentos en la categoría que estás buscando')
    return null
  }
}

export async function createProduct (product) {
  console.log(product)
  const docRef = await addDoc(collection(DB, 'products'), product)
  console.log(`Doc written with id ${docRef.id}`)

  return docRef
}

export async function createBuyOrderData (order) {
  console.log(order)
  const docRef = await addDoc(collection(DB, 'orders'), order)
  console.log(`Doc written with id ${docRef.id}`)

  return docRef
}
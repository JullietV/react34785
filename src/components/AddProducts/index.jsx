import { useState } from "react"
import { createProduct } from "../../services/firebase"
import Button from "../commons/Button"

export default function AddProducts () {
  const [product, setProduct] = useState({})

  const handleOnChange = (e) => {
    const {value, name} = e.target

    setProduct({
      ...product,
      [name]: value
    })
  }

  const featureOptions = [
    {
      label: 'Emotivo',
      value: 'emotivo'
    },
    {
      label: 'Motivador',
      value: 'motivador'
    },
    {
      label: 'Noticia',
      value: 'noticia',
    },
    {
      label: 'Película',
      value: 'pelicula'
    },
    {
      label: 'Serie',
      value: 'serie'
    },
    {
      label: 'Video',
      value: 'video'
    },
    {
      label: 'Texto',
      value: 'texto'
    }
  ]

  const handleFeatures = (e) => {

    const {value} = e.target

    if (product.features && product.features.length) {
      const index = product.features.findIndex(x => x === value)
      const copy = [...product.features]

      if (index > -1) {
        copy.splice(index, 1)
        setProduct({
          ...product,
          features: copy
        })
      } else {
        copy.push(value)
        setProduct({
          ...product,
          features: copy
        })
      }

    } else {
      setProduct({
        ...product,
        features: [value]
      })
    }
  }

  const handleSubmit = () => {
    const payload = {
      ...product,
      price: Number(product.price) || 0,
      stock: Number(product.stock) || 0
    }
    createProduct(payload)
  }

  return (
    <div className="w-full h-[75vh] flex items-center justify-center">
      <div className="min-w-[500px] bg-white px-6 py-8 rounded-xl flex flex-col justify-center items-center gap-4 border">
        <div className="w-full">
          <div className="mt-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Nombre del producto
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="title"
                name="title"
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700">
              Imagen
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="imgUrl"
                name="imgUrl"
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <div className="mt-1">
              <select
                id="category"
                name="category"
                className="block w-full bg-white rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleOnChange}
              >
                <option selected disabled>Seleccionar...</option>
                <option value="apoyo">Apoyo</option>
                <option value="distraccion">Distracción</option>
                <option value="diversion">Diversión</option>
                <option value="buenas-noticias">Buenas noticias</option>
              </select>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Características
            </label>
            {featureOptions.map(option => (<div key={option.value} className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  name="features"
                  value={option.value}
                  type="checkbox"
                  onChange={handleFeatures}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  {option.label}
                </label>
              </div>
            </div>))}
          </div>
          <div className="mt-2">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Precio
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="price"
                name="price"
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="stock"
                name="stock"
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <Button onClick={handleSubmit} type="primary" className="w-full mt-4">Guardar</Button>
        </div>
      </div>
    </div>
  )
}
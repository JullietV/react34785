import { Link } from "react-router-dom";

export default function Hero () {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4 justify-center">
        <div>
          <h2 className="text-3xl font-semibold">
            ¡Hola!
          </h2>
          <h2 className="text-3xl font-black">
            ¿Qué necesitas hoy?
          </h2>
        </div>
        <img src="/img/hero-dog.png" alt="A cute dog" />
      </div>
      <div className=" grid grid-cols-2">
        <div className="grid grid-rows-2 gap-4">
          <Link to="/category/apoyo">
            <img src="/categories/apoyo-hero.png" alt="" />
          </Link>
          <Link to="/category/buenas-noticias">
            <img src="/categories/buenas-noticias-hero.png" alt="" />
          </Link>
        </div>
        <div className="grid grid-rows-3 gap-4">
          <Link to="/category/distraccion">
            <img src="/categories/distraccion-hero.png" alt="" />
          </Link>
          <Link to="/category/diversion">
            <img src="/categories/diversion-hero.png" alt="" />
          </Link>
          <Link to="/item/sorprendeme">
            <img  src="/categories/sorprendeme-hero.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}
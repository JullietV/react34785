import { Link } from "react-router-dom";
import Button from "./Button";

export default function EmptyState ({img, title, subtitle, textBtn, hrefBtn}) {
  return (
  <>
    <div className="flex flex-col justify-center items-center w-full col-span-12 mt-11">
      <img src={img} alt="" className='block' />
      <h3 className='text-xl font-bold mt-4'>{title}</h3>
      <p>{subtitle}</p>
      <Link to={hrefBtn}>
        <Button type="primary" className="mt-4">{textBtn}</Button>
      </Link>
    </div>
  </>
  )
}
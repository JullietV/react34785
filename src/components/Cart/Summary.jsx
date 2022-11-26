import { Link } from "react-router-dom";
import Button from "../commons/Button";

export default function Summary ({summary}) {
  console.log(summary)
  return (<>
    <section
            aria-labelledby="summary-heading"
            className="rounded-xl bg-white border py-4 px-2 rounded-xl"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Resumen de la compra
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$ {`${summary().subtotal}`}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Delivery</span>
                  
                </dt>
                <dd className="text-sm font-medium text-gray-900">${summary().delivery}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>IVA (19%)</span>
                  
                </dt>
                <dd className="text-sm font-medium text-gray-900">$ {summary().iva}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base font-medium text-gray-900">$ {summary().total}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link to="/checkout">
                <Button type="primary" className="w-full">Checkout</Button>
              </Link>
            </div>
          </section>
  </>)
}
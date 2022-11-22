import Button from "../commons/Button";

export default function Summary ({cart}) {
  const calcSummary = () => {
    let subtotal = 0
    cart.forEach(item => {
      subtotal = subtotal + (item.count * item.price)
    })
    const delivery = 2000
    const iva = subtotal * 0.019
    const total = subtotal + delivery + iva

    return {
      subtotal,
      delivery,
      iva,
      total
    }
  }

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
                <dd className="text-sm font-medium text-gray-900">$ {`${calcSummary().subtotal}`}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Delivery</span>
                  
                </dt>
                <dd className="text-sm font-medium text-gray-900">${calcSummary().delivery}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>IVA (19%)</span>
                  
                </dt>
                <dd className="text-sm font-medium text-gray-900">$ {calcSummary().iva}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base font-medium text-gray-900">$ {calcSummary().total}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Button type="primary" className="w-full">Checkout</Button>
            </div>
          </section>
  </>)
}
import { Link } from "react-router-dom";

const Products = () => {

  let items = [

    { code: 101, price: 200, qty: 20 },

    { code: 102, price: 100, qty: 10 },

    { code: 103, price: 900, qty: 90 },

    { code: 104, price: 200, qty: 20 }

  ]

  return (

    <>

      <h1>Products</h1>

      {

        items.map((i) =>

          <div key={i.code}>

            <Link
              to={`/product/${i.code}/${i.price}/${i.qty}`}
            >

              {i.code},
              {i.price},
              {i.qty}

            </Link>

          </div>

        )

      }

    </>

  )
}

export default Products;
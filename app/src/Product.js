import { useParams } from "react-router-dom";

const Product = () => {

  const params = useParams();

  return (

    <div>

      <h1>Product Details</h1>

      <h2>Code: {params.code}</h2>

      <h2>Price: {params.price}</h2>

      <h2>Qty:{params.quantity}</h2>

    </div>
  )
}

export default Product;
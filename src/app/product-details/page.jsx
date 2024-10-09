import Products from "@/components/products"
import Reviews from "@/components/reviews"
import { Suspense } from "react"

const ProductDetailsPage = () => {
  return (
    <>
        <h1>Product Details Page</h1>
        <Suspense fallback={<p>Loading product details...</p>}>
            <Products />
        </Suspense>
        <Suspense fallback={<p>Loading reviews...</p>}>
            <Reviews />
        </Suspense>
    </>
  )
}

export default ProductDetailsPage
import { ProductCard } from "./ProductCard";

interface ProductListingsProps {
  products: Array<{ id: string; name: string; image: string; }>
  handleImageClick: (image: string) => void
};

export const ProductListings = ({ products, handleImageClick } : ProductListingsProps) => {
  return (
    <div id="product" className="flex flex-col gap-40 mt-40">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center">Our Products</h1>
        <div className="py-12 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {
          products.map((product, index) => (
            <ProductCard key={index} product={product} handleImageClick={handleImageClick} />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default ProductListings

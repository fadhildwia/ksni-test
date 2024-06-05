import Image from 'next/image'
import Price from './Price'

interface ProductCardProps {
  product: { id: string; name: string; image: string; }
  handleImageClick: (image: string) => void
};


export const ProductCard = ({ product, handleImageClick }: ProductCardProps) => {

  return (
    <div
      onClick={() => handleImageClick(product.image)}
      className="w-40 sm:w-48 lg:w-60 rounded mx-auto"
    >
      <div className="h-32 sm:h-40 lg:h-48 relative">
        <Image
          src={product.image !== '' ? product.image : '/images/soldout.png'}
          alt={product.name}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-110 z-20 rounded"
        />
      </div>
      <div className="h-36 sm:h-40 relative bg-gray-800 rounded-b">
        <div className="text-zinc-200 text-1xl pt-4 px-4 font-semibold line-clamp-1">
          {product.name ?? 'Sold Out'}
        </div>
        <div className="text-sm text-zinc-400 px-4 font-primary font-light line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam, fugiat excepturi esse veritatis maiores qui odit voluptates accusamus ipsa ea! Quas ipsam ullam illo perferendis id! Deleniti, ipsam veritatis.
        </div>
        <div
          className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
          rounded-tl-sm triangle"
        >
          <Price
            currency="$"
            num={12000}
            numSize="text-md text-zinc-400"
          />
        </div>
      </div>
    </div>
  )
}

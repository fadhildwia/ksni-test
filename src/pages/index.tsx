import { AboutSection } from '@/components/AboutSection';
import { HomeSection } from '@/components/HomeSection';
import ImagePreviewModal from '@/components/ImagePreview';
import ProductListings from '@/components/ProductListings';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsAndImages = async () => {
      try {
        const productResponse = await fetch('https://www.giovankov.com/api/product.json');
        const productData = await productResponse.json();

        const imageResponse = await fetch('https://www.giovankov.com/api/image.json');
        const imageData = await imageResponse.json();

        const images = imageData.data;

        console.log(productData)

        const matchedProducts = productData.data.map((product: any) => {
          const image = images.find((img: any) => img.id.includes(product.id))?.image;
          return { ...product, image: image || '' };
        });

        setProducts(matchedProducts);
      } catch (error) {
        console.error('Error fetching products or images:', error);
      }
    };

    fetchProductsAndImages();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mx-5 sm:mx-auto w-full min-h-screen flex-col justify-center items-center">
      <Image src="/images/hero-bg.png" alt="star" fill />
      <Image src="/images/gradient.webp" alt="star" fill />
      <HomeSection />
      <AboutSection />
      <ProductListings products={products} handleImageClick={handleImageClick} />     
      <ImagePreviewModal image={selectedImage} onClose={() => setSelectedImage(null)} /> 
    </div>
  );
};

export default Home;

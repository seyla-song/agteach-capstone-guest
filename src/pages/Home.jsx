import ProductCarousel from "./ProductCarousel";

function HomePage() {
    return (
        <>
            <h1>Home page</h1>
            <ProductCarousel products={products} />
        </>
    )
}

const products = [
    { name: 'Product 1', description: 'Description for product 1' },
    { name: 'Product 2', description: 'Description for product 2' },
    { name: 'Product 3', description: 'Description for product 3' },
    { name: 'Product 4', description: 'Description for product 4' },
    { name: 'Product 5', description: 'Description for product 5' },
    { name: 'Product 6', description: 'Description for product 6' },
  ];
  

export default HomePage
const ProductsPage = async () => {
    const detailsResponse = await fetch("http://localhost:3001/products/1");
    const details = await detailsResponse.json();

    const response = await fetch("http://localhost:3001/products", {
        cache: "no-store"
    });
    const products = await response.json();

    return (
        <ul className="space-y-4 p4">
            {
                products.map(product => 
                    <li 
                        key={product.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">${product.price}</p>
                        <p>{details.price}</p>
                    </li>
                )
            }
        </ul>
    )
}

export default ProductsPage
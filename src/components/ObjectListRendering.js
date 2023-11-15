export default function ObjectListRendering() {
    const products = [
        { id: 1, name: "Laptop", price: 500 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Modem", price: 500 },
        { id: 4, name: "Laptop", price: 500 },

    ];
    const productList = products.map((product) => (
        <h3 id={product.id}>{product.name} Price:{product.price}</h3>
    ));
    return (
        <div>{productList}</div>
    )
}
export default function MapFunction() {
    const prices = [10, 20, 30, 40, 50];
    const discount = prices.map((price) => price * 2)

    const products = ["Laptop", "phone", "Modem", "Computer"];
    const productList = products.map((product) => <h1>{product}</h1>);
    return (
        <div>
            {productList}
            <br />OR<br />
            {discount.map((product, index) => (
                <h3 key={index} id={index}>{product}</h3>
            ))}
            <br />OR<br />
            {discount.map((price, index) => {
                return (

                    <div key={index} id={index}>
                        <h2>Price:{price}</h2>
                    </div>
                )
            })}

        </div>
    );

}
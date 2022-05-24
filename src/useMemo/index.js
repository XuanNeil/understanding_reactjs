import { useMemo, useRef, useState } from "react"

export default function DemoUseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef(null)

    const handelAddToCart = () => {
        setProducts(preveProduct => ([
            ...preveProduct,
            {
                name,
                price: +price
            }
        ]))
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() => {
       const value = products.reduce((total, currentValue) => {
            return total + currentValue.price
        }, 0)
        return value;
    }, [products])

    return (
        <div>
            <div>
                <input
                    ref={nameRef}
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    placeholder="Enter price..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={handelAddToCart}>Add to cart</button>
            <h3>Total: {total}</h3>
            {products.map((product, index) => (
                <ul key={index}>
                    <li>{`${product.name} - ${product.price}`}</li>
                </ul>
            ))}
        </div>
    )
}
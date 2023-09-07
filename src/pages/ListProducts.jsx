import React, { useEffect, useState } from 'react'

const ListProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsList = async () => {
            const resp = await fetch('https://fakestoreapi.com/products');
            const result = await resp.json()
            const data = result;
            console.log(data)
            setProducts(data)
        }
        getProductsList()
    }, [])


    return (
        <div className="container">
            <div className='row'>
                <div className="col">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className="card mb-2 mt-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">price: {product.price}</h6>
                                        <p className="card-text">{product.description}</p>
                                        <a href="#" className="card-link">Agregar al carrito</a>
                                        <a href="#" className="card-link">Comprar Ahora</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProducts
import React, { useState } from 'react'
import { productsData } from './data/productsData';

function ProductsData() {

    const [products, setProducts] = useState(productsData);

    const deleteProducts  = (id) => {

        let newProducts = products.filter(q => q.id != id);

        setProducts(newProducts)
    }

    const refreshProducts = () => {
        setProducts(productsData);
    }


    

    return (
        <>
            <button onClick={() => refreshProducts()}>Refresh</button>
            <h1>Products Count: {products.length}</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Stock</td>
                    <td>Delete</td>
                </tr>
                {
                    products && products.map((item) => {

                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProducts(item.id)}>Delete</button></td>
                        </tr>

                    })
                }
            </table>

        </>
    )
}

export default ProductsData
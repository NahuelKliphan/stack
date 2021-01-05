import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import ProductNavbar from '../ProductNavbar/ProductNavbar.jsx';

const ProductList = () => {
    return (
        <main>
            <div className="container">
                <ProductNavbar />
                <section className="text-center mb-4">
                    <div className="row wow fadeIn">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                    <div className="row wow fadeIn">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProductList;
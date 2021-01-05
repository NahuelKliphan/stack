import React from 'react';
import './ProductItem.css';

const ProductItem = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card height-440">
                <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" className="card-img-top" alt="" />
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body text-center">
                    <a href="" className="grey-text">
                        <h5>7791293025537</h5>
                    </a>
                    <h5>
                        <strong>
                            <a href="" className="dark-grey-text">Vaso ultima cena jesus</a>
                        </strong>
                    </h5>
                    <h4 className="font-weight-bold blue-text">
                        <strong>120$</strong>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
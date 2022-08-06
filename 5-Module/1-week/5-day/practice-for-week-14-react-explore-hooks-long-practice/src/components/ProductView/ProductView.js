import React, { useState, useEffect } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {
    const [selectedProduct, setSelectedProduct] = useState();
    const [sideOpen, setSideOpen] = useState(true);

    // Open side panel when product is selected
    useEffect(() => {
        console.log(`selectedProduct CHANGED TO`, selectedProduct);
        if (selectedProduct)
            setSideOpen(true);
    }, [selectedProduct]);

    // Deselect product when side panel is closed
    useEffect(() => {
        console.log(`sideOpen CHANGED TO`, sideOpen);
        if (!sideOpen)
            setSelectedProduct();
    }, [sideOpen]);

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            isSelected={selectedProduct && selectedProduct.id === item.id}
                            onClick={() => setSelectedProduct(item)}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails product={selectedProduct} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
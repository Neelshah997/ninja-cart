import React  from  'react';

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image
    :`http://localhost:8000/media/images/Red-tshirt.jpg`
    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style = {{maxHeight:"100%", maxWidth:"100%"}}
            className="mb-3 rounded"
            alt = ""
            />
        </div>
    );
};

export default ImageHelper

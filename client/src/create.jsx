/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

class Productdetailsclient 
{
    productName;
    productPrice;
    productDescription;
}



function Create()
{
    var [product,setProduct] = useState(new Productdetailsclient());
    
    const handleProductChange = (event) =>
    {
    const [ name,value] = event.target;
    setProduct = (prev) =>
    {
        if(name === 'productName')
        {
            return {
                productName : value,
                productDescription : prev.productDescription,
                productPrice : product.productPrice
            }
        }
        else if(name === 'productDescription')
        {
            return {
                productName : prev.productName,
                productDescription : value,
                productPrice : product.productPrice
            }
        }
        else if(name === 'productPrice')
        {
            return {
                productName : prev.productName,
                productDescription : product.productDescription,
                productPrice : value
            }
        }
    }
    }
    const handleNewProduct= (event) =>
    {

    }
    return (
        <div className='d-flex justify-content-center  '>
        <div className = 'card cardview text-center' > 
       <div className='card-body'>
        <h3> Add a new product </h3>
        <br></br>
        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default">Product name</label>
        <input className="form-control" type = 'text' name = 'productName' value = {product.productName}  placeholder= 'Product name' onChange =  {handleProductChange}required/> 
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default">description</label>
        <input className="form-control" type = 'text' name = 'productName' value = {product.productDescription}  placeholder= 'Product Description' onChange =  {handleProductChange}required/> 
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default">price</label>
        <input className="form-control" type = 'text' name = 'productName' value = {product.productPrice}  placeholder= 'Product Price' onChange =  {handleProductChange}required/> 
        </div>
        <br/>
        <button className = 'btn btn-primary btn-dark'  type = 'submit' onClick = {handleNewProduct}> Add new user </button></div>
        </div>
        </div>
    );
}
export default Create;

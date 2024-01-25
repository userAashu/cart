import React from "react";

const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");

    const addProduct = async () => {
        console.log(name, price, category, company);
        const UserId = JSON.parse(localStorage.getItem("users"))._id;
        let result = await fetch('http://localhost:5000/add_product',{
            method:'post',
            body: JSON.stringify({name, price, category, company, UserId}),
            headers:{
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        // console.log(result);
        // localStorage.setItem('users',JSON.stringify(result))
        // if(result){
        //     navigate('/');
        // };

        
    }
    return (
        <div className="divBox">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="ProductName"  value={name} onChange={(e) => setName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="ProductPrice"  value={price} onChange={(e) => setPrice(e.target.value)} />
            <input className="inputBox" type="text" placeholder="ProductCategory"  value={category} onChange={(e) => setCategory(e.target.value)} />
            <input className="inputBox" type="text" placeholder="ProductCompany"  value={company} onChange={(e) => setCompany(e.target.value)} />
            <button onClick={addProduct} className="appButton">AddProduct</button>
        </div>
    )
}

export default AddProduct;
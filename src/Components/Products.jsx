import React from 'react'

function Products() {

    const products = [
        {
          id: 1,
          name: "Laptop",
          price: 999.99,
          description: "High-performance laptop with 16GB RAM and 512GB SSD.",
          image: "https://via.placeholder.com/200",
        },
        {
          id: 2,
          name: "Smartphone",
          price: 699.99,
          description: "Latest smartphone with 128GB storage and 48MP camera.",
          image: "https://via.placeholder.com/200",
        },
        {
          id: 3,
          name: "Headphones",
          price: 149.99,
          description: "Noise-cancelling over-ear headphones with 20-hour battery life.",
          image: "https://via.placeholder.com/200",
        },
      ];
      
      //1.style a page for showing the product details
      //2.pass the details as prop from app.js to product.js
      //3.display each item as a card component

  return (
    <div style={{display:"flex",justifyContent:"center"}}>

     <table border={"5px"}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
        </thead>

        <tbody>{

            products.map((data)=>(
               <tr>
               <th>{data.id}</th>
               <th>{data.name}</th>
               <th>{data.price}</th>
               <th>{data.description}</th>
               <th> <img src={data.image} alt="" /> </th>
           </tr>
              ) )}
            
        </tbody>
     </table>
        
    </div>
  )
}

export default Products
import React from "react";
import Product from "./Product";

const productsData=[
  {name:"Arqitel",live:true,cast:false,img:"src/Images/products/p1.jpg"},
  {name:"TTR",live:true,cast:false,img:"src/Images/products/p2.jpg"},
  {name:"YIR 20022",live:true,cast:false,img:"src/Images/products/p3.jpg"},
  {name:"Yahoo!",live:true,cast:true,img:"src/Images/products/p4.jpg"},
  {name:"Rainfall",live:true,cast:true,img:"src/Images/products/p5.jpg"},
  {name:"Jungle",live:true,cast:false,img:"src/Images/products/p6.jpg"},
]
function Products() {
  return (
    <div className="mt-20 w-full">
      {productsData.map((i,index)=>(
        <Product pData={i}/>
      ))}
      
    </div>
  );
}

export default Products;

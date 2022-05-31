import React, { useState } from "react";
import Product from "./components/Product";

const Products = [
  {
    name: "Ice cream",
    icon: "🍦",
    price: 5000,
    style: { fontSize: "50px" },
    edit: false,
  },
  {
    name: "A piece of watermelon",
    icon: "🍉",
    price: 6000,
    style: { fontSize: "50px" },
    edit: false,
  },
  {
    name: "Chocolate",
    icon: "🍫",
    price: 4500,
    style: { fontSize: "50px" },
    edit: false,
  },
];

function App() {
  // let myProduct = {
  //   name: "Star",
  //   icon: "🌟",
  //   price: 1000,
  //   style: { fontSize: "50px" },
  //   edit: false,
  // };
  // let myProducts = [...Products, myProduct];
  // let newProductList = [...myProducts, myProduct];
  const [myProducts, setMyProducts] = useState(Products);
  return (
    <div className="App">
      <Product
        names={myProducts}
        handleClick={(event, name) => {
          //alert(event.currentTarget.innerHTML + " " + name);
          setMyProducts(
            myProducts.map((item) => {
              if (item.name == name) {
                return { ...item, edit: true };
              }
              return { ...item };
            })
          );
        }}
        handleChange={(event, name) => {
          setMyProducts(
            myProducts.map((item) => {
              if (item.name == name) {
                return { ...item, price: Number(event.currentTarget.value) };
              }
              return { ...item };
            })
          );
        }}
        handleKeyPress={(event, name) => {
          if (event.key === "Enter") {
            setMyProducts(
              myProducts.map((item) => {
                if (item.name == name) {
                  return {
                    ...item,
                    price: Number(event.currentTarget.value),
                    edit: false,
                  };
                }
                return { ...item };
              })
            );
          }
        }}
      />
    </div>
  );
}

export default App;

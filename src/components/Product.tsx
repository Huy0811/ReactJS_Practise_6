import React from "react";

type ProductProps = {
  names: {
    name: string;
    icon: string;
    price: number;
    style: React.CSSProperties;
    edit: boolean;
  }[];
  handleClick: (event: React.MouseEvent<HTMLElement>, name: string) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
  handleKeyPress: (
    event: React.KeyboardEvent<HTMLInputElement>,
    name: string
  ) => void;
};

const Product = (props: ProductProps) => {
  return (
    <div>
      {props.names.map((item) => (
        <div>
          <p role="img" style={item.style}>
            {item.icon}
          </p>
          <p>Product Name: {item.name}</p>
          <p>
            Product Price:
            {item.edit ? (
              <input
                type="number"
                value={item.price}
                onChange={(event) => props.handleChange(event, item.name)}
                onKeyPress={(event) => props.handleKeyPress(event, item.name)}
              />
            ) : (
              <a
                href="#"
                onClick={(event) => props.handleClick(event, item.name)}
              >
                {item.price}
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Product;

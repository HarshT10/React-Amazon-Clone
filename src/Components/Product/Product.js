import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating, alt }) {
  const [{ cart }, dispatch] = useStateValue();

  // console.log("This is your basket >>> ", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>

        <div className="product__price">
          <span className="currency">₹</span>
          <span>{price}</span>
        </div>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <div className="product__image">
        <img src={image} alt={alt} />
      </div>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
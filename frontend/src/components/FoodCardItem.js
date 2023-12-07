import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FoodCardItem = ({
  foodItem,
  handleAddToCart,
}) => {

  const stars = [...Array(5)].map((_, i) => (
    <span
      key={i}
      style={{
        color:
          foodItem && foodItem.rating && foodItem.rating > i ? "gold" : "grey",
        fontSize: "20px",
      }}
    >
      ★
    </span>
  ));

  return (
    <Card style={{ width: "18rem", marginTop: "60px" }}>
      <Card.Img
        variant="top"
        src={foodItem && foodItem.image}
        style={{ maxHeight: "200px" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <Card.Title>{foodItem && foodItem.name}</Card.Title>
          <Card.Text>{foodItem && foodItem.price} $</Card.Text>
        </div>
        <span>{stars}</span>
        <div>
            <Button onClick={() => handleAddToCart(foodItem)}>
                Add To Cart
            </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodCardItem;

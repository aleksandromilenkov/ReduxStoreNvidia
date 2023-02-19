import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length <= 0 ? (
        <p>You dont have any items in the cart, you can add some.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={{
                title: item.title,
                quantity: item.amount,
                price: item.price,
                id: item.id,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;

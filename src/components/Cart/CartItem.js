import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;

  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeItem(id));
            }}
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch(
                cartActions.addItem({
                  item: {
                    amount: 1,
                    price: price,
                    title: title,
                    id: id,
                  },
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

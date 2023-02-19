import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const totalItems = items.reduce((acc, item) => {
    if (!item) return;
    return acc + item.amount;
  }, 0);
  const dispatch = useDispatch();
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(uiActions.toggleCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;

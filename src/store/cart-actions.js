import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
// Thunk functions:
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );
    try {
      const resp = await fetch(
        "https://react-http-max-f7bf6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!resp.ok) throw new Error("Error occuried.");
      const data = await resp.json();
      console.log(data);
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success",
          message: "successfully sent",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "data failed to send",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const resp = await fetch(
        "https://react-http-max-f7bf6-default-rtdb.firebaseio.com/cart.json"
      );
      if (!resp.ok) throw new Error("Error occuried.");
      const data = await resp.json();
      if (!data.items) {
        return { items: [], totalAmount: data.totalAmount };
      }
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "data failed to fetch",
        })
      );
    }
  };
};

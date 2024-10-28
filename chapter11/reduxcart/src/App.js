import { connect } from "react-redux";
import Cart from "./Cart";

//keeps track of the application state
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart,
  };
}

//calls action methods, which in turn updates the app state
function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (productName, productPrice) =>
      dispatch({
        type: "addProduct",
        productData: {
          productName: productName,
          productPrice: productPrice,
        },
      }),
    onDeleteProduct: (productData) =>
      dispatch({
        type: "deleteProduct",
        productData: productData,
      }),
  };
}

//connects the component to the store
//allows us to add and remove products
let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default connectedComponent;

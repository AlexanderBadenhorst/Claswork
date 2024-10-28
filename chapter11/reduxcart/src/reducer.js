function cartReducer(state, action) {
  if (state === undefined) {
    //initial state is set
    return {
      totalCost: 0,
      productCart: [],
    };
  }

  //defines our actions (add and remove)
  switch (action.type) {
    case "addProduct":
      return {
        ...state, //return the updated state
        //updates totalCost
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        //adds product to the cart
        productCart: state.productCart.concat({
          productName: action.productData.productName,
          productPrice: action.productData.productPrice,
        }),
      };
    case "deleteProduct":
      //identify product by name and then remove it from cart
      const updatedArray = state.productCart.filter(
        (product) => product.productName !== action.productData.productName
      );
      return {
        ...state,
        //payload value (products and cost)
        //updates totalCost
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updatedArray,
      };
    default:
      return state;
  }
}
export default cartReducer;

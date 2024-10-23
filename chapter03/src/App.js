import React, { Component } from "react";
import Products from "./Products";
import { Button } from "react-bootstrap";
import Rating from "./Rating";

class App extends Component {
  render() {
    const isValid = false;
    return (
      <div>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        {/* <Products /> */}
        {/* <Button>Default</Button> */}
        {/* <Button variant="danger">Default</Button> */}
        {/* <Button variant="primary" disabled={!isValid}>
          Default
        </Button> */}
      </div>
    );
  }
}

export default App;

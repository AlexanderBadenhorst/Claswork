import React, { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import GitHubUser from "./GitHubUser";
import Greeting from "./Greeting";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      //specify which routes render which components
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                {/* homework */}
                <Nav.Link href="/greeting">Greeting</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            {/* homework */}
            <Route path="/greeting" component={Greeting} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//http://localhost:3000/github/user/AlexanderBadenhorst/174330302

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import useFetch from "./useFetch";
// import Users from "./Users"; //create a button for users

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  //initial state
  const [requested, setRequested] = useState("");
  const data = useFetch(requested);

  //works like componentDidMount() as it prevents unnecessary rendering/re-rendering
  //this makes our page run faster/update state faster
  // useEffect(() => {
  //   fetch(requested)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));// data array is then populated with data from the collection
  // }, [requested]);
  //fetch data from the API
  //[] data gets rendered on the first time

  return (
    <div>
      {/* <Users /> */}
      {/*displays data from the posts collection*/}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      {/*displays data from the todos collection*/}
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      {/* Button for Users */}
      <Button variant="link" onClick={() => setRequested(usersUrl)}>
        Users
      </Button>
      <br />
      Requested: {requested}
      {/* this had to be modified with conditional rendering to display different lists based on the requested URL */}
      <ul>
        {requested === postsUrl &&
          data.map((el) => (
            <li key={el.id}>{el.title}</li> // For posts
          ))}
        {requested === todosUrl &&
          data.map((el) => (
            <li key={el.id}>
              {el.title} - {el.completed ? "Completed" : "Not Completed"}
            </li> // For todos
          ))}
        {requested === usersUrl &&
          data.map((el) => (
            <li key={el.id}>{el.name}</li> // For users
          ))}
      </ul>
    </div>
  );
};

export default App;

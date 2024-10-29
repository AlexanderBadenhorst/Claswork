import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import useFetch from "./useFetch";
import Users from './Users'//create a button for users

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  //initial state
  const [requested, setRequested] = useState("");
  const data = useFetch(requested)
  
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
      <Users />
      {/*displays data from the posts collection*/}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      {/*displays data from the todos collection*/}
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map(el=>(
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

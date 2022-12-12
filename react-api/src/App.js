import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/todos';

  const [todos, setTodos] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    // console.log(response.statusText);
    // console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    // console.log(responseJSON);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <h1>React API</h1>
      <ul>
        { !todos ? 'Cargando...' :
          todos.map((todo,index) => {
          return <li key={index}>{todo.title} {todo.completed ? 'OK':'CANCEL'}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

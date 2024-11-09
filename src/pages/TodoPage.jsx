import { useEffect, useState } from "react";
import { getTodos, getTodo } from "../service/todos.service";
import { useParams, Link } from "react-router-dom";
const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  function fetchTodos() {
    if (!id) {
      getTodos()
        .then((result) => {
          setTodos(result.data);
        })
        .catch((err) => console.error(err));
    } else {
      setTodos([]);
      getTodo(id)
        .then((result) => setTodo(result))
        .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [id]);
  return (
    <div className="p-8">
      {todos.length > 0 ? (
        todos.map((todo, id) => (
          <div className="rounded bg-red-300 p-2 mb-2 w-1/3" key={id}>
            <p>{todo.title}</p>
            <p
              className={`px-2 rounded w-20 ${
                todo.complete ? "bg-blue-700" : "bg-red-700"
              } text-white`}
            >
              {todo.complete ? "Completed" : "Pending"}{" "}
            </p>

            <Link
              to={`/todos/${todo.id}`}
              className="bg-blue-800 text-white px-2 py-1 text-white"
            >
              View
            </Link>
          </div>
        ))
      ) : (
        <div className="rounded bg-red-300 p-2 mb-2 w-24">
          <p>{todo.title}</p>
          <p
            className={`px-2 rounded w-20 ${
              todo.complete ? "bg-blue-700" : "bg-red-700"
            } text-white`}
          >
            {todo.complete ? "Completed" : "Pending"}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoPage;

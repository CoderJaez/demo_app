import axios from "../api/axios";

const getTodos = async () => {
  return await new Promise((resolve, reject) => {
    axios
      .get("todos")
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};

const getTodo = async (id) => {
  return await new Promise((resolve, reject) => {
    axios
      .get(`todos/${id}`)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => reject(err));
  });
};

export { getTodos, getTodo };

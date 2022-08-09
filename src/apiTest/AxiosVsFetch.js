import axios from "axios";

const AxiosVsFetch = () => {
  // axios

  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = {
    a: 10,
    b: 20,
  };
  axios
    .post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then(({ data }) => {
      console.log(data);
    });

  // fetch()

  const url2 = "https://jsonplaceholder.typicode.com/todos";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      a: 10,
      b: 20,
    }),
  };
  fetch(url2, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <h1>AxiosVsFetch</h1>
    </div>
  );
};

export default AxiosVsFetch;

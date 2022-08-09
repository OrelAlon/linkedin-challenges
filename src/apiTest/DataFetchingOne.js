import { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});

        setError("errorrrrrrr");
      });
  }, []);

  return (
    <div>
      <h2>axios fetch:</h2>
      {loading && "Loading!!!"}
      <h3>{post.body}</h3>
      <h3>{error}</h3>
    </div>
  );
};

export default DataFetchingOne;

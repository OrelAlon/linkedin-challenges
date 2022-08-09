import axios from "axios";
import { useState } from "react";

export default function DogPics() {
  //   API: https://dog.ceo/dog-api/
  // https://dog.ceo/api/breeds/image/random Fetch!
  const [post, setPost] = useState("");

  const randomPic = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await response.json();
    console.log(dog.message);
    return setPost(dog.message);
  };

  return (
    <div className='dog-pics'>
      <img src={post} />
      <button onClick={randomPic}>🐶</button>
    </div>
  );
}

import { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(true);

  return (
    <div
      className='page'
      style={dark ? { backgroundColor: "white" } : { backgroundColor: "black" }}
    >
      <button className='dark-mode-button' onClick={() => setDark(false)}>
        Dark Mode
      </button>
      <button className='light-mode-button' onClick={() => setDark(true)}>
        Light Mode
      </button>
    </div>
  );
}

import { useRef, useEffect, useState } from "react";

function Form({ onSubmit }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleClick() {
    onSubmit(inputValue);
    setInputValue("");
  }

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a message"
      />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}

export default Form;
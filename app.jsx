import { useState } from "react";
import Form from "./form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  function handleFormSubmit(inputValue) {
    setTimeout(() => {
      setMessage(`Message received: ${inputValue}`);
    }, 1000);

    setShowForm(false);
  }

  return (
    <>
      <h1>Hook and Timers App</h1>

      <button type="button" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {showForm && <Form onSubmit={handleFormSubmit} />}

      {message && <p>{message}</p>}
    </>
  );
}

export default App;
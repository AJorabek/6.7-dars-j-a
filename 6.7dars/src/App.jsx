import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuid } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [words, setWords] = useState([]);
  const [complete, setComplete] = useState("");
  const [wordActive, setWordActive] = useState("");
  const ref = useRef(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleChange2(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let input1i = document.getElementById("input1");
    let input2i = document.getElementById("input2");
    let input1 = input1i.value;
    let input2 = input2i.value;

    if (input1 && input2) {
      const newWords = [...words];
      const newWord = {
        id: uuid(),
        input1,
        input2,
        complete,
      };
      setWords([...newWords, newWord]);
    }
    ref.current.focus();
    setInput("");
    setName("");
  }
  function handleAdd() {
    setWordActive("finish");
  }

  return (
    <>
      <div>
        <h4>Note ! click above word and it contains completed(true) but you can't remove</h4>
        <form id="form">
          <input
            ref={ref}
            id="input1"
            type="text"
            value={input}
            placeholder="Eng word..."
            onChange={handleChange}
            autoFocus
          />
          <input
            id="input2"
            type="text"
            value={name}
            placeholder="Uzb word..."
            onChange={handleChange2}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
        <div>
          <h4>Rendering word :</h4>
          <div>
            Full translation: {input} {name}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>eng:</th>
                <th>uzb:</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word) => (
                <tr key={word.id}>
                  <td
                    onClick={handleAdd}
                    className={wordActive ? "finish" : "finis"}
                  >
                    {word.input1}
                  </td>
                  <td
                    onClick={handleAdd}
                    className={wordActive ? "finish" : "finis"}
                  >
                    {word.input2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

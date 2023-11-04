import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  console.log("i am rendering");
  const [password, setPassword] = useState("");
  const [containUppercase, setContainUppercase] = useState(false);
  const [containDigit, setContainDigit] = useState(false);
  const [containSymbol, setContainSymbol] = useState(false);
  const [length, setLength] = useState(8);

  function handleDigit() {
    setContainDigit(!containDigit);
  }

  function handleUppercase() {
    setContainUppercase(!containUppercase);
  }

  function handleSymbol() {
    setContainSymbol(!containSymbol);
  }

  function handleLength(event) {
    setLength(event.target.value);
  }

  function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let dict = lowercaseChars;
    if (containDigit) {
      dict += numberChars;
    }
    if (containUppercase) {
      dict += uppercaseChars;
    }
    if (containSymbol) {
      dict += symbolChars;
    }
    let newPassoword = "";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * dict.length);
      newPassoword += dict.charAt(randomIndex);
    }
    setPassword(newPassoword);
  }

  return (
    <div className="App flex flex-col border-8 border-slate-500">
      <h1>Create Your Password</h1>
      {/**
       * Length
       */}
      <label htmlFor="length">What Should be the password length?</label>
      <input
        type="number"
        id="length"
        value={length}
        onChange={(e) => handleLength(e)}
      />
      {/**
       * Number
       */}
      <label htmlFor="number">Should the password contain Numbers</label>
      <input
        type="checkbox"
        id="number"
        checked={containDigit}
        onChange={handleDigit}
      />

      {/**
       * Uppercase
       */}
      <label htmlFor="uppercase">Should the password contain Uppercase</label>
      <input
        type="checkbox"
        id="uppercase"
        checked={containUppercase}
        onChange={handleUppercase}
      />

      {/**
       * Symbols
       */}
      <label htmlFor="symbol">Should the password contain Symbols</label>
      <input
        type="checkbox"
        id="symbol"
        checked={containSymbol}
        onChange={handleSymbol}
      />

      <h1>{password}</h1>
      <button
        className="border-1 border-slate-50 bg-slate-300"
        onClick={generatePassword}
      >
        Click to generate the password
      </button>
    </div>
  );
}

export default App;

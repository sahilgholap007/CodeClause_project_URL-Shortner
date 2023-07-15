import "./App.css";
import React from "react";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';


function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setShortUrl(data.result.full_short_link);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="App">
      <ul class="background">
        <div className="container">
          <h1>URL SHORTNER</h1>
          <div className="input-fields">
            <label
              htmlForfor="website"
              class="block text-xl font-medium text-gray-900 dark:text-white "
            >
              URL
            </label>
            <input
              type="url"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="ENTER YOUR URL HERE"
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-md px-5 py-4  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
            onClick={handleSubmit}
          >
            SHORTEN
          </button>
          <h2>Shortened Link: {shortUrl}</h2>
          <CopyToClipboard text={shortUrl}>
            <button
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-md px-5 py-4  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              onClick={() => alert("The URL has been copied")}
            >
              copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;

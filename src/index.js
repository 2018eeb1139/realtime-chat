import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB14FaKgZj9xO1LXa7IN1ODmGY_IBD3xhs",
  authDomain: "realtimechat-da344.firebaseapp.com",
  projectId: "realtimechat-da344",
  storageBucket: "realtimechat-da344.appspot.com",
  messagingSenderId: "897423920039",
  appId: "1:897423920039:web:03646e97fef09bd69f4482",
  measurementId: "G-2HZJ61XRED",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

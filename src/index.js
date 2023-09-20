import React from "react";
import ReactDOM from "react-dom";

const currentYear = new Date().getFullYear();
const yourName = "Gardas sai vamshi krishna";

function App() {
  return (
    <div className="App">
      <p>Created by {yourName}.</p>
      <p>Copyright {currentYear}.</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

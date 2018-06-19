import React from "react";
import ReactDOM from "react-dom";
import HierarchyNavigation from "./components/HierarchyNavigation";

// import "./styles.css";

function App() {
  return (
    <div className="App">
      <HierarchyNavigation />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

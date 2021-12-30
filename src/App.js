import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UsersList";
import { ComponentProvider } from "./contexts/ComponentContext";

function App() {
  return (
    <div className="App">
      <ComponentProvider>
        <SearchBar />
        <UsersList />
      </ComponentProvider>
    </div>
  );
}

export default App;

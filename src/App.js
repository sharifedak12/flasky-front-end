import "./App.css";
import Doglist from "./components/Doglist.js";

function App() {
  const dogs = [
    {
      name: "Fido",
      id: "209",
      age: "3",
      breed: "Poodle",
      chip: "BA3399V22342",
    },
    { name: "Buddy", id: "234", age: "2", breed: "Labrador" },
    { name: "Bella", id: "228", age: "1", breed: "Shiba Inu" },
    {
      name: "Ellie",
      id: "442",
      age: "7",
      breed: "Karelian Bear Dog",
      chip: "BA3ET23223542",
    },
    {
      name: "Emma",
      id: "239",
      age: "5",
      breed: "Samoyed",
      chip: "AA3430924C42",
    },
  ];
  return (
    <main>
      <h1>Here are some dogs:</h1>
      <Doglist dogs={dogs} />
    </main>
  );
}

export default App;

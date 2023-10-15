import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();

  const [theCoffees, setTheCoffees] = useState(coffees);

  console.log(coffees);
  return (
    <>
      <h1 className="text-xl">Hot Hot Cold Coffee</h1>
      <div className="grid grid-cols-2 gap-6">
        {theCoffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setTheCoffees={setTheCoffees} />
        ))}
      </div>
      <Link to="/addCoffee">Add Coffee</Link>
    </>
  );
}

export default App;

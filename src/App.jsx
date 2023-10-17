import bg from "./assets/images/more/1.png";
import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import { TbMug } from "react-icons/tb";
import Header from "./components/Header";

function App() {
  const coffees = useLoaderData();

  const [theCoffees, setTheCoffees] = useState(coffees);

  console.log(coffees);
  return (
    <>
      <Header />
      <main
        className="mt-28"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col items-center gap-3">
          <small className="text-xl leading-5 text-gray-900">
            --- Sip & Savor ---
          </small>
          <h1 className="text-5xl font-rancho text-coffee-header-brown drop-shadow-2xl relative blur-sm">
            Our Popular Products
          </h1>
          <h1 className="text-5xl font-rancho text-coffee-header-brown absolute mt-8">
            Our Popular Products
          </h1>
          <Link
            to="/addCoffee"
            className="btn font-normal border-2 border-coffee-header-brown bg-[#E3B577] text-white">
            <span className="relative blur-sm font-rancho text-2xl">
              Add Coffee
            </span>
            <span className="absolute -ml-8 font-rancho text-2xl">
              Add Coffee
            </span>{" "}
            <TbMug className="text-2xl text-coffee-header-brown" />
          </Link>
        </div>
        {typeof theCoffees === "object" ? (
          <div className="grid grid-cols-2 gap-6 my-20 max-w-5xl mx-auto">
            {theCoffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setTheCoffees={setTheCoffees}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity text-accent w-32"></span>
            <p>
              The server may not start correctly or it is for server downtime.
            </p>
            <span className="loading loading-infinity text-accent w-32"></span>
          </div>
        )}

        <div className="flex flex-col items-center gap-3">
          <small className="text-xl leading-5 text-gray-900">
            Follow Us Now
          </small>
          <h1 className="text-5xl font-rancho text-coffee-header-brown drop-shadow-2xl relative blur-sm">
            Follow on Instagram
          </h1>
          <h1 className="text-5xl font-rancho text-coffee-header-brown absolute mt-8">
            Follow on Instagram
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto my-20">
          <img src="https://i.ibb.co/SR5m3qQ/Rectangle-9.png" alt="" />
          <img src="https://i.ibb.co/KKHMQCt/Rectangle-10.png" alt="" />
          <img src="https://i.ibb.co/qss6YhP/Rectangle-11.png" alt="" />
          <img src="https://i.ibb.co/bmP3RrH/Rectangle-12.png" alt="" />
          <img src="https://i.ibb.co/ZhQfNRB/Rectangle-13.png" alt="" />
          <img src="https://i.ibb.co/HBT6vVY/Rectangle-14.png" alt="" />
          <img src="https://i.ibb.co/3dC7nNL/Rectangle-15.png" alt="" />
          <img src="https://i.ibb.co/C0qMKWW/Rectangle-16.png" alt="" />

          {/* <img src="https://i.ibb.co/cY9GNtw/5.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/RvfSSBs/6.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/MpW1pYf/6.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/MyHHSwy/7.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/1nDv7Mv/8.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/4tz4mk1/9.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/2sT8R8Q/10.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/5FtcMF7/10.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/QkS43yQ/11.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/crSSnzS/12.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/GV1dmKf/12.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/B2R50yy/13.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/F3mhBRS/14.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/zSMDXGz/15.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/6tHZHgd/16.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/QCSGQXt/16.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/HYPWFdj/17.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/R265ykS/17.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/1QYRn67/18.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/XygwNy3/19.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/K5LFW61/20.png" alt="" /> */}

          {/* <img src="https://i.ibb.co/Bst2SGw/21.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/Px2GZf6/22.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/c8tqyjD/23.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/J52qVBv/24.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/cwWBqLt/25.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/XD0Gb56/26.png" alt="" /> */}
          {/* <img src="https://i.ibb.co/RB3XqwR/27.jpg" alt="" /> */}
          {/* <img src="https://i.ibb.co/QFqbbCn/28.jpg" alt="" /> */}
        </div>
      </main>
    </>
  );
}

export default App;

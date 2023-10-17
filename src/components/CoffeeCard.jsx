import PropTypes from "prop-types";
import blackTea from "../assets/images/1.png";
// import teaPhoto from "../assets/images/2.png";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { GrView } from "react-icons/gr";

const CoffeeCard = ({ coffee, coffees, setTheCoffees }) => {
  const { _id, name, photo, chef } = coffee;

  const price = 890;

  const handleDelete = (_id) => {
    console.log(_id);
    if (confirm("Are you want to delete?")) {
      fetch(
        `https://coffee-store-server-seven-gamma.vercel.app/coffee/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setTheCoffees(remaining);
          }
        });
    }
  };

  return (
    <div className="card card-side card-compact bg-card rounded-none card-bordered">
      <figure>
        <img src={blackTea || photo} alt={name} />
      </figure>
      <div className="flex gap-10 ms-3 items-center">
        <div className="flex flex-col">
          <h2 className="card-title">
            <span className="font-semibold">Name:</span> {name}
          </h2>
          <h2 className="card-title">
            <span className="font-semibold">Chef:</span> {chef}
          </h2>
          <h2 className="card-title">
            <span className="font-semibold">Price:</span> {price} TK
          </h2>
        </div>
        <div className="card-actions flex-col justify-center">
          <button className="btn btn-primary">
            <GrView />
          </button>
          <button className="btn btn-info" to={`/updateCoffee/${_id}`}>
            <MdModeEditOutline />
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setTheCoffees: PropTypes.func,
};

export default CoffeeCard;

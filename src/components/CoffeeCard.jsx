import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CoffeeCard = ({ coffee, coffees, setTheCoffees }) => {
  const { _id, name, photo } = coffee;

  console.log(setTheCoffees, typeof setTheCoffees);

  const handleDelete = (_id) => {
    console.log(_id);
    if (confirm("Are you want to delete?")) {
      fetch(`http://127.0.0.1:5000/coffee/${_id}`, {
        method: "DELETE",
      })
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
    <div className="card card-side card-compact bg-base-100 rounded-none card-bordered">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="flex gap-3 ms-3">
        <h2 className="card-title">Name: {name}</h2>
        <div className="card-actions flex-col justify-center">
          <button className="btn btn-primary">View</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-info">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete
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

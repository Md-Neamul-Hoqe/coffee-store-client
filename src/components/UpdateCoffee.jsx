import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const Form = e.target;

    const name = Form.name.value;
    const chef = Form.chef.value;
    const supplier = Form.supplier.value;
    const taste = Form.taste.value;
    const category = Form.category.value;
    const details = Form.details.value;
    const photo = Form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    fetch(`https://coffee-store-server-seven-gamma.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) alert("Updated successfully.");
      });
  };

  return (
    <div className="hero min-h-screen bg-transparent">
      <div className="hero-content">
        <div className="card w-full max-w-4xl bg-transparent">
          <Link
            to="/"
            className="font-rancho my-12 bg-transparent text-coffee-header-gray flex gap-2 text-3xl justify-start items-center">
            <AiOutlineArrowLeft className="text-coffee-header-brown" /> Back to
            home
          </Link>
          <form
            onSubmit={handleUpdateCoffee}
            className="card-body bg-[#F4F3F0]">
            <div className="text-center">
              <h1 className="text-5xl font-rancho text-coffee-header-gray">
              Update Existing Coffee Details
              </h1>
              <p className="text-xl">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex max-lg:flex-col gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee Name"
                    name="name"
                    className="input input-bordered"
                    defaultValue={name}
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee Chef"
                    name="chef"
                    className="input input-bordered"
                    defaultValue={chef}
                    required
                  />
                </div>
              </div>
              <div className="flex max-lg:flex-col gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee Supplier"
                    name="supplier"
                    className="input input-bordered"
                    defaultValue={supplier}
                    required
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee Taste"
                    name="taste"
                    className="input input-bordered"
                    defaultValue={taste}
                    required
                  />
                </div>
              </div>
              <div className="flex max-lg:flex-col gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee category"
                    name="category"
                    className="input input-bordered"
                    defaultValue={category}
                    required
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee Details"
                    name="details"
                    className="input input-bordered"
                    defaultValue={details}
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter Photo URL"
                  name="photo"
                  className="input input-bordered"
                  defaultValue={photo}
                  required
                />
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  className="btn rounded-[5px] border-coffee-header-brown text-coffee-header-brown bg-action-tan capitalize font-rancho text-2xl">
                  Update Coffee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;

import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const Form = e.target;

    const name = Form.name.value;
    const chef = Form.chef.value;
    const supplier = Form.supplier.value;
    const taste = Form.taste.value;
    const category = Form.category.value;
    const details = Form.details.value;
    const photo = Form.photo.value;

    const coffeeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(coffeeInfo);

    fetch("https://coffee-store-server-seven-gamma.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) alert("A new tea added.");
      });
  };

  /* home page */
  // https://i.ibb.co/993Psyv/1.png
  // https://i.ibb.co/4ZTxX8v/2.png
  // https://i.ibb.co/YZjLKrk/3.png
  // https://i.ibb.co/zJqHPbp/4.png
  // https://i.ibb.co/Bst2SGw/21.png
  // https://i.ibb.co/Px2GZf6/22.png
  // https://i.ibb.co/c8tqyjD/23.png
  // https://i.ibb.co/J52qVBv/24.jpg
  // https://i.ibb.co/cwWBqLt/25.jpg
  // https://i.ibb.co/XD0Gb56/26.png
  // https://i.ibb.co/RB3XqwR/27.jpg
  // https://i.ibb.co/QFqbbCn/28.jpg
  // https://i.ibb.co/qpJd0Lf/footer.png
  // https://i.ibb.co/jygG4Cm/img-03.png
  // https://i.ibb.co/cyZDzdh/logo1.png
  // https://i.ibb.co/cY9GNtw/5.png
  // https://i.ibb.co/RvfSSBs/6.jpg
  // https://i.ibb.co/MpW1pYf/6.png
  // https://i.ibb.co/MyHHSwy/7.png
  // https://i.ibb.co/1nDv7Mv/8.png
  // https://i.ibb.co/4tz4mk1/9.png
  // https://i.ibb.co/2sT8R8Q/10.jpg
  // https://i.ibb.co/5FtcMF7/10.png
  // https://i.ibb.co/QkS43yQ/11.png
  // https://i.ibb.co/crSSnzS/12.jpg
  // https://i.ibb.co/GV1dmKf/12.png
  // https://i.ibb.co/B2R50yy/13.jpg
  // https://i.ibb.co/F3mhBRS/14.jpg
  // https://i.ibb.co/zSMDXGz/15.jpg
  // https://i.ibb.co/6tHZHgd/16.jpg
  // https://i.ibb.co/QCSGQXt/16.png
  // https://i.ibb.co/HYPWFdj/17.jpg
  // https://i.ibb.co/R265ykS/17.png
  // https://i.ibb.co/1QYRn67/18.png
  // https://i.ibb.co/XygwNy3/19.png
  // https://i.ibb.co/K5LFW61/20.png

  // follow on instagram
  // https://i.ibb.co/SR5m3qQ/Rectangle-9.png
  // https://i.ibb.co/KKHMQCt/Rectangle-10.png
  // https://i.ibb.co/qss6YhP/Rectangle-11.png
  // https://i.ibb.co/bmP3RrH/Rectangle-12.png
  // https://i.ibb.co/ZhQfNRB/Rectangle-13.png
  // https://i.ibb.co/HBT6vVY/Rectangle-14.png
  // https://i.ibb.co/3dC7nNL/Rectangle-15.png
  // https://i.ibb.co/C0qMKWW/Rectangle-16.png

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
          <form onSubmit={handleAddCoffee} className="card-body bg-[#F4F3F0]">
            <div className="text-center">
              <h1 className="text-5xl font-rancho text-coffee-header-gray">
                Add New Coffee
              </h1>
              <p className="text-body/70 text-lg leading-[30px] my-8">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
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
                  required
                />
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  className="btn rounded-[5px] border-coffee-header-brown text-coffee-header-brown bg-action-tan capitalize font-rancho text-2xl">
                  Add Coffee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

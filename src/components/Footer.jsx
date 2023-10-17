import logo from "../assets/images/more/logo1.png";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const handleEmail = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <footer
        style={{
          backgroundImage: "url('../src/assets/images/more/13.jpg')",
        }}>
        <div className="md:flex p-10 text-xl max-w-5xl mx-auto">
          <div className="flex-1 w-full">
            <aside className="flex flex-col items-start text-start">
              <img
                src={logo}
                className="w-[75px] h-auto"
                alt="Espresso Emporium"
              />
              <header className="text-4xl font-rancho text-coffee-header-brown my-5">
                Espresso Emporium
              </header>
              <p className="text-xl">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </aside>

            {/* Social Buttons */}
            <nav className="py-5">
              <div className="grid grid-flow-col gap-4 justify-start text-coffee-header-brown">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
            <nav className="py-5">
              <header className="text-4xl font-rancho text-coffee-header-brown my-5">
                Get in Touch
              </header>
              <a className="link link-hover flex items-center gap-2">
                <IoCallSharp />
                +88 01533 333 333
              </a>
              <a className="link link-hover flex items-center gap-2">
                <MdEmail /> info@gmail.com
              </a>
              <a className="link link-hover flex items-center gap-2">
                <IoLocationSharp /> 72, Wall street, King Road, Dhaka
              </a>
            </nav>
          </div>
          <nav className="flex-1 w-full">
            <header className="text-4xl font-rancho text-coffee-header-brown">
              Connect with Us
            </header>
            <div className="card">
              <form
                onSubmit={handleEmail}
                className="card-body px-0 items-start">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text sr-only">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text sr-only">Email</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="email"
                    className="input"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text sr-only">Message</span>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="textarea"
                    rows={5}
                    required></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border border-coffee-header-brown text-coffee-header-brown rounded-3xl text-2xl font-rancho">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </footer>
      <footer
        className="footer px-10 py-4 text-white font-rancho text-xl"
        style={{
          backgroundImage: "url('../src/assets/images/more/footer.png')",
        }}>
        <span className="mx-auto">
          Copyright Espresso Emporium ! All Rights Reserved
        </span>
      </footer>
    </>
  );
};

export default Footer;
// Copyright Espresso Emporium ! All Rights Reserved

const Header = () => {
  return (
    <header>
      <div
      className="w-screen min-h-screen"
        style={{
          backgroundImage: "url('https://i.ibb.co/gyt5fdg/3.png')",
          backgroundSize: "100%",
        }}></div>
      <div className="py-14 bg-card">
        <div className="grid grid-cols-4 max-w-5xl mx-auto gap-10">
          <div className="card items-start">
            <figure>
              <img src="https://i.ibb.co/993Psyv/1.png" alt="" />
            </figure>
            <div className="card-body px-0">
              <h3 className="card-title font-rancho font-normal text-coffee-header-brown text-3xl">
                Awesome Aroma
              </h3>
              <p className="text-coffee-header-gray">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="card items-start">
            <figure>
              <img src="https://i.ibb.co/4ZTxX8v/2.png" alt="" />
            </figure>
            <div className="card-body px-0">
              <h3 className="card-title font-rancho font-normal text-coffee-header-brown text-3xl">
                Awesome Aroma
              </h3>
              <p className="text-coffee-header-gray">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="card items-start">
            <figure>
              <img src="https://i.ibb.co/YZjLKrk/3.png" alt="" />
            </figure>
            <div className="card-body px-0">
              <h3 className="card-title font-rancho font-normal text-coffee-header-brown text-3xl">
                Awesome Aroma
              </h3>
              <p className="text-coffee-header-gray">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="card items-start">
            <figure>
              <img src="https://i.ibb.co/zJqHPbp/4.png" alt="" />
            </figure>
            <div className="card-body px-0">
              <h3 className="card-title font-rancho font-normal text-coffee-header-brown text-3xl">
                Awesome Aroma
              </h3>
              <p className="text-coffee-header-gray">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

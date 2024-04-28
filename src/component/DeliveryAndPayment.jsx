const DeliveryAndPayment = () => {
  return (
    <div className="healthy-food-section py-5" id="main-healthy-food-section">
      <div className="container">
        <div className="grid-rows-12">
          <div className="col-md-5">
            <div className="text-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                className="healthy-food-section-img"
              />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <h1 className="healthy-food-section-heading">
              Fresh, Healthy, Organic, Delicious Fruits
            </h1>
            <p className="healthy-food-section-description">
              Say no to harmful chemicals and go fully organic with our range of
              fresh fruits and veggies. Pamper your body and your senses with
              the true and unadulterated gifts from mother nature. with the true
              and unadulterated gifts from mother nature.
            </p>
            <button className="custom-button">Watch Video</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPayment;

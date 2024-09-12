const Hero=()=>{
   
    return (
      <main className="hero container">
        <div className="hero-content">
          
          <h2>Deal Parinda</h2>
          <h3>Print Your Memories</h3>
          <p>Deal Parinda provides you the best range of cold drink, custom designed frame, packaged drinking water, aluminium utensils, soft drink concentrate & stainless steel utensils with effective & timely delivery.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero-image" />
        </div>
      </main>
    );
  };
export default Hero;
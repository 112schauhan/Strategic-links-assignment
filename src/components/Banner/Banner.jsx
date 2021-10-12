import image from "../../assets/image.PNG";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="main-section">
      <div className="main-heading">
        <h1>Better digital experience with Ninestars</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <button>Get Started</button>
      </div>
      <div className="image-container">
        <img src={image} alt="not found" />
      </div>
    </div>
  );
};

export default Banner;

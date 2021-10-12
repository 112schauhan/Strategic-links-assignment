import secondImage from "../../assets/second-section-image.PNG";
import './SecondSection.css';

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="second-image-container">
        <img src={secondImage} alt="Not found" />
      </div>
      <div className="second-section-heading">
        <h1>Voluptatem dignissimos provident quasi</h1>
      </div>
    </div>
  );
};

export default SecondSection;

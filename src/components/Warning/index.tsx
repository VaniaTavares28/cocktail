import images from "../../assets/images";
import "./index.css";

const Warning = ({ warning }: { warning: string }) => {
  return (
    <div className="warning-container">
      <article className="warning-image-container">
        <img src={images.glasses} alt="glasses" />
      </article>
      <h2>{warning}</h2>
    </div>
  );
};

export default Warning;

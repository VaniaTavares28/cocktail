import images from "../../assets/images";

const Warning = ({ warning }: { warning: string }) => {
  return (
    <div className="warning-container">
      <article className="warning-image-container">
        <img src={images.glasses} alt="glasses" />
      </article>
      <h3>{warning}</h3>
    </div>
  );
};

export default Warning;

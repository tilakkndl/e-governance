import Button from "../Button";

const CategoryCard = ({ cropData ,btnText, onClick}) => {
  const { crop, description, image } = cropData;

  return (
    <>
      <div
        className=" m-2 w-[300px] h-[450px] hover:scale-105 transition-all
        ease-in-out shadow-xl rounded-lg overflow-hidden bg-white flex flex-col gap-8"
      >
        <img src={image} alt={crop} className="w-full h-[200px] " />
        <div className="p-2">
          <h1 className="font-semibold text-g2xl first-letter:uppercase mb-2">
            {crop}
          </h1>
          <p className="mb-2 ">{description.substring(0, 110)}...</p>
          <Button
            buttonText={btnText}
            roundedHalf
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;

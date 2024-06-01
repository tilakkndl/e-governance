import { BsFillCartPlusFill } from "react-icons/bs";

const Button = ({
  center,
  full,
  buttonText,
  error,
  icon,
  roundedHalf,
  onClick,
}) => {
  return (
    <div className={`my-2 ${center && "text-center"}`} onClick={onClick}>
      <button
        type="submit"
        className={`
            ${full && "w-full"}
            ${error && "cursor-not-allowed"}
            ${icon && "flex justify-between items-center"}
            ${roundedHalf ? "rounded-lg" : "rounded-full"}
          text-white text-base
            bg-secondary-color 
            py-3 px-5
            
            min-h-[40px]
            tracking-[0.01em]
            hover:bg-primary-color
            transition duration-500
          `}
      >
        {buttonText}
        {icon && <BsFillCartPlusFill size={22} />}
      </button>
    </div>
  );
};

export default Button;

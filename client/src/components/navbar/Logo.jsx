import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <div
          className="
            text-4xl font-bold -tracking-tighter
            cursor-pointer hidden md:block
          "
        >
          कृषि Connect
        </div>
        <div
          className="
            text-2xl font-bold -tracking-tighter
            cursor-pointer md:hidden
          "
        >
          KC
        </div>
      </Link>
    </>
  );
};

export default Logo;

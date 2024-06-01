import { DotLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div
      className="
        fixed inset-0 
        bg-white/[0.5] 
        z-50 
        grid place-items-center
      "
    >
      <DotLoader loading={loading} color="#43a69b" />
    </div>
  );
};

export default Loader;

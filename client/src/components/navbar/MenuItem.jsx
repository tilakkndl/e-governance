const MenuItem = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
        px-4 py-3 
        hover:bg-red-50 transition 
        font-semibold text-base
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;

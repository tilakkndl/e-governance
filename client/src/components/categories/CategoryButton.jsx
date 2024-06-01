const CategoryButton = ({
  label,
  onClick,
  outline,
  small,
  half,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative rounded-lg hover:opacity-80 transition
        ${outline ? "bg-slate-200" : "bg-primary-color"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
        ${half ? "w-fit px-6" : "w-full"}
  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default CategoryButton;

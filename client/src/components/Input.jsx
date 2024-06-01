const Input = ({ label, placeholder, type, name, onChange, onBlur }) => {
  return (
    <div className="w-full mb-4">
      <label
        className={`
          text-sm after:content-['*'] after:ml-1
          after:text-[#e02b27] after:text-base
      `}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={`
          text-base
          border
          p-2 tablet:p-3
          w-full min-h-[43px] tablet:min-h-[58px]
          bg-white
        `}
      />
    </div>
  );
};

export default Input;

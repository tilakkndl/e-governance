const Input = ({
  label,
  placeholder,
  type,
  name,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  const error = errors[name];
  const isTouched = touched[name];

  return (
    <div className={`w-full ${errors ? '' : 'mb-4'}`}>
      <label
        className={`
          text-lg after:content-['*'] after:ml-1
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
          px-2 py-4 md:p-3 mt-2
          min-w-[250px] w-full min-h-[43px] md:min-h-[58px]
          bg-white
          ${
            errors && error && touched && isTouched
              ? 'border-rose-500 focus:border-rose-500 mb-0'
              : 'border-neutral-300 focus:border-black mb-5'
          }
        `}
      />
      {errors && error && touched && isTouched && (
        <p className="mb-5 text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;

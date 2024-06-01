import { useNavigate } from "react-router";

const Categories = ({ categoriesList }) => {
  const navigate = useNavigate();

  return (
    <div className="pb-8 pt-4">
      <ul className="flex items-center justify-start gap-4 flex-wrap">
        {categoriesList.map(({ id, title, icon: Icon, path }) => (
          <li
            key={id}
            className="
              flex items-center gap-2 
              border rounded-full 
              px-3 py-1
              cursor-pointer
              hover:bg-text-primary-color hover:text-primary-color
              transition ease duration-500
            "
            onClick={() => navigate(path)}
          >
            <Icon />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

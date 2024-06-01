import Container from "../Container";
import Bottom from "./bottom/Bottom";
import Categories from "./middle/Categories";
import MainNav from "./top/MainNav";

import { FaTractor } from "react-icons/fa";
// import { AiFillShop } from "react-icons/ai";
import { RiGovernmentFill } from "react-icons/ri";

const categoriesList = [
  {
    id: 1,
    title: "Farmers Trick",
    icon: FaTractor,
    path: "/farmers-trick",
  },
  {
    id: 2,
    title: "Subsidies",
    icon: RiGovernmentFill,
    path: "/subsidies",
  },
  // {
  //   id: 3,
  //   title: "Agro Market",
  //   icon: AiFillShop,
  //   path: "/agro-market",
  // },
];

const Navbar = ({
  categories,
  bottom,
  menu,
  search,
  onSearch,
  secondary,
  signIn,
  signUp,
}) => {
  return (
    <nav
      className={`
        w-full z-10 shadow-sm pt-4 pb-12
        ${
          secondary
            ? "text-primary-color"
            : "bg-primary-color text-text-primary-color"
        }
    `}
    >
      <Container>
        <MainNav
          menu={menu}
          search={search}
          onSearch={onSearch}
          secondary={secondary}
          signIn={signIn}
          signUp={signUp}
        />
        {categories && <Categories categoriesList={categoriesList} />}
        {bottom && <Bottom />}
      </Container>
    </nav>
  );
};

export default Navbar;

import Container from "../Container";

const lists = ["Home", "Terms", "Privacy", "Policy", "Contact"];

const Copyright = () => {
  return (
    <div className="bg-[#202020] text-[#878787] py-4 text-center">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0">
            Copyright &copy; 2023, All Right Reserved{" "}
            <span className="text-primary-color">कृषि Connect</span>
          </p>
          <ul className="flex flex-wrap items-center justify-center leading-3 gap-4">
            {lists.map((list) => (
              <li
                key={list}
                className="cursor-pointer hover:text-primary-color transition duration-200"
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Copyright;

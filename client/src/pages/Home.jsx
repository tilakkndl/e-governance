import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../components/Container";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import HomePagePic from "../../public/assets/homepage-pic.jpg";
import axios from "axios";
const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSearch = () => {};

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [navigate, token]);

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return (
    <div>
      <Navbar categories bottom menu search onSearch={handleSearch} />
      <Container>
        <div className=" flex z-50 -mt-10 -mb-32">
          <div className="h-[90vmin] bg-slate-50  shadow-md max-w-[50%] px-5 pt-2">
            <h1 className="font-bold text-[4rem] text-primary-color pt-5">
              कृषि उन्नति,देशको प्रगति।
            </h1>
            <p className="text-xl mt-5">
              कृषि नेपालको विकासमा महत्त्वपूर्ण भूमिका खेलेको छ। यसले नेपालको
              आर्थिक प्रगति, रोजगार पैदा गरेको छ र खाद्य सुरक्षामा महत्त्वपूर्ण
              योगदान पनि गरेको छ। कृषि विकासमा नयाँ प्रौद्योगिक, उत्पादन वृद्धि,
              र किसानहरूको जीवनस्तर बढाउँदैछ र नेपाललाई आर्थिक स्थायिता प्रदान
              गरेको छ। <br /> ई-सरकारको माध्यमबाट कृषि सेक्टरमा प्रशासनिक
              व्यवस्थापन गर्दै, कृषि सेवाहरू अधिक सुविधापूर्ण, पारदर्शी र
              प्रभावी बनाइन्छ। नेपालको कृषि सेक्टरले ई-सरकारको सहयोगमा
              खेती-पालीको व्यवस्थापन र सुधार गर्दै आर्थिक प्रगति गर्दैछ।
            </p>
            <button
              className="bg-primary-color w-[200px] h-[50px] mt-10 rounded-3xl text-white "
              onClick={() => navigate("/farmers-trick")}
            >
              Get Started
            </button>
          </div>
          <img
            className=" max-w-[50%]"
            src={HomePagePic}
            alt="homepage-agri-pic"
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

import axios from "axios";

import { useEffect, useState } from "react";

import Container from "../../components/Container";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CategoryCard from "../../components/categories/CategoryCard";
import { useNavigate } from "react-router";

const FarmersTrick = () => {
  const [cropDatas, setCropDatas] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/admin/crop")
        .then((res) => {
          setCropDatas(res.data.crops);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar categories bottom menu search />
      <Container>
        <div className=" bg-slate-50 -my-10  cursor-pointer shadow-lg">
          <div className="p-6 ">
            <h1 className="font-medium text-[2rem] text-primary-color">
              Crops
            </h1>
            <div className="flex flex-wrap justify-center gap-16 h-full mt-5">
              {cropDatas?.map((cropData) => {
                return (
                  <CategoryCard
                    cropData={cropData}
                    btnText="Plant This Crop"
                    key={cropData._id}
                    onClick={() => navigate(`/farmers-trick/${cropData.crop}`)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FarmersTrick;

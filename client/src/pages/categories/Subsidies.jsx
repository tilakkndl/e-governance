import Container from "../../components/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import CategoryCard from "../../components/categories/CategoryCard";
import { useNavigate } from "react-router";

const subObj = [
  {
    crop: "Seeds",
    description:
      "Seed subsidy program has been found to be impressive; however, it is confined to wheat and paddy only. The subsidy program is targeted mainly to the small and marginal farmers. The seed subsidy program should be expanded to pulses and oilseed crops as well.",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VlZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    crop: "Fertilizers",
    description:
      "Since 2009, the government has been providing a 40-45 percent subsidy on fertilisers. The government of Nepal has hiked prices at a time when farmers have been hit by the increased cost of production as farm inputs have become more expensive.",
    image:
      "https://images.unsplash.com/photo-1558906307-1a1c52b5ac8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVydGlsaXplcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    crop: "Hand Tractor",
    description:
      "Pokhara Metropolitan City (PMC) has distributed agriculture equipment to farmers at subsidized rate. The metropolis also informed the farmers about the use of modern equipment. Chief of Pokhara Agriculture Development Division Manohar Kadariya said that various equipment were distributed on 50 percent subsidy from the budget allocated in the current fiscal year (FY 2022/23).",
    image: "https://www.nepalyp.com/img/np/d/_1604596463_17320.jpg",
  },
  {
    crop: "Insurance",
    description:
      "There is a provision of providing 50 % subsidy in insurance premium of agriculture, livestock, fishery and food storage house from fiscal year 2078/079.",
    image:
      "https://d3fl6msah8aj3y.cloudfront.net/indianmo/financial_freedom_app/uploads/course_thumbnail_images/English/960_English_web.png",
  },
  {
    crop: "Food Storage",
    description:
      "Nepal’s cold storage facilities typically hold 3,000 metric tonnes of goods. 1,506 metric tonnes are kept in storage on average each year.The government of Nepal has made a provision for a 50% subsidy on cold storage’s cost of electricity.",
    image: "https://gubbagroup.com/wp-content/uploads/2019/06/gubba-1.png",
  },
];

const Subsidies = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar categories bottom menu search />
      <Container>
        <div className=" bg-slate-50 -my-10  cursor-pointer shadow-lg">
          <div className="p-6 ">
            <h1 className="font-medium text-[2rem] text-primary-color">
              Subsidies
            </h1>
            <div className="flex flex-wrap justify-center gap-16 h-full mt-5">
              {subObj?.map((cropData, index) => {
                return (
                  <CategoryCard
                    cropData={cropData}
                    key={index}
                    btnText="Apply"
                    onClick={() => navigate(`/subsidies/${cropData.crop}`)}
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

export default Subsidies;

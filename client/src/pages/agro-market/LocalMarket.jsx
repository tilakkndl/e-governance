import Container from "../../components/Container";
import CategoryCard from "../../components/categories/CategoryCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/navbar/middle/Categories";

import { FaTractor } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";

const categoriesList = [
  {
    id: 1,
    title: "Local Market",
    icon: FaTractor,
    path: "/local-market",
  },
  {
    id: 2,
    title: "National Market",
    icon: RiGovernmentFill,
    path: "/national-market",
  },
];

const localItems = [
  {
    crop: "Maize",
    description:
      "The maize marketing process begins with maize cultivation by farmers. Maize is a widely grown crop, and its production is influenced by factors like weather, soil conditions, and agricultural practices.",
    image:
      "https://myrepublica.nagariknetwork.com/uploads/media/2019/July/Maize-Dependency.jpg",
  },
  {
    crop: "Rice",
    description: `Rice, often referred to as the "staple of life," holds a central place in global agriculture and nutrition. With its versatility, adaptability, and cultural significance, rice transcends borders, serving as a vital food source for billions worldwide.`,
    image:
      "https://myrepublica.nagariknetwork.com/uploads/media/rice_20230828075136.JPG",
  },
  {
    crop: "CauliFlower",
    description: `Cauliflower is a cruciferous vegetable that is naturally high in fiber and B vitamins. It has many health benefits, such as aiding digestion and circulation.`,
    image:
      "https://img.taste.com.au/DBCUD8iO/taste/2007/05/cauliflower-181864-2.jpg",
  },
  {
    crop: "Spinach",
    description: `Spinach is rich in iron, vitamin C and E, potassium, and magnesium. As part of a nutritious diet, it can help support immune function, aid the digestive system, may even have anticancer properties`,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/457010d1-8c67-4840-9895-3cd828596d0b-383cc21.jpg?quality=90&resize=940,627",
  },
  {
    crop: "Lemon",
    description: `Lemons contain nutrients that may help support your cardiovascular health and protect against kidney stones and anemia, among other benefits.`,
    image:
      "https://www.tastingtable.com/img/gallery/31-types-of-lemons-and-what-makes-them-unique/intro-1656086555.jpg",
  },
];

const LocalMarket = () => {
  return (
    <>
      <Navbar categories bottom menu search />
      <Container>
        <div className=" bg-slate-50 -my-10 shadow-md">
          <div className="p-6">
            <h1 className="text-3xl font-semibold">Local Market</h1>
            <Categories categoriesList={categoriesList} />

            <div className="flex flex-wrap gap-16 h-full mt-5">
              {localItems.map((localItem, index) => {
                return (
                  <CategoryCard
                    key={index}
                    cropData={localItem}
                    btnText="Buy"
                    onClick={() => {}}
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

export default LocalMarket;

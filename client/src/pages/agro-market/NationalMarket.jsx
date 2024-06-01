import Container from "../../components/Container";
import CategoryCard from "../../components/categories/CategoryCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaTractor } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import Categories from "../../components/navbar/middle/Categories";

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

const nationalItems = [
  {
    type: "national Market",
    title: "Apple",
    description:
      "This nutritious fruit offers multiple health benefits. Apples may lower your chance of developing cancer, diabetes, and heart disease. Research says apples may also help you lose weight while improving your gut and brain health.",
    image:
      "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
  },
  {
    type: "national Market",
    title: "Orange",
    description: `Oranges are a type of healthy, low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.`,
    image:
      "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?cs=srgb&dl=pexels-pixabay-207085.jpg&fm=jpg",
  },
  {
    type: "national Market",
    title: "Wheat",
    description: `Cauliflower is a cruciferous vegetable that is naturally high in fiber and B vitamins. It has many health benefits, such as aiding digestion and circulation.`,
    image:
      "https://npr.brightspotcdn.com/1f/4c/f982487f4fbfb3da123ea35c46c7/wheat-photo-2.jpeg",
  },
  {
    type: "national Market",
    title: "Rice",
    description: `Rice, often referred to as the "staple of life," holds a central place in global agriculture and nutrition. With its versatility, adaptability, and cultural significance, rice transcends borders, serving as a vital food source for billions worldwide.`,
    image:
      "https://img.taste.com.au/DBCUD8iO/taste/2007/05/cauliflower-181864-2.jpg",
  },
  {
    type: "national Market",
    title: "Millet",
    description: `Millets have numerous health benefits, including helping to lower your blood sugar and cholesterol levels. They’re also gluten-free, so people with celiac disease or gluten sensitivities can enjoy them.`,
    image:
      "https://cdnmedia.eurofins.com/apac/media/614884/millet-testing-poster-easi.jpg?width=500&height=375.2969121140142",
  },
];

const NationalMarket = () => {
  return (
    <>
      <Navbar categories bottom menu search />
      <Container>
        <div className=" bg-slate-50 -my-10 shadow-md">
          <div className="p-6">
            <h1 className="text-3xl font-semibold">Local Market</h1>
            <Categories categoriesList={categoriesList} />
            <div className="flex flex-wrap gap-16 h-full mt-5">
              {nationalItems.map((nationalItem, index) => {
                return (
                  <CategoryCard
                    key={index}
                    cropData={nationalItem}
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

export default NationalMarket;

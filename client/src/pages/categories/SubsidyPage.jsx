import SubsidyModal from "../../components/SubsidyModal";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const SubsidyPage = () => {
  return (
    <div>
      <Navbar secondary signUp />
      <div className="flex items-center justify-center">
        <SubsidyModal />
      </div>
      <Footer />
    </div>
  );
};

export default SubsidyPage;

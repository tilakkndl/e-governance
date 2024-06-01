import Container from "../Container";
import Copyright from "./Copyright";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";

const widgets = [
  "Home",
  "Services",
  "Contact",
  "Our Services",
  "Contact Us",
  "About",
  "Portfolio",
  "About Us",
  "Expert Team",
  "Latest News",
];

const Footer = () => {
  return (
    <div className="w-full pt-20 bg-[#151414] text-[#757575] mt-40">
      <Container>
        <FooterInfo />
        <FooterLinks widgets={widgets} />
      </Container>
      <Copyright />
    </div>
  );
};

export default Footer;

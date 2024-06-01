import SignUpModal from '../components/auth/SignUpModal';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const SignUp = () => {
  return (
    <div>
      <Navbar secondary signUp />
      <div className="flex items-center justify-center">
        <SignUpModal />
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

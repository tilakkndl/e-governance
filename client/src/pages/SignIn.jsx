import Navbar from '../components/navbar/Navbar';

import SignInModal from '../components/auth/SignInModal';
import Footer from '../components/footer/Footer';

const SignIn = () => {
  return (
    <div className="flex flex-col">
      <Navbar secondary signIn />
      <div className="flex items-center justify-center">
        <SignInModal />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;

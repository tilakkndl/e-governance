import { HiLocationMarker } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import { LuMailOpen } from 'react-icons/lu';

const FooterInfo = () => {
  return (
    <div className="border-b border-[#373636] py-6 flex   flex-col flex-wrap sm:flex-row gap-4">
      <div className="flex items-center gap-2 mr-8 sm:mr-16">
        <HiLocationMarker size={20} className="text-primary-color" />
        <div>
          <h1 className="text-white text-lg">Find us</h1>
          <p>Rudramati Marg, Handigaun-05, ktm</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mr-8 sm:mr-16">
        <IoCall size={20} className="text-primary-color" />
        <div>
          <h1 className="text-white text-lg">Call us</h1>
          <p>9876543210</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mr-8 sm:mr-16">
        <LuMailOpen size={20} className="text-primary-color" />
        <div>
          <h1 className="text-white text-lg">Mail us</h1>
          <p>mail@info.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;

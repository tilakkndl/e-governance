import Logo from '../navbar/Logo';

import { IoSend } from 'react-icons/io5';

const FooterLinks = ({ widgets }) => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row gap-4 py-4">
      <div className="max-w-[400px] flex flex-col gap-3">
        <div className="text-text-primary-color mb-7">
          <Logo />
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo
          laborum accusantium incidunt nam reiciendis consequuntur quidem libero
          excepturi. Quis, est repellat? Expedita quisquam, quis iure molestias
          exercitationem laboriosam facilis!
        </p>
        <h1 className="text-text-primary-color">Follow us</h1>
      </div>
      <div className="max-w-[400px]">
        <h1 className="text-lg text-text-primary-color pb-2 mb-8 relative after:content-[''] after:h-[2px] after:w-[54px] after:bg-primary-color after:absolute after:bottom-0 after:left-0">
          Useful Links
        </h1>
        <ul>
          {widgets.map((widget) => (
            <li
              key={widget}
              className="w-1/2 inline-block mb-1 cursor-pointer transition duration-300 hover:text-primary-color"
            >
              {widget}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[380px]">
        <h1 className="text-lg text-text-primary-color pb-2 mb-8 relative after:content-[''] after:h-[2px] after:w-[54px] after:bg-primary-color after:absolute after:bottom-0 after:left-0">
          Subscribe
        </h1>
        <p className="mb-6">
          Don’t miss to subscribe to our new feeds, kindly fill the form below.
        </p>
        <div className="flex items-center gap-2 bg-primary-color">
          <input type="text" className="w-[90%] p-2" />
          <IoSend size={20} color="white" cursor="pointer" />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;

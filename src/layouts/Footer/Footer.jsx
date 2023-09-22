import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import LOGO from "../../assets/logo.png";
import RequestForm from "../../components/RequestForm/RequestForm";

const Footer = () => {
  return (
    <footer className="pt-24 pb-4 bg-slate-400 dark:bg-slate-950 dark:text-white">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="w-full flex flex-col items-center md:flex-row justify-between mb-8 md:mb-28 gap-6 text-center">
          <h1 className="text-xl md:text-3xl">
            Everything begins with an idea."
          </h1>
          <div className="flex gap-3 text-4xl">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between mb-32 text-center md:text-left">
          <div className="hidden lg:block">
            <img className="w-40 m-0" src={LOGO} alt="Lafia Studio" />
            <RequestForm
              action="/"
              placeholder="Email address"
              buttonValue="Get's Start"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-16 lg:gap-6">
            <div>
              <h3 className="uppercase mb-4 font-bold">Design</h3>
              <div>
                <a className="block mt-3" href="#">
                  Digital branding
                </a>
                <a className="block mt-3" href="#">
                  E-commerce design
                </a>
                <a className="block mt-3" href="#">
                  UI/UX Design
                </a>
              </div>
            </div>
            <div>
              <h3 className="uppercase mb-4 font-bold">Develop</h3>
              <div>
                <a className="block mt-3" href="#">
                  E-commerce development
                </a>
                <a className="block mt-3" href="#">
                  Web development
                </a>
                <a className="block mt-3" href="#">
                  No-code development
                </a>
              </div>
            </div>
            <div>
              <h3 className="uppercase mb-4 font-bold">Grow</h3>
              <div>
                <a className="block mt-3" href="#">
                  Reserch & Strategy
                </a>
                <a className="block mt-3" href="#">
                  Visibility & Awareness
                </a>
                <a className="block mt-3" href="#">
                  Campaign Management
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>LAFIA STUDIO</div>
          <div className="flex gap-6">
            <div className="uppercase">Terms</div>
            <div className="uppercase">Privacy</div>
            <div className="uppercase">Cookies</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

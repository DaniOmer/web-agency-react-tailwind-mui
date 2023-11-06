import i18next from "i18next";
import { useSelector } from "react-redux";

import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import LOGO from "../../assets/logo.png";
import RequestForm from "../../components/RequestForm/RequestForm";

const Footer = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  return (
    <footer className="pt-24 pb-4 bg-slate-400 dark:bg-slate-950 dark:text-white">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="w-full flex flex-col items-center md:flex-row justify-between mb-8 md:mb-28 gap-6 text-center">
          <h1 className="text-xl md:text-3xl">
            {i18next.t("idea", { lng: currentLanguage })}
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
              placeholder={i18next.t("email", { lng: currentLanguage })}
              buttonValue={i18next.t("started", { lng: currentLanguage })}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-16 lg:gap-6">
            <div>
              <h3 className="uppercase mb-4 font-bold">Design</h3>
              <div>
                <a className="block mt-3" href="#">
                  {i18next.t("brand", { lng: currentLanguage })}
                </a>
                <a className="block mt-3" href="#">
                  {i18next.t("ecommerce", { lng: currentLanguage })}
                </a>
                <a className="block mt-3" href="#">
                  {i18next.t("uiDesign", { lng: currentLanguage })}
                </a>
              </div>
            </div>
            <div>
              <h3 className="uppercase mb-4 font-bold">Develop</h3>
              <div>
                <a className="block mt-3" href="#">
                  {i18next.t("web", { lng: currentLanguage })}
                </a>
                <a className="block mt-3" href="#">
                  {i18next.t("theme", { lng: currentLanguage })}
                </a>
                <a className="block mt-3" href="#">
                  {i18next.t("noCode", { lng: currentLanguage })}
                </a>
              </div>
            </div>
            <div>
              <h3 className="uppercase mb-4 font-bold">Grow</h3>
              <div>
                <a className="block mt-3" href="#">
                  {i18next.t("seoAnalysis", { lng: currentLanguage })}
                </a>
                <a className="block mt-3" href="#">
                  {i18next.t("seoStrategies", { lng: currentLanguage })}
                </a>
                <a className="block mt-3" href="#">
                  {i18next.t("seoKeyword", { lng: currentLanguage })}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>LAFIA STUDIO</div>
          <div className="flex gap-6">
            <div className="uppercase">
              {i18next.t("terms", { lng: currentLanguage })}
            </div>
            <div className="uppercase">
              {i18next.t("privacy", { lng: currentLanguage })}
            </div>
            <div className="uppercase">
              {i18next.t("cookies", { lng: currentLanguage })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

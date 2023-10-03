import WorkCard from "./WorkCard";
import WORK from "../../assets/work-1.jpg";
import LOGO from "../../assets/logo.png";

import i18next from "i18next";
import { useSelector } from "react-redux";

import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return (
    <section className="w-11/12 max-w-6xl mx-auto text-center mt-24">
      <div className="text-center">
        <h1 className="w-max mx-auto bg-blue-600 text-white rounded-3xl px-6 py-2 mb-4">
          {i18next.t("work", { lng: currentLanguage })}
        </h1>
        <h2 className="text-3xl">
          {i18next.t("lastestWork", { lng: currentLanguage })}
        </h2>
        <p className="text-sm mb-12">
          {i18next.t("awesomeProject", { lng: currentLanguage })}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-14 md:gap-6">
        <WorkCard
          image={WORK}
          category="Web design"
          title="Website design for e-commerce"
          description={i18next.t("websiteDesignDesc", { lng: currentLanguage })}
        />
        <div className="relative">
          <WorkCard
            image={LOGO}
            category="Web design"
            title="Website design for e-commerce"
            description={i18next.t("websiteDesignDesc", {
              lng: currentLanguage,
            })}
          />
          <a
            className="w-max mt-5 flex items-center gap-3 bg-blue-600 text-white rounded-lg px-6 py-3 md:absolute bottom-4 right-0"
            href="#"
          >
            {i18next.t("viewAll", { lng: currentLanguage })}
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Work;

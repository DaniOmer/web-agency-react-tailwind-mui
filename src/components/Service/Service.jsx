import i18next from "i18next";
import { useSelector } from "react-redux";

import ServiceCard from "./ServiceCard";

import { HiOutlineLightBulb } from "react-icons/hi";
import { GiPencilRuler } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { TbBrandMyOppo } from "react-icons/tb";
import { BsVectorPen } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";

const Service = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  return (
    <section className="w-11/12 max-w-6xl mx-auto mt-24" id="services">
      <h1 className="text-4xl mb-6 text-center">Services</h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<HiOutlineLightBulb />}
          title={i18next.t("logo", { lng: currentLanguage })}
          description={i18next.t("logoDesign", { lng: currentLanguage })}
        />
        <ServiceCard
          icon={<GiPencilRuler />}
          title={i18next.t("uiDesign", { lng: currentLanguage })}
          description={i18next.t("uiDesignDesc", { lng: currentLanguage })}
        />
        <ServiceCard
          icon={<CgWebsite />}
          title={i18next.t("web", { lng: currentLanguage })}
          description={i18next.t("webDesc", { lng: currentLanguage })}
        />
        <ServiceCard
          icon={<TbBrandMyOppo />}
          title={i18next.t("brand", { lng: currentLanguage })}
          description={i18next.t("brandDesc", { lng: currentLanguage })}
        />
        <ServiceCard
          icon={<BsVectorPen />}
          title={i18next.t("seo", { lng: currentLanguage })}
          description={i18next.t("seoDesc", { lng: currentLanguage })}
        />
        <ServiceCard
          icon={<LuPackageCheck />}
          title={i18next.t("package", { lng: currentLanguage })}
          description={i18next.t("packageDesc", { lng: currentLanguage })}
        />
      </div>
    </section>
  );
};
export default Service;

import { BsArrowRight } from "react-icons/bs";

import i18next from "i18next";
import { useSelector } from "react-redux";

const WorkCard = ({ image, category, title, description }) => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return (
    <div className="w-full rounded-lg flex flex-col items-start  max-h-max">
      <img src={image} alt="Recent work" className="rounded-lg mb-4" />
      <p className="w-max bg-blue-600 text-xs text-white rounded-3xl px-3 py-1 mb-4">
        {category}
      </p>
      <h2 className="text-xl mb-1">{title}</h2>
      <p className="text-left">{description}</p>
      <a
        className="mt-5 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600"
        href="#"
      >
        {i18next.t("readMore", { lng: currentLanguage })}
        <BsArrowRight />
      </a>
    </div>
  );
};
export default WorkCard;

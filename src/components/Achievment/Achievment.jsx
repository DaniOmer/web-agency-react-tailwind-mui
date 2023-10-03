import i18next from "i18next";
import { useSelector } from "react-redux";

const Achievment = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return (
    <section className="hidden w-11/12 md:max-w-6xl mx-auto md:grid md:grid-flow-row-dense md:grid-cols-4 md:grid-rows-2 mt-16 gap-2 md:gap-4">
      <div className="p-6 rounded-lg bg-gray-200 h-44">
        <span className="text-5xl font-bold block mb-2">86</span>
        {i18next.t("pendingProject", { lng: currentLanguage })}
      </div>
      <div className="p-6 rounded-lg bg-gray-700">
        <span className="text-5xl font-bold block mb-2">22</span>
        {i18next.t("finishedProject", { lng: currentLanguage })}
      </div>
      <div className="col-span-2 p-6 rounded-lg bg-slate-400 row-span-2">
        {i18next.t("brillantMind", { lng: currentLanguage })}
      </div>
      <div className="col-span-2 p-6 rounded-lg bg-blue-300">Start Project</div>
    </section>
  );
};
export default Achievment;

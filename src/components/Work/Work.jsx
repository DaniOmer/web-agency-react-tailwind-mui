import WorkCard from "./WorkCard";
import WORK from "../../assets/work-1.jpg";
import LOGO from "../../assets/logo.png";

import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto text-center mt-24">
      <div className="text-center">
        <h1 className="w-max mx-auto bg-blue-600 text-white rounded-3xl px-6 py-2 mb-4">
          Works
        </h1>
        <h2 className="text-3xl">Find our lastest works</h2>
        <p className="text-sm mb-12">
          The awesome people who make all this possible
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-14 md:gap-6">
        <WorkCard
          image={WORK}
          category="Web design"
          title="Website design for e-commerce"
          description="We build a unique design and fast website for small e-commerce company"
        />
        <div className="relative">
          <WorkCard
            image={LOGO}
            category="Web design"
            title="Website design for e-commerce"
            description="We build a unique design and fast website for small e-commerce company"
          />
          <a
            className="w-max mt-5 flex items-center gap-3 bg-blue-600 text-white rounded-lg px-6 py-3 md:absolute bottom-4 right-0"
            href="#"
          >
            View all
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Work;

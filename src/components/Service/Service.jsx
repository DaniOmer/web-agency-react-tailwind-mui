import ServiceCard from "./ServiceCard";

import { HiOutlineLightBulb } from "react-icons/hi";
import { GiPencilRuler } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { TbBrandMyOppo } from "react-icons/tb";
import { BsVectorPen } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";

const Service = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto mt-24">
      <h1 className="text-4xl mb-6 text-center">Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<HiOutlineLightBulb />}
          title="Logo design"
          description="Unlock Your Brand's Potential with Our Logo Design expertise"
        />
        <ServiceCard
          icon={<GiPencilRuler />}
          title="UI/UX Design"
          description="Elevate User Experiences
        with Our UI/UX Design Excellence"
        />
        <ServiceCard
          icon={<CgWebsite />}
          title="Web development"
          description="Turning Your Vision into Digital Reality
        with Our Web Development Prowess"
        />
        <ServiceCard
          icon={<TbBrandMyOppo />}
          title="Brand identity"
          description="Crafting Your Distinctive Brand Story
        Through Our Brand Identity Expertise"
        />
        <ServiceCard
          icon={<BsVectorPen />}
          title="Graphics design"
          description="Bringing Creativity to Life
        with Our Graphic Design Mastery"
        />
        <ServiceCard
          icon={<LuPackageCheck />}
          title="Packaging design"
          description="Elevate Your Product Presentation
        with Our Innovative Packaging Designs"
        />
      </div>
    </section>
  );
};
export default Service;

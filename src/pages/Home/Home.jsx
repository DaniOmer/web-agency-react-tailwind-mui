import Achievment from "../../components/Achievment/Achievment";
import ClientReview from "../../components/ClientReview/ClientReview";
import ContactRequest from "../../components/ContactRequest/ContactRequest";
import GrowthChart from "../../components/GrowthChart/GrowthChart";
import RecentClient from "../../components/RecentClient/RecentClient";
import Service from "../../components/Service/Service";
import Work from "../../components/Work/Work";

const Home = () => {
  return (
    <div className="w-full">
      <ContactRequest />
      <Achievment />
      <RecentClient />
      <Service />
      <Work />
      {/* <GrowthChart /> */}
      <ClientReview />
    </div>
  );
};
export default Home;

import Achievment from "../../components/Achievment/Achievment";
import ClientReview from "../../components/ClientReview/ClientReview";
import ContactRequest from "../../components/ContactRequest/ContactRequest";
import Faq from "../../components/FAQ/Faq";
import GrowthChart from "../../components/GrowthChart/GrowthChart";
import RecentClient from "../../components/RecentClient/RecentClient";
import Service from "../../components/Service/Service";
import Work from "../../components/Work/Work";

const Home = () => {
  return (
    <main className="w-full dark:bg-slate-950 dark:text-white">
      <ContactRequest />
      <Achievment />
      <RecentClient />
      <Service />
      <Work />
      <ClientReview />
      <Faq />
    </main>
  );
};
export default Home;

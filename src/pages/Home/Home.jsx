import Achievment from "../../components/Achievment/Achievment";
import ContactRequest from "../../components/ContactRequest/ContactRequest";
import NavBar from "../../components/NavBar/NavBar";
import RecentClient from "../../components/RecentClient/RecentClient";
import Service from "../../components/Service/Service";
import Work from "../../components/Work/Work";

const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <ContactRequest />
      <Achievment />
      <RecentClient />
      <Service />
      <Work />
    </div>
  );
};
export default Home;

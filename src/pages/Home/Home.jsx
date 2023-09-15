import Achievment from "../../components/Achievment/Achievment";
import ContactRequest from "../../components/ContactRequest/ContactRequest";
import NavBar from "../../components/NavBar/NavBar";
import RecentClient from "../../components/RecentClient/RecentClient";

const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <ContactRequest />
      <Achievment />
      <RecentClient />
    </div>
  );
};
export default Home;

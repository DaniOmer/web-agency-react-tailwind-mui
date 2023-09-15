import Achievment from "../../components/Achievment/Achievment";
import ContactRequest from "../../components/ContactRequest/ContactRequest";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <ContactRequest />
      <Achievment />
    </div>
  );
};
export default Home;

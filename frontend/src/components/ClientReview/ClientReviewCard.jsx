import { BiSolidQuoteAltRight } from "react-icons/bi";

const ClientReviewCard = ({ image, review, author, authorInformations }) => {
  return (
    <div className="lg:w-2/3 mx-auto flex flex-col md:flex-row gap-8 mt-16">
      <img
        className="max-w-full md:w-2/5 lg:w-3/5 rounded-tr-3xl rounded-br-lg"
        src={image}
        alt="Client"
      />
      <div>
        <p className="text-4xl text-blue-600 mb-4">
          <BiSolidQuoteAltRight />
        </p>
        <p>{review}</p>
        <div className="mt-6">
          <p className="text-blue-700 mb-4">{author}</p>
          <p>{authorInformations}</p>
        </div>
      </div>
    </div>
  );
};
export default ClientReviewCard;

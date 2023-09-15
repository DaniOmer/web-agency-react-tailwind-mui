import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const FaqCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hidDialog = isOpen ? "" : "hidden";

  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="font-bold mb-4">
          {0 + (index + 1).toString()}. {question}
        </p>
        {/* {isOpen ? <p className="mb-4">{answer}</p> : null} */}
        <p
          className={`mb-4 ${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          } transition-all ease-in duration-1000`}
        >
          {answer}
        </p>
      </div>
      <button
        onClick={() => {
          isOpen
            ? setIsOpen((prevState) => false)
            : setIsOpen((prevState) => true);
        }}
        className="text-4xl"
      >
        {isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
      </button>
    </div>
  );
};
export default FaqCard;

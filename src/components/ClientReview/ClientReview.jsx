import { useState } from "react";

import ClientReviewCard from "./ClientReviewCard";
import IMAGE from "../../assets/client.jpg";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const ClientReview = () => {
  const slides = [
    {
      image: IMAGE,
      review:
        "An exceptional experience! Lafia Studio brought our vision to life with creative design and a memorable brand identity. Their dedicated team displayed professionalism at every stage of the project. We are thrilled with the final result and highly recommend their services.",
      author: "Sarah D.",
      authorInformations: "CTO - LAFIA Studio",
    },
    {
      image: IMAGE,
      review:
        "Working with Lafia Studio was a smart decision for our business. Their web development team created a user-friendly and aesthetically pleasing website that significantly enhanced our online presence. We are grateful for their expertise and commitment to our success.",
      author: "Laura M.",
      authorInformations: "Product Manager - Scalens",
    },
    {
      image: IMAGE,
      review:
        "Lafia Studio has been our trusted partner in crafting our brand identity. Their team has been attentive to our needs and translated our vision into a visual reality. It's a pleasure to work with such talented and dedicated professionals.",
      author: "Nadia F.",
      authorInformations: "Team Leader - Packengers",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section className="max-w-6xl mx-auto mt-24 bg-slate-400 p-10 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-3xl">
      <h1 className="text-4xl mb-6 text-center">Clients reviews</h1>
      {slides.map((slide, index) => {
        return currentSlide === index ? (
          <ClientReviewCard
            image={slide.image}
            review={slide.review}
            author={slide.author}
            authorInformations={slide.authorInformations}
            key={index}
          />
        ) : null;
      })}
      <div className="flex gap-6 text-4xl justify-center mt-10">
        <button
          onClick={() => {
            currentSlide > 0
              ? setCurrentSlide(currentSlide - 1)
              : setCurrentSlide(slides.length - 1);
          }}
        >
          <BsArrowLeftCircle />
        </button>
        <button
          onClick={() => {
            currentSlide !== slides.length - 1
              ? setCurrentSlide(currentSlide + 1)
              : setCurrentSlide(0);
          }}
        >
          <BsArrowRightCircle />
        </button>
      </div>
    </section>
  );
};
export default ClientReview;
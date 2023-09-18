import CustomAccordion from "../CustomAccordion/CustomAccordion";

const Faq = () => {
  const data = [
    {
      question: "What does Lafia Studio offer exactly?",
      answer:
        "Lafia Studio is a creative agency offering a range of services, including logo design, graphic design, web development, search engine optimization (SEO), and more. Our goal is to bring your ideas to life and enhance your online and offline presence.",
    },
    {
      question: "How can I contact Lafia Studio to discuss my needs?",
      answer:
        "You can contact us using the contact form on our website, via email at [email address], or by calling us at [phone number]. We would be delighted to discuss your project and answer any questions you may have.",
    },
    {
      question:
        "How long does it take to create a logo or website with Lafia Studio?",
      answer:
        "The duration of each project can vary depending on its complexity and your specific needs. We work closely with our clients to meet agreed-upon deadlines. Please contact us to discuss your project and get a time estimate.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "The cost of our services varies depending on the scope of the project and your specific needs. We provide customized quotes for each project, so please contact us to discuss your budget and goals.",
    },
    {
      question: "How can I get started working with Lafia Studio?",
      answer:
        "To get started, please contact us using one of the communication methods mentioned above, and we'll schedule an initial consultation to discuss your needs and vision. From there, we'll create a customized work plan for your project.",
    },
  ];
  return (
    <section className="w-11/12 max-w-6xl mx-auto mt-24">
      <h1 className="text-4xl mb-6 text-center">FAQs</h1>
      <div className="flex flex-col gap-6">
        {data.map((faq, index) => {
          return (
            <CustomAccordion
              title={faq.question}
              description={faq.answer}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Faq;

import RequestForm from "../RequestForm/RequestForm";

const ContactRequest = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center mt-24 gap-2">
      <h1>With Lafia Studio</h1>
      <h2 className="text-4xl">Let's start a project together</h2>
      <p className="text-sm">
        Let's collaborate actively to craft an identity that embodies your
        personality, values, and ambitions.
      </p>
      <RequestForm
        action=""
        placeholder="Type your email address"
        buttonValue="Get Started"
      />
    </section>
  );
};
export default ContactRequest;

const RequestForm = ({ action, placeholder, buttonValue }) => {
  return (
    <form action={action} className="w-max p-1 rounded-3xl bg-gray-200">
      <input
        className="focus:outline-none mx-4 bg-transparent"
        type="text"
        placeholder={placeholder}
      />
      <button
        className="bg-blue-600 text-white rounded-3xl px-6 py-2"
        type="button"
      >
        {buttonValue}
      </button>
    </form>
  );
};
export default RequestForm;

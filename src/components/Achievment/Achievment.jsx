const Achievment = () => {
  return (
    <section className="max-w-6xl mx-auto grid grid-flow-row-dense grid-cols-4 grid-rows-2 mt-16 gap-4">
      <div className="p-6 rounded-lg bg-gray-200 h-44">
        <span className="text-5xl font-bold block mb-2">86</span>
        Project is pending
      </div>
      <div className="p-6 rounded-lg bg-gray-700">
        <span className="text-5xl font-bold block mb-2">22</span>
        Projects finished
      </div>
      <div className="col-span-2 p-6 rounded-lg bg-green-500 row-span-2">
        Brillant Minds Creating Ideas
      </div>
      <div className="col-span-2 p-6 rounded-lg bg-blue-300">Start Project</div>
    </section>
  );
};
export default Achievment;

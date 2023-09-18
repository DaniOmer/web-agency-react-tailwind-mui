const RecentClient = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center mt-24 gap-8 md:gap-40">
      <div className="flex items-center gap-2">
        <div className="border-2 border-black w-20 h-0"></div>
        <p>Meet our recent client</p>
      </div>
      <div className="flex gap-10">
        <p>Apple</p>
        <p>Tesla</p>
        <p>Amazon</p>
      </div>
    </section>
  );
};
export default RecentClient;

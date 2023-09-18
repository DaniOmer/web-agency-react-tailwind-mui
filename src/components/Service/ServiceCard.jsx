const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-400 p-5 lg:p-10 rounded-lg shadow-sm shadow-slate-400">
      <p className="text-5xl p-3 bg-neutral-300 w-max rounded-full">{icon}</p>
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default ServiceCard;

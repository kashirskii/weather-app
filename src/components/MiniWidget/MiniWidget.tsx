interface MiniWidget {
  icon: React.ReactNode;
  title: string;
  text: number | string;
  loading: boolean;
}

const MiniWidget = ({ icon, title, text, loading }: MiniWidget) => {
  if (loading) {
    return (
      <section className="bg-white w-full h-[120px] rounded-xl p-[25px] flex gap-4 items-start skeleton"></section>
    );
  }

  return (
    <section className="bg-white h-fit rounded-xl p-[25px] flex gap-4 items-start">
      <div className="pt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-medium text-[#394454] mb-1 ">{title}</h3>
        <div className="text-2xl text-[#394454] font-bold">{text}</div>
      </div>
    </section>
  );
};

export default MiniWidget;

const HeadWidgetSkeleton = () => {
  return (
    <section className="h-[360px] w-[1024px] bg-white rounded-xl border-[3px] border-[#e7e7e7]">
      <div className="flex items-end justify-between h-full p-5">
        <div className="flex flex-col items-start gap-5">
          <div className="w-32 h-32 bg-[#e7e7e7] rounded" />
          <div className="w-64 h-6 text-xl bg-[#e7e7e7] rounded pl-7" />
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="w-48 h-6 text-xl bg-[#e7e7e7] rounded"/>
          <div className="w-64 h-6 text-xl bg-[#e7e7e7] rounded"/>
        </div>
      </div>
    </section>
  );
};

export default HeadWidgetSkeleton;

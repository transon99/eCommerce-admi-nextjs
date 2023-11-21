import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div className="p-5 grid gap-5 overflow-hidden grid-cols-4 auto-rows-[minmax(180px,auto)]">
        <div className="p-5 rounded-xl bg-[#171F29]">Home</div>
        <div className="p-5 rounded-xl bg-[#171F29]">Home1</div>
        <div className="p-5 rounded-xl bg-[#171F29]">Home2</div>
        <div className="p-5 rounded-xl bg-[#171F29] col-span-1 row-span-3">
          Home3
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] ">Home4</div>
        <div className="p-5 rounded-xl bg-[#171F29] ">Home5</div>
        <div className="p-5 rounded-xl bg-[#171F29] ">Home6</div>
        {/* <div className="p-5 rounded-xl bg-[#171F29] ">Home7</div> */}
        <div className="p-5 rounded-xl bg-[#171F29] col-span-3 row-span-2">
          Home8
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] ">Home9</div>
      </div>
    </div>
  );
}

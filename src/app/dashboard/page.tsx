import ChartBox from "@/components/ChartBox";
import { FaEye } from "react-icons/fa";
import { chartBoxUser } from "../data";
import DoughnutChart from "@/components/DoughnutChart";
import { LineChart } from "@/components/LineChart";
const Dashboar = () => {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div className="p-5 grid gap-5 overflow-hidden grid-cols-1  xl:grid-cols-4 auto-rows-[minmax(180px,auto)]">
        <div className="p-5 rounded-xl bg-[#171F29]">
          <ChartBox {...chartBoxUser} Icon={FaEye} />
        </div>
        <div className="p-5 rounded-xl bg-[#171F29]">
          <ChartBox {...chartBoxUser} Icon={FaEye} />
        </div>
        <div className="p-5 rounded-xl bg-[#171F29]">
          <ChartBox {...chartBoxUser} Icon={FaEye} />
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] xl:col-span-1 xl:row-span-2 flex justify-between items-center flex-col">
          <DoughnutChart />
          <p className="ali">Sold by category</p>
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] ">
          <ChartBox {...chartBoxUser} Icon={FaEye} />
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] ">
          <ChartBox {...chartBoxUser} Icon={FaEye} />
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] ">
          <ChartBox {...chartBoxUser} Icon={FaEye} />
        </div>
        <div className="p-5 rounded-xl bg-[#171F29] xl:col-span-4">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboar;

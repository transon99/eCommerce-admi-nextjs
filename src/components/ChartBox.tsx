import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  color: string;
  Icon: IconType;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
};

const ChartBox = (props: Props) => {
  return (
    <div className="flex h-full justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2 ">
          <div>
            <props.Icon className="w-10 h-10 p-2 rounded-full bg-[#313D4A]" />
          </div>
          <span className="text-[#75818e]">{props.title}</span>
          <h1 className="font-bold text-2xl">{props.number}</h1>
        </div>
        <Link href="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="flex items-end">
        <div className="flex flex-col text-right">
          <span
            className="font-bold text-xl 2xl:text-lg"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="text-sm">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;

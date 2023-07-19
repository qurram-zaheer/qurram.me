"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

export default function CustomTimeline({ experience }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="grid justify-center grid-cols-12 mb-2 mt-2">
      <div className="timeline-gutter flex flex-col h-ful col-span-1 p-1">
        <div className="mx-auto w-1 bg-gray-400 h-full"></div>
      </div>
      <div className="flex flex-col col-span-11 items-start pt-2 pb-1">
        <div className="text-gray-400 text-sm mb-1">{experience.date}</div>
        <div className="text-gray-700 font-semibold text-lg">
          {experience.name}
        </div>
        <div
          className={`flex text-sm mb-1 ${
            experience.company === "Tulip Retail"
              ? "hover:text-rose-900"
              : "hover:text-blue-800"
          } ease-in duration-100 ${
            experience.company === "Tulip Retail"
              ? "text-rose-400"
              : "text-blue-400"
          }`}
        >
          <a href={experience.company_url}>{experience.company}</a>
          <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 my-auto"></ArrowTopRightOnSquareIcon>
        </div>
        {experience.my_work ? (
          <div className="mb-2 text-xs flex text-teal-400 hover:text-teal-800 ease-in duration-100">
            <a href={experience.my_work}>What I worked on</a>
            <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 my-auto"></ArrowTopRightOnSquareIcon>
          </div>
        ) : null}
      </div>
    </div>
  );
}

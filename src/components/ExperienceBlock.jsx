import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const ExperienceBlock = ({ item, index }) => {
  const [expand, setExpand] = useState(false);

  return (
    <article key={index}>
      <header
        className="p-2 flex flex-wrap sm:flex-nowrap justify-between gap-3 cursor-pointer rounded-md shadow-sm shadow-slate-300 relative"
        onClick={() => setExpand(!expand)}
      >
        <p className="my-auto">{item?.period}</p>
        <div className="">
          <p className="text-xl">{item?.position}</p>
          <p className="flex items-center gap-2">
            <img
              src={item.companyLogo}
              alt="Company Logo"
              className="w-8 inline"
            />
            <span className="text-lg font-extralight">
              <i>{item?.company}</i>
            </span>
          </p>
        </div>
        <BsChevronRight
          className={
            (expand ? "rotate-90" : "rotate-0") +
            " text-xl my-auto duration-200 sm:static absolute top-2 right-2"
          }
        />
      </header>
      <div
        className={
          (expand
            ? "opacity-100 h-fit translate-y-0 "
            : "opacity-0 h-0 -translate-y-8") +
          " flex flex-wrap items-start gap-3 my-3 px-3 duration-500 "
        }
      >
        <div className="sm:w-[40%] w-full py-1">
          <img src={item.image} alt="" className="object-fill w-full" />
          <p className="text-center text-xl p-2 bg-slate-400 dark:text-zinc-900 duration-500">
            {item.project}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-1">
          {item.responsibilities.map((resp, index) => (
            <p
              className="p-2 font-extralight rounded-md shadow-sm hover:shadow-slate-100 shadow-slate-400 duration-500"
              key={"expitem-" + index}
            >
              {resp}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceBlock;

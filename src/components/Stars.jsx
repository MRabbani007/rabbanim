import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = () => {
  const starsArray = [];
  for (let i = 0; i < 100; i++) {
    starsArray.push({
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      size: Math.floor(Math.random() * 30),
    });
  }

  return (
    <div className="h-screen relative flex pt-80px text-yellow-500 bg-zinc-950">
      {starsArray.map((star, index) => {
        console.log(star);
        return (
          <FaStar
            key={index}
            className={`absolute inline top-[${star.top}%] left-[${star.left}%] text-[${star.size}px]`}
          />
        );
      })}
      {/* <FaStar
        className={[
          `absolute top-[${starsArray[1].top}%] left-[05%] text-[12px]`,
        ]}
      /> */}
      {/* <FaStar className={`absolute inline top-[14%] left-[15%] text-[5px]`} />
      <FaStar className={`absolute inline top-[18%] left-[52%] text-[6px]`} />
      <FaStar className={`absolute inline top-[25%] left-[56%] text-[3px]`} />
      <FaStar className={`absolute inline top-[30%] left-[32%] text-[6px]`} />
      <FaStar className={`absolute inline top-[17%] left-[46%] text-[8px]`} />
      <FaStar className={`absolute inline top-[53%] left-[23%] text-[9px]`} />
      <FaStar className={`absolute inline top-[93%] left-[28%] text-[2px]`} />
      <FaStar className={`absolute inline top-[83%] left-[46%] text-[7px]`} />
      <FaStar className={`absolute inline top-[46%] left-[83%] text-[9px]`} />
      <FaStar className={`absolute inline top-[50%] left-[34%] text-[2px]`} />
      <FaStar className={`absolute inline top-[60%] left-[57%] text-[3px]`} /> */}
    </div>
  );
};

export default Stars;

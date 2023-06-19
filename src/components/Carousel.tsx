"use client";

import { FC, useRef, useState } from "react";
import { gsap } from "gsap";
import { designs } from "@/constants/designs";
import Inactive from "./Actives/Inactive";
import Active from "./Actives/Active";

const Carousel = ({}) => {
  //   const drag = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>("cres");

  return (
    <div className="flex overflow-hidden flex-col mt-16">
      {designs.map((item) => (
        <button
          onClick={() => setActive(item.active)}
          key={item.id}
          className={`
          ${
            active === item.active
              ? "h-[450px] py-11 flex flex-col justify-between items-center"
              : "h-32"
          }
           transition-all border-t-2 border-white border-opacity-20 `}
        >
          <Inactive id={item.id} title={item.title} />
          {active === item.active ? (
            <Active id={item.id} title={item.title} img={item.img} />
          ) : null}
        </button>
      ))}
    </div>
  );
};

export default Carousel;

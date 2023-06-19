import Link from "next/link";
import Marquee from "react-fast-marquee";
import Paragraph from "./ui/Paragraph";
import Carousel from "./Carousel";
import Darken from "./ui/Darken";

const Design = ({}) => {
  return (
    <div
      className="px-14 py-32 flex flex-col w-screen "
      style={{ fontFamily: "Afrah" }}
    >
      <div className="">
        <Marquee>
          <Paragraph size="lg" className="uppercase">
            DESIGN PROJECTS | <Darken>modern</Darken> {" "}
            professionalism <Darken>with a</Darken> {" "}
            creative <Darken>flair</Darken>
          </Paragraph>
        </Marquee>
      </div>
      <Carousel />
    </div>
  );
};

export default Design;

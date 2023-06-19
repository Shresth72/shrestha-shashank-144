import { FC } from "react";
import Paragraph from "../ui/Paragraph";
import { Link } from "lucide-react";
import LargeHeading from "../ui/LargeHeading";
import { TiArrowRightThick } from "react-icons/ti";
import Image, { StaticImageData } from "next/image";

interface activeProps {
  title: string;
  id: number;
  img: StaticImageData;
}

const Active: FC<activeProps> = ({ title, id, img }) => {
  return (
   
      <div className="flex gap-80">
        <Image src={img} alt="" className="w-56 h-56" />
        <Image src={img} alt="" className="w-56 h-56" />
      </div>
  );
};

export default Active;

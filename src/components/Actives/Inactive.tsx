import { FC } from "react";
import Paragraph from "../ui/Paragraph";
import { Link } from "lucide-react";
import LargeHeading from "../ui/LargeHeading";
import { TiArrowRightThick } from "react-icons/ti";

interface inactiveProps {
  title: string;
  id: number;
}

const Inactive: FC<inactiveProps> = ({ title, id }) => {
  return (
    <div className="w-[100%] flex justify-between items-center">
      <Paragraph className="text-xl font-bold">{id}</Paragraph>
      <LargeHeading size="default">{title}</LargeHeading>
    </div>
  );
};

export default Inactive;

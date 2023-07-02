
import AnimatedCursor from "react-animated-cursor";

const Pointer = ({}) => {
  return (
    <AnimatedCursor
      innerSize={9}
      color="255,255,255"
      outerSize={8}
      trailingSpeed={2}
      innerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
  );
};

export default Pointer;

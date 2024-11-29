import {motion} from "motion/react";
import MTextField from "../molecules/MTextField";
import React, {ComponentProps} from "react";

type TProps = ComponentProps<typeof MTextField>;

const initial: ComponentProps<typeof motion.div>["initial"] = {
  opacity: 0,
  translateY: 10,
};
const animate: ComponentProps<typeof motion.div>["animate"] = {
  opacity: 1,
  translateY: 0,
};

export default React.forwardRef(function UrlField(
  {children, ...props}: TProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <motion.div initial={initial} animate={animate}>
      <MTextField {...props} ref={ref}>
        {children}
      </MTextField>
    </motion.div>
  );
});

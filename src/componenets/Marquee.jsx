import React from "react";
import { motion } from "framer-motion";

const marqueeImg = [
  "src/Images/Stripes/marque_1.1.png",
  "src/Images/Stripes/marque_1.2.png",
  "src/Images/Stripes/marque_1.3.png",
  "src/Images/Stripes/marque_1.4.png",
  "src/Images/Stripes/marque_1.5.png",
  "src/Images/Stripes/marque_1.6.png",
  "src/Images/Stripes/marque_1.7.png",
  "src/Images/Stripes/marque_1.8.png",
  "src/Images/Stripes/marque_1.9.png",
  "src/Images/Stripes/marque_1.1.png",
  "src/Images/Stripes/marque_1.2.png",
  "src/Images/Stripes/marque_1.3.png",
  "src/Images/Stripes/marque_1.4.png",
  "src/Images/Stripes/marque_1.5.png",
  "src/Images/Stripes/marque_1.6.png",
  "src/Images/Stripes/marque_1.7.png",
  "src/Images/Stripes/marque_1.8.png",
  "src/Images/Stripes/marque_1.9.png",
];
function Marquee({direction}) {
  return (
    <>
      <div className="w-full flex flex-shrink-0">
        <motion.div initial={{x:direction===0?"0%":"-100%"}} animate={{x:direction===0?"-100%":"0%"}} transition={{ease:"linear",duration:10,repeat:Infinity}}
        className="w-full flex gap-28 mt-12 flex-shrink-0">
          {marqueeImg.map((i, index) => (
            <img className="w-26 h-8 " src={i} alt="" />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Marquee;

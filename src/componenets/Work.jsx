import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
function Work() {


  const [images,setImages] = useState([
    {
      url: "src/Images/work_images/work_1.jpg",
      top: "45%",
      left: "60%",
      isActive: false,
    },
    {
      url: "src/Images/work_images/work_2.jpg",
      top: "40%",
      left: "68%",
      isActive: false,
    },
    {
      url: "src/Images/work_images/work_3.jpg",
      top: "43%",
      left: "56%",
      isActive: false,
    },
    {
      url: "src/Images/work_images/work_4.jpg",
      top: "50%",
      left: "65%",
      isActive: false,
    },
    {
      url: "src/Images/work_images/work_5.jpg",
      top: "40%",
      left: "52%",
      isActive: false,
    },
    {
      url: "src/Images/work_images/work_6.jpg",
      top: "50%",
      left: "67%",
      isActive: false,
    }
  ])

  const { scrollYProgress } = useScroll()
  

  scrollYProgress.on("change",(data)=>{
    function imagesShow(arr){
      setImages((prev)=>
      prev.map((item,index)=>
      arr.indexOf(index) === -1?{
        ...item,isActive:false
      }:{
        ...item,isActive:true
      }
      ))
    }
    switch(Math.floor(data*100)){
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0,1]);
        break;
      case 3:
        imagesShow([0,1,2]);
        break;
      case 7:
        imagesShow([0,1,2,3]);
        break;
      case 8:
        imagesShow([0,1,2,3,4]);
        break;
    }

  })



  return (
    <div className="w-full text-center mt-10">
      <div className=" text-center flex justify-center">
        <h1 className="text-[27vw] select-none font-medium leading-none">
          Work
        </h1>
      </div>
      <div className="absolute top-0 w-3/4 h-full ">
        {images.map(
          (i, index) =>
            i.isActive && (
              <img key={index}
                className="absolute w-72 h-60 rounded-xl translate-x-[-50%] translate-y-[-50%]"
                style={{ top: i.top, left: i.left }}
                src={i.url}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;

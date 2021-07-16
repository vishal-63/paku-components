import img1 from "../../Images/img-1.webp";
import img2 from "../../Images/img-2.webp";
import img3 from "../../Images/img-3.webp";
import img1Mobile from "../../Images/img-1-mobile.webp";
import img2Mobile from "../../Images/img-2-mobile.webp";
import img3Mobile from "../../Images/img-3-mobile.webp";

export const SliderData = [
  {
    image: img1,
    mobileImage: img1Mobile,
    srcset: `${img1Mobile} 480w,
             ${img1} 800w`,
    heading: "LOREM IPSUM",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsa",
  },
  {
    image: img2,
    mobileImage: img2Mobile,
    srcset: `${img2Mobile} 480w,
             ${img2} 800w`,
    heading: "LOREM IPSUM",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsa",
  },
  {
    image: img3,
    mobileImage: img3Mobile,
    srcset: `${img3Mobile} 480w,
             ${img3} 800w`,
    heading: "LOREM IPSUM",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsa",
  },
];

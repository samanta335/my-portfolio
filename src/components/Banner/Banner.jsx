import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/banner.jpg";
import resume from "../../assets/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFileDownload } from "react-icons/fa";
AOS.init();
const Banner = () => {
  return (
    <div id="home" className="grid lg:grid-cols-2 mt-10 mb-16  ">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className=" ml-0 lg:ml-32 my-auto mt-10 "
      >
        <p className="text-lg font-medium "> Hi, I'am </p>
        <p className="text-3xl lg:text-5xl font-bold uppercase">
          Samanta ISlam
        </p>
        <p className="text-purple-600">
          <TypeAnimation
            sequence={[
              "MERN Stack Web Developer",
              1000,
              " Front-end Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </p>
        <a
          className="btn  btn-outline btn-info my-5 "
          href={resume}
          download="samanta islam's| resume.pdf"
        >
          <FaFileDownload className="h-4  w-5 text-purple-600 animate-bounce"></FaFileDownload>
          Get My Resume
        </a>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <img className=" rounded-lg" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

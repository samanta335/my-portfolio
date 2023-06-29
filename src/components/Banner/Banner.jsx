import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/banner.jpg";
import resume from "../../assets/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFileDownload } from "react-icons/fa";
AOS.init();
const Banner = () => {
  return (
    <div id="home" className="grid grid-cols-1 lg:grid-cols-2 mb-16 my-auto">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mx-5 lg:ml-20 my-auto mt-10"
      >
        <p className="text-lg font-medium "> Hi, I'am </p>
        <p className="text-3xl lg:text-5xl font-bold uppercase">
          Samanta ISlam
        </p>
        <p className="text-pink-300">
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
        <p className="w-3/4 mt-4 text-sm font-medium">
          I'm a passionate junior frontend web developer with a strong
          enthusiasm for creating beautiful and user-friendly websites.And i'm
          constantly expanding my knowledge to stay up-to-date with the latest
          web development trends and technologies.
        </p>
        <a
          className="btn  btn-outline btn-info my-5 "
          href={resume}
          download="samanta islam's| resume.pdf"
        >
          <FaFileDownload className="h-5  w-5 text-white animate-bounce"></FaFileDownload>
          Get My Resume
        </a>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <img className=" w-full  rounded-lg" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

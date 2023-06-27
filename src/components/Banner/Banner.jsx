import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/banner.jpg";
import resume from "../../assets/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Banner = () => {
  return (
    <div id="home" className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="mx-auto my-auto">
        <p className="text-lg font-medium "> Hi, I'am </p>
        <p className="text-5xl font-bold uppercase">Samanta ISlam</p>
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
        <a
          className="btn btn-sm btn-outline btn-secondary"
          href={resume}
          download="samanta islam's| resume.pdf"
        >
          Get My Resume
        </a>
      </div>
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <img className=" w-full rounded-lg" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

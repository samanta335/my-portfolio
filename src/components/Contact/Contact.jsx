import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => toast.success(" Successfully Send");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5oib1so",
        "template_1rg8qda",
        form.current,
        "xvC4WUokit8berPL2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-5xl mt-32 text-center text-info font-medium"
      >
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row justify-center ml-1 my-12">
        <div
          className="lg:mx-20 my-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="border  border-info rounded-full p-3 h-11 w-11"></FaPhoneAlt>
            +8801642990394
          </p>
          <p className="flex items-center gap-3 mt-3">
            <FaMailBulk className="border  border-info rounded-full p-3 h-11 w-11 "></FaMailBulk>
            <a
              className="underline hover:text-pink-500"
              href="mailto:samantaislam355@gmail.com"
            >
              samantaislam355@gmail.com
            </a>
          </p>
          <p className="flex gap-3 mt-5 mb-5 justify-center">
            <a
              href="https://www.linkedin.com/in/samanta-islam-0ba236280/"
              data-tip="LinedIn"
            >
              <FaLinkedin className="border bg-pink-300 text-black rounded-lg p-2 h-9 w-9"></FaLinkedin>
            </a>
            <a href="https://github.com/samanta335" data-tip="Github">
              <FaGithub className="border bg-pink-300 text-black rounded-lg p-2 h-9 w-9"></FaGithub>
            </a>
            <a
              href="https://www.facebook.com/Samanta.Islam.27"
              data-tip="Facebook"
            >
              <FaFacebook className="border  bg-pink-300 text-black rounded-lg p-2 h-9 w-9"></FaFacebook>
            </a>
            <a href="https://www.instagram.com/samanta._/" data-tip="Instagram">
              <FaInstagram className="border bg-pink-300 text-black rounded-lg p-2 h-9 w-9"></FaInstagram>
            </a>
          </p>
        </div>

        <form
          data-aos="fade-left"
          data-aos-duration="1000"
          className="space-y-5 w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="input input-bordered border-white focus:outline-none w-full"
            type="text"
            name="from_name"
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            className="input input-bordered border-white focus:outline-none  w-full"
            name="from_email"
            placeholder="Email"
          />
          <br />
          <input
            className="input input-bordered border-white focus:outline-none w-full"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <br />
          <textarea
            className="input input-bordered min-h-[100px] border-white focus:outline-none w-full bg-inherit "
            name="message"
            placeholder="Message"
          />
          <br />
          <input
            className="btn btn-outline btn-info w-1/4"
            onClick={notify}
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

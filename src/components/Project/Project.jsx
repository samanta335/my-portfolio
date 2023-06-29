import cover from "../../assets/sports/1.png";
import sp1 from "../../assets/sports/2.png";
import sp2 from "../../assets/sports/3.png";
import sp3 from "../../assets/sports/4.png";
import sp4 from "../../assets/sports/5.png";
import cover2 from "../../assets/toys/1.png";
import ts1 from "../../assets/toys/2.png";
import ts2 from "../../assets/toys/3.png";
import ts3 from "../../assets/toys/4.png";
import ts4 from "../../assets/toys/5.png";
import cover3 from "../../assets/recipe/1.png";
import rs1 from "../../assets/recipe/2.png";
import rs2 from "../../assets/recipe/3.png";
import rs3 from "../../assets/recipe/4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Project = () => {
  return (
    <div id="project" className="lg:mt-24">
      <h2
        data-aos="zoom-out"
        data-aos-duration="1000"
        className="text-5xl text-center text-info font-medium"
      >
        My Projects
      </h2>
      <div className="grid lg:grid-cols-3 my-20 gap-5 max-w-screen-lg mx-auto">
        <div className="card bg-neutral mx-auto card-compact h-full bg-base-100 shadow-xl">
          <figure>
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={cover}
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title uppercase">Sports School</h2>
            <p>
              Sports School is a full-stack web with an Admin, Instructor and
              Student dashboard.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-sm btn-info btn-outline  "
                onClick={() => window.my_modal_5.showModal()}
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box  ">
            <div className="modal-action">
              <button className="btn btn-circle btn-ghost hover:bg-error absolute right-2 top-2 ">
                X
              </button>
            </div>
            <div className="">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <img src={sp1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="" src={sp2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sp3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sp4} alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-center gap-3 my-3 underline text-pink-300">
                <a href="https://summer-camp-4a50c.web.app/">Live Site</a>||
                <a href="https://github.com/samanta335/sports-school-client">
                  Client Code
                </a>
                |
                <a href="https://github.com/samanta335/sports-school-server">
                  Server Code
                </a>
              </div>
              <h1 className="text-xl text-info font-semibold">
                Features Summery:
              </h1>
              <p className="mb-3">
                • Admin user can approve or deny posted classes, also can manage
                user roles.
              </p>
              <p className="mb-3">
                • Instructor can post class with classes information and can see
                all the classes list they posted.
              </p>
              <p className="mb-3">
                • Student can see all available class and can select class by
                their choice. After selected they can payment for classes
              </p>

              <span className="text-xl text-info font-semibold">
                Technologies:
              </span>
              <p>
                React, React Router, Firebase, Tailwind, Axios, React Query,
                JWT, Stripe Payment.
              </p>
            </div>
          </form>
        </dialog>
        <div className="card card-compact bg-neutral mx-auto h-full bg-base-100 shadow-xl">
          <figure>
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={cover2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">Toy Marketplace</h2>
            <p>
              Toy Marketplace is a full-stack React Application with database
              and authentication.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-sm btn-info btn-outline "
                onClick={() => window.my_modal_4.showModal()}
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box  ">
            <div className="modal-action">
              <button className="btn btn-circle btn-ghost hover:bg-error absolute right-2 top-2 ">
                ✕
              </button>
            </div>
            <div className="">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <img className="w-full" src={ts1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="" src={ts2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ts3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ts4} alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-center gap-3 my-3 underline text-pink-300">
                <a href=" https://toy-zone-3d112.web.app">Live Site</a>||
                <a href="https://github.com/samanta335/toy-marketplace-client">
                  Client Code
                </a>
                |
                <a href="https://github.com/samanta335/toy-marketplace-server">
                  Server Code
                </a>
              </div>
              <h1 className="text-xl text-info font-semibold">
                Features Summery:
              </h1>
              <p className="mb-3">
                • User can create an account with their email and password.
              </p>
              <p className="mb-3">• Here is a gallery section of teddy toy.</p>
              <p className="mb-3">
                • In add a toy page user can add new toy with toys information.
              </p>

              <span className="text-xl text-info font-semibold">
                Technologies:
              </span>
              <p>React, React Router, Tailwind, Firebase, MongoDB.</p>
            </div>
          </form>
        </dialog>
        <div className="card card-compact bg-neutral mx-auto h-full bg-base-100 shadow-xl">
          <figure>
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={cover3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">Chef Hunter</h2>
            <p>
              Chef Hunter is React application with Firebase Authentication.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-sm btn-info btn-outline  "
                onClick={() => window.my_modal_6.showModal()}
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box  ">
            <div className="modal-action">
              <button className="btn btn-circle btn-ghost hover:bg-error absolute right-2 top-2 ">
                ✕
              </button>
            </div>
            <div className="">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <img className="w-full" src={rs1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="" src={rs2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={rs3} alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-center gap-3 my-3 underline text-pink-300">
                <a href="https://chef-recipe-d2746.web.app">Live Site</a>||
                <a href="https://github.com/samanta335/chef-recipe-hunter-client">
                  Client Code
                </a>
                |
                <a href="https://github.com/samanta335/chef-recipe-hunter-server">
                  Server Code
                </a>
              </div>
              <h1 className="text-xl text-info font-semibold">
                Features Summery:
              </h1>
              <p className="mb-3">
                • Project has meaningful header and footer. In header have two
                routes.
              </p>
              <p className="mb-3">
                • No one can view details after clicking view recipes without
                login.
              </p>
              <p className="mb-3">
                • There is a blog page with some question and ans.
              </p>

              <span className="text-xl text-info font-semibold">
                Technologies:
              </span>
              <p>React, React Router, Tailwind, Firebase.</p>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Project;

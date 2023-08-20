import html from "../../assets/html.webp";
import css from "../../assets/css.avif";
import firebase from "../../assets/firebase.png";
import js from "../../assets/javascript_logo.png";
import mongodb from "../../assets/mongodb.png";
import tailwind from "../../assets/tailwind.webp";
import node from "../../assets/node-js-tutorial.png";
import express from "../../assets/express-js.png";
import react from "../../assets/react.webp";
import bootstrap from "../../assets/bootstrap.png";

const Skills = () => {
  return (
    <div id="skills">
      <h2
        className="text-5xl lg:mt-32  text-center text-purple-700 font-medium"
        data-aos="fade-up"
      >
        Skills
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-12 grid grid-cols-2 lg:grid-cols-4 gap-2 place-items-center "
      >
        <p className=" flex items-center items-center ">
          <img className="w-10 mr-2  " src={html} alt="" />
          Html
        </p>
        <p className="mb-5 flex items-center">
          <img className="w-10 mr-2" src={js} alt="" />
          JavaScript
        </p>
        <p className="mb-5 flex items-center ">
          <img className="w-10 mr-2 rounded-full" src={firebase} alt="" />
          Firebase
        </p>
        <p className="mb-5 flex items-center">
          <img className="w-10 mr-2 rounded-full" src={tailwind} alt="" />
          Tailwind
        </p>
        <p className="mb-5 flex items-center">
          <img className="w-10 mr-2" src={css} alt="" />
          CSS
        </p>
        <p className="mb-5 flex items-center">
          <img className="w-10 mr-2 rounded-full" src={bootstrap} alt="" />
          Bootstrap
        </p>
        <p className="mb-5 flex items-center">
          <img className="w-10 mr-2" src={mongodb} alt="" />
          MongoDb
        </p>
        <p className="mb-5 flex items-center">
          <img className="w-10 mr-2" src={node} alt="" />
          Node.js
        </p>
        <p className="mb-5 flex items-center ">
          <img className="w-10 mr-2 rounded-full" src={react} alt="" />
          React
        </p>
        <p className="mb-5 flex items-center ">
          <img className="w-10 mr-2" src={express} alt="" />
          Express.js
        </p>
      </div>
    </div>
  );
};

export default Skills;

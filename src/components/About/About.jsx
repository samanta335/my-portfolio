const About = () => {
  return (
    <div id="about" className="lg:mt-28 mb-10">
      <h1
        className="text-5xl text-center text-info font-medium"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        About Me
      </h1>
      <div className="my-12  justify-center flex text-lg">
        <div
          className="mr-10 ml-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="mb-8">Name : Samanta Islam</p>
          <p className="mb-8">Address : Narayanganj, Bangladesh</p>
          <p>Education : BBA Hon's in Management(First Year)</p>
        </div>
        <div data-aos="fade-left">
          <p className="mb-8">University: National University Bangladesh</p>
          <p className="mb-8">Language : Bangla, English</p>
          <p>Nationality: Bangladeshi</p>
        </div>
      </div>
    </div>
  );
};

export default About;

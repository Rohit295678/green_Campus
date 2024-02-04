import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles/Carousal.css";
import Auth from "../utils/auth";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    // <>
    //   <div
    //     id="carouselExampleControls"
    //     className="carousel slide"
    //     data-ride="carousel"
    //   >
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img className="d-block w-100" src={slides[0]} alt="First slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src={slides[1]} alt="Second slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src={slides[2]} alt="Third slide" />
    //       </div>
    //     </div>
    //     <a
    //       className="carousel-control-prev"
    //       href="#carouselExampleControls"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a
    //       className="carousel-control-next"
    //       href="#carouselExampleControls"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    // </>
    <div className="overflow-hidden relative h-[100vh]">
      <div
        className={`flex transition ease-out duration-40 h-100 `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} style={{ height: "100%", width: "100%" }} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-4 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full  w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 xl:w-5 xl:h-5  cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
      <div className="absolute bottom-14 lg:bottom-[20%] z-10 text-white flex-column justify-center w-[100%]">
        <section className="home-header ">
          <div className="home-title text-center">
            <h1>
              Carbon <span>Footsteps</span>
            </h1>
          </div>
        </section>
        <div className="home-tagline flex justify-center items-center">
          <h2 className="text-center">
            Find your carbon <span>footprint</span>.
          </h2>
          {Auth.loggedIn() ? (
            <Link to="/calculator" className="getStartedBtn">
            Get Started
          </Link>
          ) : (
            <Link to="/login" className="getStartedBtn">
            Get Started
          </Link>
          )}
          
        </div>
      </div>
    </div>
  );
}

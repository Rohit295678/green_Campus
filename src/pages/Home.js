import React from "react";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousal";
// import MeanCountry from './assets/js/meanCountry';
// import MeanIndividual from './assets/js/meanIndividual';
// import MeanCountryAnnual from './assets/js/meanCountryAnnual';
// import MeanHousehold from './assets/js/meanHousehold';
import Auth from "../utils/auth";
//import ControlledCarousel from './Slider';
let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];
const Home = () => {
  return (
    <>
      <main className="home-main">
        <div className="w-[60%] m-auto pt-0">
          <Carousel slides={slides} />
        </div>
        <div>
          {/* <Carousal/> */}
          <section className="home-header">
            <div className="home-title">
              <h1>
                Carbon <span>Footsteps</span>
              </h1>
            </div>
          </section>
          <div className="home-tagline">
            <h2>
              Find your carbon <span>footprint</span>.
            </h2>
          </div>
          {Auth.loggedIn() ? (
            <section className="login-btn">
              <Link to="/calculator">
                <button type="submit">Calculate Your Footprint!</button>
              </Link>
            </section>
          ) : (
            <section className="login-btn">
              <Link to="/login">
                <button type="submit">Calculate Your Footprint!</button>
              </Link>
            </section>
          )}
          <div className="intro-text">
            <div className="home-p">
              <div className="home-h3">What is a carbon footprint?</div>
              <p>
                Your carbon footprint is a measurement of your contribution to
                carbon emissions and climate change. Our everyday activities
                produce carbon dioxide and methane through direct causes, like
                driving a gas-powered car, or indirect causes, like using
                electricity in your home. Everyone’s carbon emissions add up and
                cause global climate change.
              </p>
              <br />
              <div className="home-h3">What can you do about it?</div>
              <p>
                Small changes add up to a huge global impact. Change starts with
                knowing your own carbon footprint and then changing what you can
                to reduce it.
              </p>
              <p className="home-p2">
                <strong>Calculate</strong> your footprint.{" "}
                {/* <strong>Make a pledge</strong> to change. <strong>Do it</strong>.
              Mark your pledge <strong>complete</strong>. */}
              </p>
              {/* <div className="home-footer">
              If you want to say thank you for this free service, donate to the
              organizations who are driving real systemic progress in the fight
              against climate change.
            </div> */}
            </div>
          </div>
        </div>
        {/* <div className="subtitle">
        <h2>Does your carbon footprint beat global averages?</h2>
      </div> */}
        <section className="chart-data">
          {/* <div className="chart">
          <h2>Annual Carbon Emissions - Metric Tons</h2>
          <br />
          <h4>
            Global annual carbon emissions from 2020: 34,807,259,099 metric tons
          </h4>
          <br />
          <a
            href="https://ourworldindata.org/co2/"
            rel="noreferrer"
            target="_blank"
          >
            <MeanCountryAnnual />
          </a>
        </div> */}

          {/* <div className="chart">
          <h2>Annual Per Capita Carbon Emissions - Metric Tons</h2>
          <br />
          <h4>
          Annual carbon dioxide (CO₂) emissions worldwide from 1940 to 2022
          </h4>
          <br />
          <a
            href="https://www.statista.com/statistics/276629/global-co2-emissions/"
            rel="noreferrer"
            target="_blank"
          >
            <MeanCountry />
          </a>
        </div> */}

          {/* <div className="chart">
          <h2>
            Per-Household Annual Carbon Emissions in the United States - Metric
            Tons
          </h2>
          <br />
          <a
            href="https://www.indiaspend.com/earthcheck/indias-biggest-spenders-cause-7-times-more-emissions-than-the-poor-715878"
            rel="noreferrer"
            target="_blank"
          >
            <MeanHousehold />
          </a>
        </div> */}
          {/* <div className="chart">
          <h2>Breakdown of the Average American's Carbon Footprint</h2>
          <br />
          <a
            href="https://suncommon.com/understanding-your-carbon-footprint/"
            rel="noreferrer"
            target="_blank"
          >
            <MeanIndividual />
          </a>
        </div> */}
        </section>
        <br />
      </main>
    </>
  );
};

export default Home;

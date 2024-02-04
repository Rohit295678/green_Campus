import React from 'react';
import { Link } from 'react-router-dom';
 import Pledges from '../components/Pledges';
import { Graph } from '../components/Graph';
import { addCommas } from '../utils/helpers.js';
import '../assets/css/footprint.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import ApexChart1 from '../components/usage/comp.js';
import ApexChart2 from '../components/usage/comp2.js';
import ApexChart3 from '../components/usage/comp3.js';

const MyFootprint = () => {
  const { data, loading } = useQuery(QUERY_ME);

  const { username, homeData, travelData,wasteData } = data?.me || [];

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="footprint">
      {Auth.loggedIn() ? (
        <div>
          <section className="my-footprint">
            <div>
              {homeData?.length || travelData?.length || wasteData?.length ? (
                <div className="footprint-data">
                  <div className=" hoverbox">
                    <h3>{username}'s Carbon Footprint</h3>
                    <p>
                      Water emissions: {addCommas(homeData[0].waterEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      Electricity emissions:{' '}
                      {addCommas(homeData[0].electricityEmissions)} kg CO2
                    </p>
                    <p>
                      Natural GAS emissions: {addCommas(homeData[0].naturalGasEmissions)} kg
                      CO2
                    </p>
                    <p>
                      Fuel Oil emissions: {addCommas(homeData[0].fuelOilEmissions)} kg
                      CO2
                    </p>
                    <p>
                      Four Wheeler emissions:{' '}
                      {addCommas(travelData[0].fourVheelersEmissions)} kg CO2
                    </p>
                    <p>
                      Public Transit emissions:{' '}
                      {addCommas(travelData[0].publicTransitEmissions)} kg CO2
                    </p>
                    <p>
                      Two Wheelers emissions: {addCommas(travelData[0].twoVheelersEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      College Bus emissions: {addCommas(travelData[0].collegeBusEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      Mess Food Waste: {addCommas(wasteData[0].messFoodEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      Plastic Waste: {addCommas(wasteData[0].plasticWasteEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      Paper Waste: {addCommas(wasteData[0].paperWasteEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      Metal Waste: {addCommas(wasteData[0].metalWasteEmissions)}{' '}
                      kg CO2
                    </p>
                    <p className="total">
                      Your total Carbon Footprint:{' '}
                      {addCommas(
                        homeData[0].naturalGasEmissions +homeData[0].fuelOilEmissions +
                          homeData[0].electricityEmissions +
                          homeData[0].waterEmissions +
                          travelData[0].fourVheelersEmissions +travelData[0].twoVheelersEmissions +
                          travelData[0].publicTransitEmissions +travelData[0].collegeBusEmissions +
                          wasteData[0].messFoodEmissions+wasteData[0].plasticWasteEmissions+wasteData[0].paperWasteEmissions+wasteData[0].metalWasteEmissions
                      )}{' '}
                      kg CO2
                    </p>
                    <a href="/dashboard">Go to DashBoard</a>
                  </div>

                  <div className="graph">
                    <Graph graphData={{ homeData, travelData }} />
                  </div>
                  {/* <div className="graph1">
                    <ApexChart graphData={travelData} />
                  </div> */}
                  <div className="graph1">
                    <ApexChart1 graphData={travelData} />
                  </div>
                  <div className="graph1">
                    <ApexChart2 graphData={homeData} />
                  </div>
                  <div className="graph1">
                    <ApexChart3 graphData={wasteData} />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="no-info-title">
                    You haven't calculated your carbon footprint yet!
                  </h2>
                  <div className="add-btn">
                    <Link to="/calculator">
                      <button>Go to Calculator</button>
                    </Link>
                  </div>
                  <Pledges />
                </div>
              )}
            </div>
          </section>
          <section>
            {homeData.length || travelData.length ? <Pledges /> : ''}
          </section>
        </div>
      ) : (
        <div className="not-logged-in">
          <h2 className="no-info-title">
            Log in to see your carbon footprint!
          </h2>
          <Link to="/login">
            <button type="submit">Log In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyFootprint;
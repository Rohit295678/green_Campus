import React, { useState } from "react"
import '../assets/css/footprint.css';
import { addCommas } from '../utils/helpers'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
//import ApexChart from "../components/ApexChart";

const Dashboard = ()=>{
    const { data, loading } = useQuery(QUERY_ME);
    const [isVisible, setIsVisible] = useState(false);
    
  const {homeData, travelData } = data?.me || [];

  if (loading) {
    return <h2>LOADING...</h2>;
  }
    return (
        <>
        <div className="footprint">
        {Auth.loggedIn() ? (<div>
          <section className="my-footprint" style={{gap: '100px'}}>
            <div>
              {homeData?.length || travelData?.length ? (
                <div className="footprint-data">    
               {homeData.map((home,i)=>(<div className="calculations left" key={home._id} style={{width: '30%'}}>
               <div className=" hoverbox">
                    <h1 className="footprint-title">
                       {home.updatedAt.toString().slice(0,10)}
                    </h1>
                    {isVisible && <span className="hiddenelm">Heavy</span>}
                    <p>
                      Water emissions: <span onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className={`${home.waterEmissions>5000 ? 'red':'green'}`}>{addCommas(home.waterEmissions)}{' '}</span>
                      kg CO2
                    </p>
                    <p>
                      Electricity emissions:{' '}
                      <span className={`${home.waterEmissions>5000 ? 'red':'green'}`}>{addCommas(home.electricityEmissions)}</span> kg CO2
                    </p>
                    <p>
                      Heat emissions: <span className={`${home.waterEmissions>5000 ? 'red':'green'}`}>{addCommas(home.heatEmissions)}</span> kg
                      CO2
                    </p>
                     <p>
                      Vehicle emissions:{' '}
                      {addCommas(travelData[i].vehicleEmissions)} kg CO2
                    </p>
                    <p>
                      Public Transit emissions:{' '}
                      {addCommas(travelData[i].publicTransitEmissions)} kg CO2
                    </p>
                    <p>
                      Plane emissions: {addCommas(travelData[i].planeEmissions)}{' '}
                      kg CO2
                    </p>
                    <p className="total">
                      Your total Carbon Footprint:{' '}
                      {addCommas(
                        home.heatEmissions +
                          home.electricityEmissions +
                          home.waterEmissions +
                          travelData[i].vehicleEmissions +
                          travelData[i].publicTransitEmissions +
                          travelData[i].planeEmissions
                      )}{' '}
                      kg CO2
                    </p>
                    
                  </div>
                  </div>
                  ))}
                  {/* <div className="graph1">
                <ApexChart />
              </div> */}
                  </div>
                  ):(<div>Ok</div>)}
              </div>
              </section>
              </div>):(<div>Please Log in</div>)}
              </div>
        </>
    )
}

export default Dashboard

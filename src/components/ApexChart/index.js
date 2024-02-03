// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ApexChart = ({ graphData }) => {
//   // Extracting vehicle, public transit, and plane emissions from the graph data
//   const vehicleEmissions = graphData.map((data) => data.vehicleEmissions);
//   const [count, setCount] = useState(0);
//   const publicTransitEmissions = graphData.map(
//     (data) => data.publicTransitEmissions
//   );
//   const planeEmissions = graphData.map((data) => data.planeEmissions);

//   // Function to check if a value is in the danger zone
//   const isDanger = (value, threshold) => {
//     return value > threshold;
//   };


//   const seriesData = [
//     {
//       name: 'Vehicle Emissions',
//       data: vehicleEmissions,
//     },
//     {
//       name: 'Public Transit Emissions',
//       data: publicTransitEmissions,
//     },
//     {
//       name: 'Plane Emissions',
//       data: planeEmissions,
//     },
//   ];

//   const [chartData, setChartData] = useState({
//     series: seriesData,
//     options: {
//       chart: {
//         height: 350,
//         type: 'line',
//         id: 'areachart-2',
//       },
//       annotations: {
//         yaxis: [
//           {
//             y: 8200,
//             borderColor: '#00E396',
//             label: {
//               borderColor: '#00E396',
//               style: {
//                 color: '#fff',
//                 background: '#00E396',
//               },
//             },
//           },
//           {
//             y: 10000,
//             y2: 1000000,
//             borderColor: '#000',
//             fillColor: '#FEB019',
//             opacity: 0.2,
//             label: {
//               borderColor: '#333',
//               style: {
//                 fontSize: '10px',
//                 color: '#333',
//                 background: '#FEB019',
//               },
//               text: 'Hazardous Range',
//             },
//           },
//           {
//             y: 0,
//             y2: 5000,
//             borderColor: '#000',
//             fillColor: 'green',
//             opacity: 0.2,
//             label: {
//               borderColor: '#333',
//               style: {
//                 fontSize: '15px',
//                 color: 'black',
//                 background: 'yellow',
//               },
//               text: 'Need Some work',
//             },
//           },
//           {
//             y: 10000,
//             y2: 5000,
//             borderColor: '#000',
//             fillColor: 'yellow',
//             opacity: 0.2,
//             label: {
//               borderColor: '#333',
//               style: {
//                 fontSize: '15px',
//                 color: 'white',
//                 background: 'red',
//               },
//               text: 'Above this Dangerous',
//             },
//           },
//         ],
//       },
//       points: [
//         {
//           x: new Date('01 Dec 2017').getTime(),
//           y: 8000.55,
//           marker: {
//             size: 8,
//             fillColor: '#fff',
//             strokeColor: 'red',
//             radius: 2,
//             cssClass: 'apexcharts-custom-class',
//           },
//           label: {
//             borderColor: '#FF4560',
//             offsetY: 0,
//             style: {
//               color: '#fff',
//               background: '#FF4560',
//             },

//             text: 'Point Annotation',
//           },
//         },
//         {
//           x: new Date('28 Feb 2017').getTime(),
//           y: 18245,
//           marker: {
//             size: 0,
//           },
//         },
//       ],
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: 'straight',
//       },
//       grid: {
//         padding: {
//           right: 30,
//           left: 20,
//         },
//       },
//       title: {
//         text: 'Travel Data',
//         align: 'left',
//       },
//       labels: seriesData[0].data.map((_, index) => Object ${index + 1}),
//       xaxis: {
//         type: 'datetime',
//         labels: {
//           formatter: function (val) {
//             const date = new Date(val);
//             return `Data ${date.getDate()} ${date.toLocaleString('default', {
//               month: 'short',
//             })} ${date.getFullYear()}`;
//           },
//         },
//       },
//       tooltip: {
//         // Customize tooltip if needed
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="line"
//           height={350}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default ApexChart;
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import Navbar from '../Navbar';

Chart.register(...registerables);

const Progress = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5054/api/Calculation/progress', {
          method: 'POST',  
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        console.log(responseData); // Check the API response
        setData(responseData); // Update the data state
      } catch (error) {
        console.error(error); // Log any errors that occur
      }
    }

    fetchData();
  }, [token]);

  const chartData = {
    labels: data.map(progress => progress.date),
    datasets: [
      {
        label: "Weight",
        data: data.map(progress => progress.weight),
        borderColor: "rgba(75,192,192,1)",
        fill: false
      },
      {
        label: "Body Fat",
        data: data.map(progress => progress.bodyfat),
        borderColor: "rgba(255,99,132,1)",
        fill: false
      },
      {
        label: "BMI",
        data: data.map(progress => progress.bmi),
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false
      }
    ],
    options: {
      scales: {
        y: {
          ticks: {
            stepSize: 5
          }
        }
      },
      type: "line" // Change the chart type to line
    }
  };

  console.log(chartData); // Check the chart data

  return (
    <>
  <Navbar/>
  <Line data={chartData} options={chartData.options}/>
  </>);
};

export default Progress;





//Tala ko code chai incase barchart use garna manlagyo vane -SSB
// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const Progress = () => {
//   const [data, setData] = useState([]);
//   const token = localStorage.getItem('token'); 

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:5054/api/Calculation/progress', {
//           method: 'POST',  
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         const responseData = await response.json();
//         console.log(responseData); // Check the API response
//         setData(responseData); // Update the data state
//       } catch (error) {
//         console.error(error); // Log any errors that occur
//       }
//     }

//     fetchData();
//   }, [token]);

//   const chartData = {
//     labels: data.map(progress => progress.date),
//     datasets: [
//       {
//         label: "Weight",
//         data: data.map(progress => progress.weight),
//         backgroundColor: "rgba(75,192,192,1)",
//         barThickness: 20, // Reduce the bar thickness
//         maxBarThickness: 25 // Set the maximum thickness of any bar
//       },
//       {
//         label: "Body Fat",
//         data: data.map(progress => progress.bodyfat),
//         backgroundColor: "rgba(255,99,132,1)",
//         barThickness: 20, // Reduce the bar thickness
//         maxBarThickness: 25 // Set the maximum thickness of any bar
//       },
//       {
//         label: "BMI",
//         data: data.map(progress => progress.bmi),
//         backgroundColor: "rgba(54, 162, 235, 1)",
//         barThickness: 20, // Reduce the bar thickness
//         maxBarThickness: 25 // Set the maximum thickness of any bar
//       }
//     ],
//     options: {
//       scales: {
//         y: {
//           ticks: {
//             stepSize: 10
//           }
//         }
//       },
//       type: "bar" // Add the bar chart type
//     }
//   };

//   console.log(chartData); // Check the chart data

//   return <Bar data={chartData} options={chartData.options}/>;
// };

// export default Progress;

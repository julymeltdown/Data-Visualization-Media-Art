import React from 'react';
import cities from "./cities";
import { Pie } from 'react-chartjs-2';



const Chart =()=>{
    let arrayValue=[];
    let arrayCity=[];
    let Color = ["#FF1D44", "#e6f2ff", "#60BBF0", "#4CD976", "#F7FA4B", "##FF784A", "#0114F0", "#0BD9C2","#52FA19","#FFEDB8","#DEB5B2","#C8BBF0","#9ED9D1","#E6FAAA","#000000","#E0B384","#8000F0",];
    for(let i =0; i<cities.length;i++){
        arrayValue.push(cities[i].value);
        arrayCity.push(cities[i].text);
    }

    const data = {
        labels: arrayCity,
        datasets: [
            {
                backgroundColor: Color,
                borderColor: Color,
                borderWidth: 1,
                hoverBackgroundColor: Color,
                hoverBorderColor: Color,
                data: arrayValue
            }
        ]
    };

    console.log(arrayValue);
    return(
        <div >
            <Pie
                data={data}
            />
        </div>
    );
};

export default Chart;

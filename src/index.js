import "d3-transition";
import { select } from "d3-selection";
import React from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import './index.css';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import cities from "./cities";
import Nav from "./Nav";
import Chart from "./Chart";




function getCallback(callback) {
    return function (city, event) {
        const isActive = callback !== "onWordMouseOut";
        const element = event.target;
        const text = select(element);
        text
            .on("click", () => {
                if (isActive) {
                    window.open(`https://map.naver.com/v5/search/${city.text}`, "_blank");
                }
            })
            .transition()
            .attr("background", "white")
            .attr("font-size", isActive ? "300%" : "100%")
            .attr("text-decoration", isActive ? "underline" : "none");
    };
}

const callbacks = {
    getWordTooltip: (city) =>
        `현재 "${city.text}"의 인구는 ${city.value} 명입니다`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
};

function App() {

    let arrayValue=[];
    let arrayCity=[];
    for(let i =0; i<cities.length;i++){
        arrayValue.push(cities[i].value);
        arrayCity.push(cities[i].text);
    }

    return (
        <div>
            <Nav/>
            <div style={{textAlign:'center'}}>
                <div style={{ marginTop:'15vh' }}>
                    <h1>도시 인구 워드 클라우드</h1>
                    <ReactWordcloud callbacks={callbacks} words={cities} />
                </div>

                <div style={{marginTop:'10vh'}}>
                    <h1>도시 인구 파이차트</h1>
                    <Chart/>
                </div>

                <div>
                    <h1>도시 리스트 출력</h1>

                    <table border="0">
                        <td>
                        {arrayCity.map(value => <tr style={{border: '0'}}>{value}</tr>)}
                        </td>
                        <td>
                        {arrayValue.map(value => <tr style={{border: '0'}}>{value+'명'}</tr>)}
                        </td>
                    </table>
                </div>
            </div>

        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

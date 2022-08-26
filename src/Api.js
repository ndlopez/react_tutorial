import React, {Component} from "react";

//const styles={color:'#4e4054',};
const timeNow= new Date();
let currHour = timeNow.getHours();

class App extends Component {
    state = {
        data:[],
    }
    //code is invoked after the component is mounted into DOM tree
    componentDidMount(){
        const url = 'https://raw.githubusercontent.com/ndlopez/weather_app/main/webApp/data/all_weather.json'

        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                data: result,
            })
        })
    }
    render(){
        const {data} = this.state;

        const TabHead = () => {
            /*this is a React component*/
            return (
            <thead><tr><th>時刻</th><th>天気</th><th>気温<br/>&#8451;</th>
            <th>雨確率<br/>%</th><th>雨<br/>mm</th>
            <th>湿度<br/>%</th><th>風速<br/>m/s</th></tr></thead>
        )};
        
        const result = data.map((d,idx) => {
            if(idx >= currHour){
                return(
                <tr key={idx}>
                    <td>{d.hour}</td>                
                    <td>{d.weather}</td>
                    <td>{d.temp}</td>
                    <td>{d.rainProb}</td>
                    <td>{d.mmRain}</td>
                    <td>{d.humid}</td>
                    <td>{d.wind}</td>
                </tr>)
            }
        })
        return (
        <table><TabHead />
        <tbody>{result}</tbody></table>)
    }
}

export default App;
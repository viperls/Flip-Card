import React, {Component} from 'react';
import {convertDate, convertCodeToImg} from "../util/appUtil";

class FrontCard extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('flipCardWeather'));
    }

    render() {
        return (
            <div>
                <div className="flip-card-front">
                    <div className="top-content">
                        <div className="location">
                            <div style={{float: "left"}}><img src="../css/img/placeholder.svg" className="placeholder"/>
                            </div>
                            <div style={{float: "right"}} className="nameCity">{this.state.city_name}</div>
                        </div>
                        <p className="weahter-icon"><img src={convertCodeToImg(this.state.data[0].weather.code)}/></p>
                        <p className="temperature">{this.state.data[0].temp} <span>&deg;</span></p>
                        <div className="other-data">
                            <p>Feels Like: {this.state.data[0].temp} <span>&deg;</span></p>
                            <p>Humidity: {this.state.data[0].rh}%</p>
                        </div>
                        <p className="description">{this.state.data[0].weather.description}</p>
                    </div>
                    <hr className="divider"/>
                    <div className="stacked-group">
                        {this.state.data.map((elm, index) => {
                            if (index != 0 && index <= 7) {
                                return (
                                    <div className="rectangle" key={index}>
                                        <div className="wheater-day">
                                            <p className="day">{convertDate(elm.valid_date)}</p>
                                            <p className="weather"><img src={convertCodeToImg(elm.weather.code)}/></p>
                                            <p className="data">{elm.max_temp} <span>&deg;</span> - {elm.min_temp}
                                                <span>&deg;</span></p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>);
    }
}


export default FrontCard;
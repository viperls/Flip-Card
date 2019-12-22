import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_API_KEY_MAPS, MESSAGE_MARKER, ZOOM_LEVEL} from "../constant/AppConstant";

const Marker = ({text}) =>
    <div className="marker">
        <div>{MESSAGE_MARKER}</div>
        <div>{text}</div>
    </div>;

class RearCard extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('flipCardWeather'));
    }

    render() {
        return (
            <div>
                <div className="flip-card-back">
                    <div style={{height: '100%', width: '100%'}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: GOOGLE_API_KEY_MAPS}}
                            defaultCenter={{lat: this.state.lat, lng: this.state.lon}}
                            defaultZoom={ZOOM_LEVEL}>

                            <Marker text={this.state.city_name}
                                    lat={this.state.lat}
                                    lng={this.state.lon}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>);
    }
}


export default RearCard;
import React, {Component} from 'react';
import FrontCard from '../component/FrontCardComponent';
import RearCard from '../component/RearCardComponent';
import {getCurrentLocationData} from "../service/api";

class FlipCard extends Component {
    constructor(props) {
        super(props);
        getCurrentLocationData();
    }

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <FrontCard />
                    <RearCard />
                </div>
            </div>);
    }
}


export default FlipCard;
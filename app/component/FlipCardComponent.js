import React, {Component} from 'react';
import FrontCard from '../component/FrontCardComponent';
import RearCard from '../component/RearCardComponent';
import {getCurrentLocationData} from "../service/api";

class FlipCard extends Component {
    constructor(props) {
        super(props);
        getCurrentLocationData();
    }

    flipCard() {
        console.log("flip card");
    };

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <FrontCard />
                    <RearCard />
                </div>
                <button className="button" onClick={() => {
                    this.flipCard()
                }}> Flip Card
                </button>
            </div>);
    }
}


export default FlipCard;
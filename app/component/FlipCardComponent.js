import React, {Component} from 'react';
import FrontCard from '../component/FrontCardComponent';
import RearCard from '../component/RearCardComponent';
import {getCurrentLocationData} from "../service/api";
import {checkSiteData} from "../util/appUtil";

class FlipCard extends Component {
    constructor(props) {
        super(props);
        getCurrentLocationData();
    }

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    {
                        checkSiteData() ?
                            <div>
                                <FrontCard />
                                <RearCard />
                            </div>
                            : null
                    }

                </div>
            </div>);
    }
}


export default FlipCard;
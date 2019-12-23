import React, {Component} from 'react';
import FrontCard from '../component/FrontCardComponent';
import RearCard from '../component/RearCardComponent';
import {checkSiteData} from "../util/appUtil";
import {getCurrentLocationData} from "../service/api";

class FlipCard extends Component {
    constructor(props) {
        super(props);
        getCurrentLocationData();
    }

    componentDidMount() {
        this.loadContentData();
    }

    loadContentData() {
        if (!checkSiteData()) {
            setTimeout(() => {
                this.loadContentData();
            }, 1000);
        } else {
            this.setState(JSON.parse(localStorage.getItem('flipCardWeather')));
        }
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
import React from 'react';
import Nuvoloso from '../../css/img/nuvoloso.svg';
import Sole from '../../css/img/sole.svg';
import Neve from '../../css/img/neve.svg';
import Temporale from '../../css/img/tempolare.svg';

const ImgComponent = ({code}) => {
    switch (code) {
        case 230:
        case 231:
        case 232:
        case 233:
            return (<img src={Temporale} alt="Temporale"/>);
        case 600:
        case 601:
            return (<img src={Neve} alt="Neve"/>);
        case 800:
            return (<img src={Sole} alt="Sole"/>);
        case 801:
        case 802:
        case 803:
        case 804:
        case 900:
            return (<img src={Nuvoloso} alt="Nuvoloso"/>);
        default:
            return (<img src={Nuvoloso} alt="Nuvoloso"/>);
    }
};

export default ImgComponent;
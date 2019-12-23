import {MONTHS} from "../constant/AppConstant";

export const convertDate = (stringDate) => {
    let reformatDate;

    const date = new Date(stringDate);

    reformatDate = MONTHS[date.getMonth()] + " " + date.getDate();

    return reformatDate;
};

export const convertCodeToImg = (code) => {
    let img;

    switch (code) {
        case 230:
        case 231:
        case 232:
        case 233:
            img = "./css/img/temporale.svg";
            break;
        case 600:
        case 601:
            img = "./css/img/neve.svg";
            break;
        case 800:
            img = "./css/img/sole.svg";
            break;
        case 801:
        case 802:
        case 803:
        case 804:
        case 900:
            img = "./css/img/nuvoloso.svg";
            break;
        default:
            img = "./css/img/nuvoloso.svg";
    }
    return img;
};


export const checkSiteData = () => {
    const siteData = JSON.parse(localStorage.getItem('flipCardWeather'));

    if (siteData) {
        return true;
    } else {
        return false;
    }
}


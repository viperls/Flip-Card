import {MONTHS} from "../constant/AppConstant";

export const convertDate = (stringDate) => {
    let reformatDate;

    const date = new Date(stringDate);

    reformatDate = MONTHS[date.getMonth()] + " " + date.getDate();

    return reformatDate;
};

export const convertCodeToImg = (code) => {
    let className;

    switch (code) {
        case 230:
        case 231:
        case 232:
        case 233:
            className = "temporale";
            break;
        case 600:
        case 601:
            className = "neve";
            break;
        case 800:
            className = "sole";
            break;
        case 801:
        case 802:
        case 803:
        case 804:
        case 900:
            className = "nuvoloso";
            break;
        default:
            className = "nuvoloso";
    }
    return className;
};


export const checkSiteData = () => {
    const siteData = JSON.parse(localStorage.getItem('flipCardWeather'));

    if (siteData) {
        return true;
    } else {
        return false;
    }
}


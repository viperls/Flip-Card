import axios from 'axios';
import {
    BASE_URL, QUESTION_MARK, EQUAL_STRING, API_KEY, LANG_STRING, LANG, QUERY_SEPARETOR, KEY_STRING, STRING_LON,
    STRING_LAT
} from "../constant/AppConstant";

const getWeatherData = (latitude, longitude) => {
    axios.get(BASE_URL + QUESTION_MARK + KEY_STRING + EQUAL_STRING + API_KEY + QUERY_SEPARETOR + QUERY_SEPARETOR + STRING_LAT + EQUAL_STRING + latitude + QUERY_SEPARETOR + STRING_LON + EQUAL_STRING + longitude + QUERY_SEPARETOR + LANG_STRING + EQUAL_STRING + LANG)
        .then((response) => {
            localStorage.setItem('flipCardWeather', JSON.stringify(response.data));
        });
};


export const getCurrentLocationData = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        });
    }
};
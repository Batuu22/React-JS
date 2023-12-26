//axios
import  axios  from "axios";

// Language
class otherLanguageServices {

    //Language Flag Button
    headerAccessLanguageServices(languageButtonTrigger) {
        axios.defaults.headers["accept-language"]=languageButtonTrigger;
    }

}

export default new otherLanguageServices();
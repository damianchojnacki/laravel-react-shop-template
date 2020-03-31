import {dictionary, languages} from '../assets/languages';

export default class LanguageService{

    static dictionary(){
        !localStorage.getItem('lang') && localStorage.setItem('lang', languages[0].short);

        return dictionary[localStorage.getItem('lang')];
    }

    static transformId(id){
        return id.split('-');
    }

    static translate(id){
        id = this.transformId(id);

        if(!Array.isArray(id)) id = [id];

        let output = this.dictionary();

        for(let i = 0; i < id.length; i++){
            output = output[id[i]];
        }

        return output ?? "";
    }
}

import {dictionary, languages} from '../../assets/lang';
import Cookies from 'js-cookie';

export default class LanguageService{
    static set(lang){
        Cookies.set('lang', lang);
    }

    static available(){
        return languages;
    }

    static current(){
        return Cookies.get('lang') ?? languages[0].short;
    }

    static dictionary(){
        return dictionary[this.current()];
    }

    static transformId(id){
        return id.split('-');
    }

    static translate(id){
        id = this.transformId(id);

        if(!Array.isArray(id)) id = [id];

        let output = this.dictionary();

        for(let i = 0; i < id.length; i++){
            try{
                output = output[id[i]];
            }catch(e){
                //console.log(e);
            }
        }

        return output ?? "";
    }
}

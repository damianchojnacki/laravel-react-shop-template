import {dictionary, languages} from '../assets/languages';
import cookie from 'react-cookies';

export default class LanguageService{

    static set(lang){
        //return Inertia.put(`/language/${lang}`, {}, {
        //    preserveScroll: true,
        //});
    }

    static available(){
        return languages;
    }

    static current(){
        return cookie.load('lang') ?? languages[0].short;
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
            output = output[id[i]];
        }

        return output ?? "";
    }
}

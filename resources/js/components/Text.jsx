import React, {useEffect, useState} from 'react';
import LanguageService from '../utils/LanguageService';
import {useLanguage} from "../utils/LanguageContext";

function Text({id}) {
    const language = useLanguage();

    const [translated, setTranslated] = useState("");

    useEffect(() => {
        setTranslated(LanguageService.translate(id))
    }, [language.state]);

    return translated;
}

export default Text;

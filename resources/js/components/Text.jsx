import React, {useEffect, useState} from 'react';
import LanguageService from '../utils/LanguageService';
import {LanguageContext} from "../utils/LanguageContext";

function Text({id}) {
    const language = React.useContext(LanguageContext);

    const [translated, setTranslated] = useState("");

    useEffect(() => {
        setTranslated(LanguageService.translate(id))
    }, [language]);

    return translated;
}

export default Text;

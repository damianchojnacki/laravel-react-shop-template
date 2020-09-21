import React, { useEffect, useState } from "react";
import LanguageService from "../utils/services/LanguageService";
import { useLanguage } from "../utils/stores/store";

function Translate({ id }) {
    const language = useLanguage();

    const [translated, setTranslated] = useState("");

    useEffect(() => {
        setTranslated(LanguageService.translate(id));
    }, [language.state, id]);

    return translated;
}

export default Translate;

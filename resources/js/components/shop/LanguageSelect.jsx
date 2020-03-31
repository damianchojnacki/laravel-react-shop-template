import React, {useEffect, useState} from "react";
import Select from "react-select";
import LanguageService from "../../utils/LanguageService";

function LanguageSelect() {
    const [language, setLanguage] = useState(LanguageService.current());
    const [selectOptions, setSelectOptions] = useState([]);

    useEffect(() => {
        setSelectOptions(LanguageService.available().map(item => {
            return {
                value: item.short,
                label: item.long,
            }
        }));
    }, []);

    function change(lang) {
        LanguageService.set(lang);

        setLanguage(lang);
    }

    return (
        <Select
            options={selectOptions}
            isSearchable={false}
            value={selectOptions.find(option => {return language === option.value})}
            onChange={e => change(e.value)}
            menuPlacement="top"
        />
    );
}

export default LanguageSelect;

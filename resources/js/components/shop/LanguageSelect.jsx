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
                label: <img src={`/images/${item.short}.svg`} alt={item.long} width="28px"/>
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
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            isSearchable={false}
            value={selectOptions.find(option => {return language === option.value})}
            onChange={e => change(e.value)}
            styles={{
                container: provided => ({
                    ...provided,
                    marginLeft: "1rem"
                }),
                option: provided => ({
                    ...provided,
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                }),
                valueContainer: provided => ({
                    ...provided,
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                }),
                singleValue: provided => ({
                    margin: 0
                }),
                control: (provided, {isFocused}) => ({
                    ...provided,
                    background: "none",
                    border: "none",
                    boxShadow: "none",
                    cursor: "pointer"
                }),
            }}
        />
    );
}

export default LanguageSelect;

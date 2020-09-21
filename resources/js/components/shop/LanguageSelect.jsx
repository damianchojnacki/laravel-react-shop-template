import React, { useEffect, useState } from "react";
import Select from "react-select";
import LanguageService from "../../utils/services/LanguageService";
import { useLanguage } from "../../utils/stores/store";

function LanguageSelect() {
    const language = useLanguage();

    const [selectOptions, setSelectOptions] = useState([]);

    useEffect(() => {
        setSelectOptions(
            LanguageService.available().map((item) => {
                return {
                    value: item.short,
                    label: (
                        <>
                            {item.long}
                            <img
                                src={`/images/${item.short}.svg`}
                                alt={item.long}
                                width="28px"
                                className="ml-2"
                            />
                        </>
                    ),
                };
            })
        );
    }, []);

    return (
        <Select
            options={selectOptions}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
            }}
            isSearchable={false}
            value={selectOptions.find((option) => {
                return language.state === option.value;
            })}
            onChange={(e) =>
                language.dispatch({ type: "change", payload: e.value })
            }
            styles={{
                container: (provided) => ({
                    ...provided,
                    marginLeft: "1rem",
                }),
                option: (provided) => ({
                    ...provided,
                    width: "100px",
                    display: "flex",
                    justifyContent: "center",
                }),
                valueContainer: (provided) => ({
                    ...provided,
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    color: "transparent",
                    fontSize: 0,
                }),
                singleValue: (provided) => ({
                    margin: 0,
                }),
                control: (provided, { isFocused }) => ({
                    ...provided,
                    background: "none",
                    border: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                }),
                menu: (provided) => ({
                    ...provided,
                    width: "100px",
                    left: "-50%",
                    zIndex: 3,
                }),
            }}
        />
    );
}

export default LanguageSelect;

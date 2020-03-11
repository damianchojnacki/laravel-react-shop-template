import React, {useEffect, useState} from "react";
import {Badge} from "shards-react";
import {isMobile} from "../../utils/helpers";
import CurrencyService from "../../utils/CurrencyService";
import Select from "react-select";
import {usePage} from "@inertiajs/inertia-react";

function CurrencySelect() {
    const {currency, currencies} = usePage();

    const [selectOptions, setSelectOptions] = useState([]);

    useEffect(() => {
        setSelectOptions(currencies.map(item => {
            return {
                id: item.id,
                value: item.iso,
                label:
                    <div className="font-weight-normal text-secondary">
                        <span className="font-italic">{item.iso}</span>
                        <span className="ml-2 pl-2 border-left">{item.symbol}</span>
                    </div>
            }
        }));
    }, []);

    return (
        <Select
            options={selectOptions}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            isSearchable={false}
            styles={{
                container: provided => ({
                    ...provided,
                    width: isMobile() ? "100%" : 85,
                    margin: isMobile() ? ".75rem 0" : 0,
                    textAlign: "center",
                }),
                control: provided => ({
                    ...provided,
                    borderRadius: 5,
                    cursor: "pointer",
                }),
                valueContainer: provided => ({
                    ...provided,
                    display: "flex",
                    justifyContent: "center"
                }),
                option: (provided, {isSelected}) => ({
                    ...provided,
                    backgroundColor: isSelected && "silver",
                    cursor: "pointer",
                    zIndex: 3
                }),
                menu: provided => ({
                    ...provided,
                    zIndex: 3
                }),
            }}
            value={selectOptions.find(option => {return currency.iso === option.value})}
            onChange={e => CurrencyService.update(e.value)}
        />
    );
}

export default CurrencySelect;
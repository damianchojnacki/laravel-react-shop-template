import React, {useEffect, useState} from "react";
import CurrencyService from "../../utils/services/CurrencyService";
import Select from "react-select";
import {useMediaQuery} from "react-responsive";
import {useCurrency} from "../../utils/stores/CurrencyContext";
import {useCart} from "../../utils/stores/CartContext";

function CurrencySelect() {
    const currency = useCurrency();
    const cart = useCart();

    const [selectOptions, setSelectOptions] = useState([]);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        (async function(){
            const currencies = await CurrencyService.all();

            setSelectOptions(currencies.map(item => {
                return {
                    id: item.id,
                    value: item.iso,
                    symbol: item.symbol,
                    label:
                        <div className="font-weight-normal text-secondary">
                            <span>{item.iso}</span>
                            <span className="ml-2 pl-2 border-left font-weight-bold">{item.symbol}</span>
                        </div>
                }
            }));
        })();
    }, []);

    return (
        <Select
            options={selectOptions}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            isSearchable={false}
            isDisabled={cart.state.payment}
            styles={{
                container: provided => ({
                    ...provided,
                    width: isMobile ? "100%" : 85,
                    margin: isMobile ? ".75rem 0" : 0,
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
            value={selectOptions.find(option => {return currency.state.iso === option.value})}
            onChange={e => currency.dispatch({type: "change", payload: ({iso: e.value, symbol: e.symbol})})}
        />
    );
}

export default CurrencySelect;

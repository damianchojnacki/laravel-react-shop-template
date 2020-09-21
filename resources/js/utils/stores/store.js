import React from "react";
import { AuthContextProvider, auth } from "./AuthContext";
import { LanguageContextProvider, language } from "./LanguageContext";
import { CurrencyContextProvider, currency } from "./CurrencyContext";
import { CartContextProvider, cart } from "./CartContext";

export function StoreContextProvider({ children }) {
    return (
        <AuthContextProvider>
            <LanguageContextProvider>
                <CurrencyContextProvider>
                    <CartContextProvider>{children}</CartContextProvider>
                </CurrencyContextProvider>
            </LanguageContextProvider>
        </AuthContextProvider>
    );
}

export {
    auth as useAuth,
    language as useLanguage,
    currency as useCurrency,
    cart as useCart,
};

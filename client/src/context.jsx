import { createContext, useReducer } from "react";

const initialState = {
    lightTheme: {
        bg: "#fff",
        headerText: "hsl(204, 12%, 25%)",
        bodyText: "hsl(204, 12%, 50%)",
        coloredText: "#FFFFFF",
        primary: "hsl(39, 79%, 65%)",
        hoverPrimary: "hsl(39, 79%, 60%)",
        alphaPrimary: "hsla(39, 79%, 65%, 10%)",
        secondary: "hsl(243, 79%, 65%)",
        hoverSecondary: "hsl(243, 79%, 60%)",
        alphaSecondary: "hsla(243, 79%, 65%, 10%)",
    },
    darkTheme: {
        bg: "#333",
        headerText: "#FFFFFF",
        bodyText: "#CED4DA",
        coloredText: "#FFFFFF",
        primary: "hsl(39, 79%, 65%)",
        hoverPrimary: "hsl(39, 79%, 60%)",
        alphaPrimary: "hsla(39, 79%, 65%, 10%)",
        secondary: "hsl(243,79%,65%)",
        hoverSecondary: "hsl(243, 79%, 60%)",
        alphaSecondary: "hsla(243, 79%, 65%, 10%)",
    },
    darkMode: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            break;
    }
};

export const RootContext = createContext();

export const RootProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RootContext.Provider value={{ state, dispatch }}>
            {props.children}
        </RootContext.Provider>
    );
};

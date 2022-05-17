import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const light = {backColor: "white", actionColor: "#38BDF8", primaryColor: "black", secondaryColor: "black", shadowColor: "rgba(112, 112, 112, 0.8)"};
    const dark = {backColor: "#0F172A", actionColor: "#38BDF8", primaryColor: "#F6F9FF", secondaryColor: "#B7BDD8", shadowColor: "rgba(2, 12, 27, 0.7)"};

    const theme = isLightTheme ? light : dark;
    // const changeTheme = themeState => setIsLightTheme(themeState);

    return (
        <ThemeContext.Provider value={{ theme, isLightTheme, setIsLightTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}
 
export default ThemeContext;


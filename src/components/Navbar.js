import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {
    const [title, setTitle] = useState("");
    const { theme, isLightTheme, setIsLightTheme } = useContext(ThemeContext);

    const location = useLocation();

    const pageReload = (e) => {
        window.location.reload();
    };

    const changeThemeIcon = () => {
        const themeIconElm = document.querySelector(".theme-icon");
        const darkIconElm = document.querySelector(".dark-icon");
        const lightIconElm = document.querySelector(".light-icon");

        if (!isLightTheme) {
            setIsLightTheme(true);
            themeIconElm.classList.remove("-translate-x-1");
            darkIconElm.classList.add("hidden");
            lightIconElm.classList.remove("hidden");
            themeIconElm.classList.add("translate-x-2");
        } else {
            setIsLightTheme(false);
            themeIconElm.classList.remove("translate-x-2");
            lightIconElm.classList.add("hidden");
            darkIconElm.classList.remove("hidden");
            themeIconElm.classList.add("-translate-x-1");
        }
    };

    useEffect(() => {
        if (location.pathname === "/weather-report") {
            setTitle("Weather Report");
        } else if (location.pathname === "/currency-converter") {
            setTitle("Currency Converter");
        } else {
            setTitle("Error");
        }
    })

    return (
        <header className="z-10 max-w-full transition-all ease-in-out duration-300 sm:rounded-lg overflow-hidden mb-6" style={{ color: theme.primaryColor, boxShadow: `1px 3px 4px 2px ${theme.shadowColor}` }}>
            <nav className="flex justify-between items-center w-[100%] px-[6%] py-5 bg-opacity-[0.8]" style={{ backgroundColor: theme.backColor }}>
                {/* <h1 className="logo cursor-pointer z-20 text-4xl text-left font-quicksand font-bold" style={{ color: theme.actionColor }} onClick={pageReload}>J.</h1> */}
                <div className="dropdown cursor-pointer">
                    <div className="drop-btn flex justify-center items-center z-20 text-xl text-left font-quicksand font-bold" style={{ color: theme.actionColor }} onClick={pageReload}>
                        {title} <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2" height="20px" fill={theme.actionColor} viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" /></svg>
                    </div>
                    <div className="dropdown-content w-52 px-3 py-3 rounded hidden absolute" style={{ backgroundColor: theme.backColor, boxShadow: `0px 1px 4px 2px ${theme.shadowColor}` }}>
                        <div><Link to="/weather-report">Weather Report</Link></div>
                        <div><Link to="/currency-converter">Currency Converter</Link></div>
                    </div>
                </div>
                <div className="cursor-pointer h-[10px] w-6 rounded-xl relative" style={{ backgroundColor: theme.primaryColor }} onClick={changeThemeIcon}>
                    <div className="theme-icon absolute -translate-x-1 -top-[5px] transition-all duration-700 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="dark-icon" height="20px" fill={theme.actionColor} viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="light-icon hidden" height="20px" fill={theme.actionColor} viewBox="0 0 512 512"><path d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z" /></svg>
                    </div>
                </div>
                {/* <div className="menu-bars z-20 relative md:hidden" onClick={() => {
                    document.querySelector(".menu-bars").classList.toggle("is-open");
                    document.querySelector(".menu-mobile").classList.toggle("is-open");
                    document.querySelector("body").classList.toggle("overflow-hidden");
                }}>
                    <div className="bars w-[30px] h-[19px]">
                        <span className="block w-full h-[3px] mt-0 ml-auto rounded-sm" style={{ backgroundColor: theme.actionColor }}></span>
                        <span className="block w-full h-[3px] mt-[5px] ml-auto rounded-sm" style={{ backgroundColor: theme.actionColor }}></span>
                        <span className="block w-[17px] h-[3px] mt-[5px] ml-auto rounded-sm" style={{ backgroundColor: theme.actionColor }}></span>
                    </div>
                    <div className="other-bar h-[0px] w-[3px] rounded-sm absolute left-[45%] top-[-6px]" style={{ backgroundColor: theme.actionColor }}></div>
                </div> */}
            </nav>
            {/* <nav className="menu-mobile md:hidden fixed top-0 bottom-0 right-0 w-full h-screen backdrop-blur-[8px]" onClick={() => {
                document.querySelector(".menu-bars").classList.remove("is-open");
                document.querySelector(".menu-mobile").classList.remove("is-open");
                document.querySelector("body").classList.remove("overflow-hidden");
            }}>
                <div className="mobile-links w-[60%] h-screen absolute top-0 bottom-0 right-0 md:hidden text-sm overflow-hidden" style={{ backgroundColor: theme.backColor }}>
                    <ul className="links mt-[50%] sm:mt-[25%] ml-[10%] text-sm">
                        <li><Link to="/weather-report">Weather Report</Link></li>
                        <li className="mt-[18px]"><Link to="/currency-converter">Currency Converter</Link></li>
                    </ul>
                </div>
            </nav> */}
        </header>
    );
}

export default Navbar;


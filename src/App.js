import Navbar from "./components/Navbar";
import WeatherReport from "./WeatherReport";
import CurrencyConverter from "./CurrencyConverter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App font-league-spartan max-w-2xl m-auto antialiased leading-relaxed">
                <ThemeContextProvider>
                    <Navbar />
                    <Routes>
                        <Route exact path="/weather-report" element={<WeatherReport />} />
                        <Route exact path="/" element={<Navigate replace to="/weather-report" />} />
                        <Route exact path="/currency-converter" element={<CurrencyConverter />} />
                    </Routes>
                    <Footer />
                </ThemeContextProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;


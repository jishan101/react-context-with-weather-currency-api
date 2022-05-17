import { useContext, useState, useEffect } from "react";
import ThemeContext from "./contexts/ThemeContext";

const WeatherReport = () => {
    const { theme } = useContext(ThemeContext);

    const [country, setCountry] = useState("BD");
    const [city, setCity] = useState("Chittagong");
    const [iconCode, setIconCode] = useState("");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState();
    const [pressure, setPressure] = useState();
    const [humidity, setHumidity] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const countryElm = document.querySelector("#country");
        const cityElm = document.querySelector("#city");

        setCountry(countryElm.value);
        setCity(cityElm.value);

        countryElm.value = "";
        cityElm.value = "";
    }

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.REACT_APP_WEATHER_APIKEY}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data.sys.country);
                setCity(data.name);
                setIconCode(data.weather[0].icon);
                setWeather(data.weather[0].main);
                setTemperature(data.main.temp);
                setPressure(data.main.pressure);
                setHumidity(data.main.humidity);
            })
            .catch(err => console.log(err));

    }, [city, country]);

    return (
        <div className="w-full sm:rounded-lg px-[6%] py-8" style={{ color: theme.secondaryColor, backgroundColor: theme.backColor, boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>
            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 sm:gap-x-10 gap-y-4">
                    <div className="grid gap-y-2">
                        <input id="country" type="text" placeholder="Country" required className="px-3 py-1 rounded-sm text-black" style={{ boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }} />
                        <label htmlFor="country" className="text-xs">Example: "Bangladesh" or "BD".</label>
                    </div>
                    <div className="grid gap-y-2">
                        <input id="city" type="text" placeholder="City" required className="px-3 py-1 rounded-sm text-black" style={{ boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }} />
                        <label htmlFor="city" className="text-xs">Example: "Chittagong".</label>
                    </div>
                </div>
                <button className="mt-4 px-4 py-2 rounded-md" style={{ color: theme.primaryColor, backgroundColor: theme.actionColor, boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>Get Weather Info</button>
            </form>
            <div className="grid gap-y-3 mt-8 sm:w-[65%] px-6 sm:px-10 py-6 sm:py-8 rounded-md mx-auto" style={{ backgroundColor: theme.backColor, boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>
                <h1 className="text-center text-2xl font-medium">{city}, {country}</h1>
                <img className="mx-auto scale-150" src={`https://openweathermap.org/img/w/${iconCode}.png`} alt="Weather Icon" />
                <p className="text-center text-xl">{weather}</p>
                <p>Temperature: {temperature}°C</p>
                <p>Pressure: {pressure}hPa</p>
                <p>Humidity: {humidity}%</p>
            </div>
        </div>
    );
}

export default WeatherReport;


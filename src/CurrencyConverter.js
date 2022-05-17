import { useContext, useState, useEffect } from "react";
import ThemeContext from "./contexts/ThemeContext";

const CurrencyConverter = () => {
    const { theme } = useContext(ThemeContext);

    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("BDT");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState();

    const currencies = {
        AED: { currencyName: 'UAE Dirham', id: 'AED' },
        AFN: { currencyName: 'Afghan Afghani', currencySymbol: '؋', id: 'AFN' },
        ALL: { currencyName: 'Albanian Lek', currencySymbol: 'Lek', id: 'ALL' },
        AMD: { currencyName: 'Armenian Dram', id: 'AMD' },
        ANG: { currencyName: 'Netherlands Antillean Gulden', currencySymbol: 'ƒ', id: 'ANG' },
        AOA: { currencyName: 'Angolan Kwanza', id: 'AOA' },
        ARS: { currencyName: 'Argentine Peso', currencySymbol: '$', id: 'ARS' },
        AUD: { currencyName: 'Australian Dollar', currencySymbol: '$', id: 'AUD' },
        AWG: { currencyName: 'Aruban Florin', currencySymbol: 'ƒ', id: 'AWG' },
        AZN: { currencyName: 'Azerbaijani Manat', currencySymbol: 'ман', id: 'AZN' },
        BAM: { currencyName: 'Bosnia And Herzegovina Konvertibilna Marka', currencySymbol: 'KM', id: 'BAM' },
        BBD: { currencyName: 'Barbadian Dollar', currencySymbol: '$', id: 'BBD' },
        BDT: { currencyName: 'Bangladeshi Taka', id: 'BDT' },
        BGN: { currencyName: 'Bulgarian Lev', currencySymbol: 'лв', id: 'BGN' },
        BHD: { currencyName: 'Bahraini Dinar', id: 'BHD' },
        BIF: { currencyName: 'Burundi Franc', id: 'BIF' },
        BMD: { currencyName: 'Bermudan Dollar', id: 'BMD' },
        BND: { currencyName: 'Brunei Dollar', currencySymbol: '$', id: 'BND' },
        BOB: { currencyName: 'Bolivian Boliviano', currencySymbol: '$b', id: 'BOB' },
        BRL: { currencyName: 'Brazilian Real', currencySymbol: 'R$', id: 'BRL' },
        BSD: { currencyName: 'Bahamian Dollar', currencySymbol: '$', id: 'BSD' },
        BTC: { currencyName: 'Bitcoin', currencySymbol: 'BTC', id: 'BTC' },
        BTN: { currencyName: 'Bhutanese Ngultrum', id: 'BTN' },
        BWP: { currencyName: 'Botswana Pula', currencySymbol: 'P', id: 'BWP' },
        BYN: { currencyName: 'New Belarusian Ruble', currencySymbol: 'p.', id: 'BYN' },
        BYR: { currencyName: 'Belarusian Ruble', currencySymbol: 'p.', id: 'BYR' },
        BZD: { currencyName: 'Belize Dollar', currencySymbol: 'BZ$', id: 'BZD' },
        CAD: { currencyName: 'Canadian Dollar', currencySymbol: '$', id: 'CAD' },
        CDF: { currencyName: 'Congolese Franc', id: 'CDF' },
        CHF: { currencyName: 'Swiss Franc', currencySymbol: 'Fr.', id: 'CHF' },
        CLF: { currencyName: 'Chilean Unit Of Account', id: 'CLF' },
        CLP: { currencyName: 'Chilean Peso', currencySymbol: '$', id: 'CLP' },
        CNY: { currencyName: 'Chinese Yuan', currencySymbol: '¥', id: 'CNY' },
        COP: { currencyName: 'Colombian Peso', currencySymbol: '$', id: 'COP' },
        CRC: { currencyName: 'Costa Rican Colon', currencySymbol: '₡', id: 'CRC' },
        CUC: { currencyName: 'Cuban Convertible Peso', id: 'CUC' },
        CUP: { currencyName: 'Cuban Peso', currencySymbol: '$', id: 'CUP' },
        CVE: { currencyName: 'Cape Verdean Escudo', id: 'CVE' },
        CZK: { currencyName: 'Czech Koruna', currencySymbol: 'Kč', id: 'CZK' },
        DJF: { currencyName: 'Djiboutian Franc', id: 'DJF' },
        DKK: { currencyName: 'Danish Krone', currencySymbol: 'kr', id: 'DKK' },
        DOP: { currencyName: 'Dominican Peso', currencySymbol: 'RD$', id: 'DOP' },
        DZD: { currencyName: 'Algerian Dinar', id: 'DZD' },
        EGP: { currencyName: 'Egyptian Pound', currencySymbol: '£', id: 'EGP' },
        ERN: { currencyName: 'Eritrean Nakfa', id: 'ERN' },
        ETB: { currencyName: 'Ethiopian Birr', id: 'ETB' },
        EUR: { currencyName: 'Euro', currencySymbol: '€', id: 'EUR' },
        FJD: { currencyName: 'Fijian Dollar', currencySymbol: '$', id: 'FJD' },
        FKP: { currencyName: 'Falkland Islands Pound', currencySymbol: '£', id: 'FKP' },
        GBP: { currencyName: 'British Pound', currencySymbol: '£', id: 'GBP' },
        GEL: { currencyName: 'Georgian Lari', id: 'GEL' },
        GGP: { currencyName: 'Guernsey Pound', id: 'GGP' },
        GHS: { currencyName: 'Ghanaian Cedi', id: 'GHS' },
        GIP: { currencyName: 'Gibraltar Pound', currencySymbol: '£', id: 'GIP' },
        GMD: { currencyName: 'Gambian Dalasi', id: 'GMD' },
        GNF: { currencyName: 'Guinean Franc', id: 'GNF' },
        GTQ: { currencyName: 'Guatemalan Quetzal', currencySymbol: 'Q', id: 'GTQ' },
        GYD: { currencyName: 'Guyanese Dollar', currencySymbol: '$', id: 'GYD' },
        HKD: { currencyName: 'Hong Kong Dollar', currencySymbol: '$', id: 'HKD' },
        HNL: { currencyName: 'Honduran Lempira', currencySymbol: 'L', id: 'HNL' },
        HRK: { currencyName: 'Croatian Kuna', currencySymbol: 'kn', id: 'HRK' },
        HTG: { currencyName: 'Haitian Gourde', id: 'HTG' },
        HUF: { currencyName: 'Hungarian Forint', currencySymbol: 'Ft', id: 'HUF' },
        IDR: { currencyName: 'Indonesian Rupiah', currencySymbol: 'Rp', id: 'IDR' },
        ILS: { currencyName: 'Israeli New Sheqel', currencySymbol: '₪', id: 'ILS' },
        IMP: { currencyName: 'Manx pound', id: 'IMP' },
        INR: { currencyName: 'Indian Rupee', currencySymbol: '₹', id: 'INR' },
        IQD: { currencyName: 'Iraqi Dinar', id: 'IQD' },
        IRR: { currencyName: 'Iranian Rial', currencySymbol: '﷼', id: 'IRR' },
        ISK: { currencyName: 'Icelandic Króna', currencySymbol: 'kr', id: 'ISK' },
        JEP: { currencyName: 'Jersey Pound', id: 'JEP' },
        JMD: { currencyName: 'Jamaican Dollar', currencySymbol: 'J$', id: 'JMD' },
        JOD: { currencyName: 'Jordanian Dinar', id: 'JOD' },
        JPY: { currencyName: 'Japanese Yen', currencySymbol: '¥', id: 'JPY' },
        KES: { currencyName: 'Kenyan Shilling', currencySymbol: 'KSh', id: 'KES' },
        KGS: { currencyName: 'Kyrgyzstani Som', currencySymbol: 'лв', id: 'KGS' },
        KHR: { currencyName: 'Cambodian Riel', currencySymbol: '៛', id: 'KHR' },
        KMF: { currencyName: 'Comorian Franc', id: 'KMF' },
        KPW: { currencyName: 'North Korean Won', currencySymbol: '₩', id: 'KPW' },
        KRW: { currencyName: 'South Korean Won', currencySymbol: '₩', id: 'KRW' },
        KWD: { currencyName: 'Kuwaiti Dinar', id: 'KWD' },
        KYD: { currencyName: 'Cayman Islands Dollar', currencySymbol: '$', id: 'KYD' },
        KZT: { currencyName: 'Kazakhstani Tenge', currencySymbol: 'лв', id: 'KZT' },
        LAK: { currencyName: 'Lao Kip', currencySymbol: '₭', id: 'LAK' },
        LBP: { currencyName: 'Lebanese Lira', currencySymbol: '£', id: 'LBP' },
        LKR: { currencyName: 'Sri Lankan Rupee', currencySymbol: '₨', id: 'LKR' },
        LRD: { currencyName: 'Liberian Dollar', currencySymbol: '$', id: 'LRD' },
        LSL: { currencyName: 'Lesotho Loti', id: 'LSL' },
        LVL: { currencyName: 'Latvian Lats', currencySymbol: 'Ls', id: 'LVL' },
        LYD: { currencyName: 'Libyan Dinar', id: 'LYD' },
        MAD: { currencyName: 'Moroccan Dirham', id: 'MAD' },
        MDL: { currencyName: 'Moldovan Leu', id: 'MDL' },
        MGA: { currencyName: 'Malagasy Ariary', id: 'MGA' },
        MKD: { currencyName: 'Macedonian Denar', currencySymbol: 'ден', id: 'MKD' },
        MMK: { currencyName: 'Myanma Kyat', id: 'MMK' },
        MNT: { currencyName: 'Mongolian Tugrik', currencySymbol: '₮', id: 'MNT' },
        MOP: { currencyName: 'Macanese Pataca', id: 'MOP' },
        MRO: { currencyName: 'Mauritanian Ouguiya', id: 'MRO' },
        MUR: { currencyName: 'Mauritian Rupee', currencySymbol: '₨', id: 'MUR' },
        MVR: { currencyName: 'Maldivian Rufiyaa', id: 'MVR' },
        MWK: { currencyName: 'Malawian Kwacha', id: 'MWK' },
        MXN: { currencyName: 'Mexican Peso', currencySymbol: '$', id: 'MXN' },
        MYR: { currencyName: 'Malaysian Ringgit', currencySymbol: 'RM', id: 'MYR' },
        MZN: { currencyName: 'Mozambican Metical', id: 'MZN' },
        NAD: { currencyName: 'Namibian Dollar', currencySymbol: '$', id: 'NAD' },
        NGN: { currencyName: 'Nigerian Naira', currencySymbol: '₦', id: 'NGN' },
        NIO: { currencyName: 'Nicaraguan Cordoba', currencySymbol: 'C$', id: 'NIO' },
        NOK: { currencyName: 'Norwegian Krone', currencySymbol: 'kr', id: 'NOK' },
        NPR: { currencyName: 'Nepalese Rupee', currencySymbol: '₨', id: 'NPR' },
        NZD: { currencyName: 'New Zealand Dollar', currencySymbol: '$', id: 'NZD' },
        OMR: { currencyName: 'Omani Rial', currencySymbol: '﷼', id: 'OMR' },
        PAB: { currencyName: 'Panamanian Balboa', currencySymbol: 'B/.', id: 'PAB' },
        PEN: { currencyName: 'Peruvian Nuevo Sol', currencySymbol: 'S/.', id: 'PEN' },
        PGK: { currencyName: 'Papua New Guinean Kina', id: 'PGK' },
        PHP: { currencyName: 'Philippine Peso', currencySymbol: '₱', id: 'PHP' },
        PKR: { currencyName: 'Pakistani Rupee', currencySymbol: '₨', id: 'PKR' },
        PLN: { currencyName: 'Polish Zloty', currencySymbol: 'zł', id: 'PLN' },
        PYG: { currencyName: 'Paraguayan Guarani', currencySymbol: 'Gs', id: 'PYG' },
        QAR: { currencyName: 'Qatari Riyal', currencySymbol: '﷼', id: 'QAR' },
        RON: { currencyName: 'Romanian Leu', currencySymbol: 'lei', id: 'RON' },
        RSD: { currencyName: 'Serbian Dinar', currencySymbol: 'Дин.', id: 'RSD' },
        RUB: { currencyName: 'Russian Ruble', currencySymbol: 'руб', id: 'RUB' },
        RWF: { currencyName: 'Rwandan Franc', id: 'RWF' },
        SAR: { currencyName: 'Saudi Riyal', currencySymbol: '﷼', id: 'SAR' },
        SBD: { currencyName: 'Solomon Islands Dollar', currencySymbol: '$', id: 'SBD' },
        SCR: { currencyName: 'Seychellois Rupee', currencySymbol: '₨', id: 'SCR' },
        SDG: { currencyName: 'Sudanese Pound', id: 'SDG' },
        SEK: { currencyName: 'Swedish Krona', currencySymbol: 'kr', id: 'SEK' },
        SGD: { currencyName: 'Singapore Dollar', currencySymbol: '$', id: 'SGD' },
        SHP: { currencyName: 'Saint Helena Pound', currencySymbol: '£', id: 'SHP' },
        SLL: { currencyName: 'Sierra Leonean Leone', id: 'SLL' },
        SOS: { currencyName: 'Somali Shilling', currencySymbol: 'S', id: 'SOS' },
        SRD: { currencyName: 'Surinamese Dollar', currencySymbol: '$', id: 'SRD' },
        STD: { currencyName: 'Sao Tome And Principe Dobra', id: 'STD' },
        SVC: { currencyName: 'Salvadoran Colón', id: 'SVC' },
        SYP: { currencyName: 'Syrian Pound', currencySymbol: '£', id: 'SYP' },
        SZL: { currencyName: 'Swazi Lilangeni', id: 'SZL' },
        THB: { currencyName: 'Thai Baht', currencySymbol: '฿', id: 'THB' },
        TJS: { currencyName: 'Tajikistani Somoni', id: 'TJS' },
        TMT: { currencyName: 'Turkmenistan Manat', id: 'TMT' },
        TND: { currencyName: 'Tunisian Dinar', id: 'TND' },
        TOP: { currencyName: 'Paanga', id: 'TOP' },
        TRY: { currencyName: 'Turkish New Lira', id: 'TRY' },
        TTD: { currencyName: 'Trinidad and Tobago Dollar', currencySymbol: 'TT$', id: 'TTD' },
        TWD: { currencyName: 'New Taiwan Dollar', currencySymbol: 'NT$', id: 'TWD' },
        TZS: { currencyName: 'Tanzanian Shilling', currencySymbol: 'TSh', id: 'TZS' },
        UAH: { currencyName: 'Ukrainian Hryvnia', currencySymbol: '₴', id: 'UAH' },
        UGX: { currencyName: 'Ugandan Shilling', currencySymbol: 'USh', id: 'UGX' },
        USD: { currencyName: 'United States Dollar', currencySymbol: '$', id: 'USD' },
        UYU: { currencyName: 'Uruguayan Peso', currencySymbol: '$U', id: 'UYU' },
        UZS: { currencyName: 'Uzbekistani Som', currencySymbol: 'лв', id: 'UZS' },
        VEF: { currencyName: 'Venezuelan Bolivar', id: 'VEF' },
        VND: { currencyName: 'Vietnamese Dong', currencySymbol: '₫', id: 'VND' },
        VUV: { currencyName: 'Vanuatu Vatu', id: 'VUV' },
        WST: { currencyName: 'Samoan Tala', id: 'WST' },
        XAF: { currencyName: 'Central African CFA Franc', id: 'XAF' },
        XAG: { currencyName: 'Silver (troy ounce)', id: 'XAG' },
        XCD: { currencyName: 'East Caribbean Dollar', currencySymbol: '$', id: 'XCD' },
        XDR: { currencyName: 'Special Drawing Rights', id: 'XDR' },
        XOF: { currencyName: 'West African CFA Franc', id: 'XOF' },
        XPF: { currencyName: 'CFP Franc', id: 'XPF' },
        YER: { currencyName: 'Yemeni Rial', currencySymbol: '﷼', id: 'YER' },
        ZAR: { currencyName: 'South African Rand', currencySymbol: 'R', id: 'ZAR' },
        ZMK: { currencyName: 'Old Zambian Kwacha', id: 'ZMK' },
        ZMW: { currencyName: 'Zambian Kwacha', id: 'ZMW' },
        ZWL: { currencyName: 'Zimbabwean Dollar', id: 'ZWL' }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const amountElm = document.querySelector("#amount");
        const fromElm = document.querySelector("#from");
        const toElm = document.querySelector("#to");

        setAmount(amountElm.value);
        setFrom(fromElm.value);
        setTo(toElm.value);

        amountElm.value = "";
        fromElm.value = "";
        toElm.value = "";
    }

    useEffect(() => {
        fetch(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${process.env.REACT_APP_CURRENCY_APIKEY}`)
            .then(res => res.json())
            .then(data => {
                setResult(data[`${from}_${to}`]*amount);
            })
            .catch(err => console.log(err));

    }, [amount, from, to]);

    return (
        <div className="w-full sm:rounded-lg px-[6%] py-8" style={{ color: theme.secondaryColor, backgroundColor: theme.backColor, boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>
            <div className="mb-3 overflow-hidden">
                <p className="text-lg mb-5">{amount} {currencies[from].currencyName} equals</p>
                <p className="text-3xl md:text-[40px]">{result} {currencies[to].currencyName}</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid gap-y-1 mb-4">
                    <label htmlFor="amount">Enter Amount</label>
                    <input id="amount" type="number" placeholder="Amount" required className="px-3 py-1 rounded-sm text-black" style={{ boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }} />
                </div>
                <div className="grid grid-cols-12 gap-x-2 mb-1">
                    <div className="col-span-7">From</div>
                    <div className="col-span-5">To</div>
                </div>
                <div className="grid grid-cols-12 gap-x-2">
                    <div className="grid col-span-5">
                        <select name="from" id="from" className="px-2 py-2 rounded-sm text-black" style={{ boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>
                            <option value="">Choose...</option>
                            {Object.keys(currencies).map(key => <option key={currencies[key].id} value={currencies[key].id}>{currencies[key].id}</option>)}
                        </select>
                    </div>
                    <div className="grid col-span-2 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" fill={theme.actionColor} viewBox="0 0 512 512"><path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" /></svg>
                    </div>
                    <div className="grid col-span-5">
                        <select name="to" id="to" className="px-2 py-2 rounded-sm text-black" style={{ boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>
                            <option value="">Choose...</option>
                            {Object.keys(currencies).map(key => <option key={currencies[key].id} value={currencies[key].id}>{currencies[key].id}</option>)}
                        </select>
                    </div>
                </div>
                <button className="mt-5 px-4 py-2 rounded-md" style={{ color: theme.primaryColor, backgroundColor: theme.actionColor, boxShadow: `1px 1px 4px 2px ${theme.shadowColor}` }}>Get Exchange Rate</button>
            </form>
        </div>
    );
}

export default CurrencyConverter;


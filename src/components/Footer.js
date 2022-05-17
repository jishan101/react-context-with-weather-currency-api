import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className="w-full h-24 flex justify-center items-center sm:rounded-lg mt-6" style={{ color: theme.secondaryColor, backgroundColor: theme.backColor, boxShadow: `1px -1px 4px 2px ${theme.shadowColor}`}}>
            <div>
                Project Developed by <a className="" style={{ color: theme.actionColor }} href="https://github.com/jishan101/" target="_blank" rel="noopener noreferrer">Irfanul Islam Jishan</a>
                <div className="mt-3 text-center">
                    <a className="inline-block mr-4" href="mailto:rko.jishan@gmail.com" target="_blank" rel="noopener noreferrer">
                        <svg className="social-animation feather feather-mail" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme.secondaryColor } strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a className="inline-block mr-4" href="https://github.com/jishan101/" target="_blank" rel="noopener noreferrer">
                        <svg className="social-animation feather feather-github" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme.secondaryColor } strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a className="inline-block mr-4" href="https://www.instagram.com/caped_crusadeer/" target="_blank" rel="noopener noreferrer">
                        <svg className="social-animation feather feather-instagram" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme.secondaryColor } strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a className="inline-block mr-4" href="https://www.linkedin.com/in/irfanulislamjishan/" target="_blank" rel="noopener noreferrer">
                        <svg className="social-animation feather feather-linkedin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme.secondaryColor } strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a className="inline-block mr-4" href="https://www.facebook.com/rko.jishan/" target="_blank" rel="noopener noreferrer">
                        <svg className="social-animation feather feather-facebook" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme.secondaryColor } strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a className="inline-block mr-4" href="https://codepen.io/jishan101/" target="_blank" rel="noopener noreferrer">
                        <svg className="social-animation feather feather-codepen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme.secondaryColor } strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


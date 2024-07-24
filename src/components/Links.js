import './Components.css';
import { FaLinkedin, FaGithub, FaDev, FaEnvelope } from 'react-icons/fa';

export default function Links() {
    return (
        <div className="section">
            <p className="mb-8 text-xl font text-amber-100">
                Links
            </p>
            <div className="flex flex-row text-stone-400">
                <a className="transition duration-500 mr-5 hover:text-amber-100 flex items-center" href="https://www.linkedin.com/in/aditya-k1/" rel="noreferrer" target="_blank">
                    <FaLinkedin className="mr-2" /> <span>LinkedIn</span>
                </a>
                <a className="transition duration-500 mr-5 hover:text-amber-100 flex items-center" href="https://github.com/adityakeerthi" rel="noreferrer" target="_blank">
                    <FaGithub className="mr-2" /> <span>Github</span>
                </a>
                <a className="transition duration-500 mr-5 hover:text-amber-100 flex items-center" href="https://devpost.com/adityakeerthi" rel="noreferrer" target="_blank">
                    <FaDev className="mr-2" /> <span>Devpost</span>
                </a>
                <a className="transition duration-500 mr-5 hover:text-amber-100 flex items-center" href="mailto:aditya.keerthi1@uwaterloo.ca" rel="noreferrer" target="_blank">
                    <FaEnvelope className="mr-2" /> <span>Email</span>
                </a>
            </div>
        </div>
    );
}

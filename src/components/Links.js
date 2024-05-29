import './Components.css';
import Resume from '../files/resume.pdf';

export default function Links() {
    return (
        <div class="section">
            <p class="mb-8 text-xl font text-stone-600">
                links
            </p>
            <div class="flex flex-row underline underline-offset-4 text-stone-400">
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-stone-600" href={Resume} rel="noreferrer" target="_blank">resume</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-stone-600" href="https://www.linkedin.com/in/aditya-k1/" rel="noreferrer" target="_blank">linkedin</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-stone-600" href="https://github.com/adityakeerthi" rel="noreferrer" target="_blank">github</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-stone-600" href="https://devpost.com/adityakeerthi" rel="noreferrer" target="_blank">devpost</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-stone-600" href="mailto:aditya.keerthi1@uwaterloo.ca/" rel="noreferrer" target="_blank">email</a>
            </div>
        </div>
    )
}
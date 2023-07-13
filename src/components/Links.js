import './Components.css';
import Resume from '../files/resume.pdf';

export default function Links() {
    return (
        <div class="section">
            <p class="mb-8 text-xl font text-stone-100">
                Links
            </p>
            <div class="flex flex-row underline underline-offset-4 text-stone-300">
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-white" href={Resume} rel="noreferrer" target="_blank">Resume</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-white" href="https://www.linkedin.com/in/aditya-k1/" rel="noreferrer" target="_blank">LinkedIn</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-white" href="https://github.com/adityakeerthi" rel="noreferrer" target="_blank">Github</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-white" href="https://devpost.com/adityakeerthi" rel="noreferrer" target="_blank">Devpost</a>
                <a class="transition duration-500 hover:scale-125 mr-5 hover:text-white" href="mailto:adityakeerthi05@gmail.com/" rel="noreferrer" target="_blank">Email</a>
            </div>
        </div>
    )
}
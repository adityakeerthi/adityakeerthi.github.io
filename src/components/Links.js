import './Components.css';
import Resume from '../files/resume.pdf';

export default function Links() {
    return (
        <div class="section">
            <p class="mb-8 text-xl font font-bold text-stone-100">
                Links
            </p>
            <div class="flex flex-row underline underline-offset-1 text-stone-300">
                <a class="mr-4 hover:text-white" href={Resume} rel="noreferrer" target="_blank">Resume</a>
                <a class="mr-4 hover:text-white" href="https://www.linkedin.com/in/aditya-k1/" rel="noreferrer" target="_blank">LinkedIn</a>
                <a class="mr-4 hover:text-white" href="https://github.com/adityakeerthi" rel="noreferrer" target="_blank">Github</a>
                <a class="mr-4 hover:text-white" href="https://devpost.com/adityakeerthi" rel="noreferrer" target="_blank">Devpost</a>
                <a class="mr-4 hover:text-white" href="mailto:adityakeerthi05@gmail.com/" rel="noreferrer" target="_blank">Email</a>
            </div>
        </div>
    )
}
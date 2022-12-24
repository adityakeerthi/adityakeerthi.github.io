import './Components.css';
import Resume from '../files/resume.pdf';

export default function Links() {
    return (
        <div class="section">
            <p class="mb-8 text-xl font font-bold text-stone-500">
                Links
            </p>
            <div class="flex flex-row underline underline-offset-1">
                <a class="mr-4 hover:animate-pulse" href={Resume} rel="noreferrer" target="_blank">Resume</a>
                <a class="mr-4 hover:animate-pulse" href="https://www.linkedin.com/in/aditya-k1/" rel="noreferrer" target="_blank">LinkedIn</a>
                <a class="mr-4 hover:animate-pulse" href="https://github.com/adityakeerthi" rel="noreferrer" target="_blank">Github</a>
                <a class="mr-4 hover:animate-pulse" href="https://devpost.com/adityakeerthi" rel="noreferrer" target="_blank">Devpost</a>
                <a class="mr-4 hover:animate-pulse" href="mailto:adityakeerthi05@gmail.com/" rel="noreferrer" target="_blank">Email</a>
            </div>
        </div>
    )
}
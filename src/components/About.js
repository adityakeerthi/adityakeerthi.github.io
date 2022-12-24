import './Components.css';
import Resume from '../files/resume.pdf';

export default function About() {
    return (
        <div id="fds" class="section">
            <p class="mb-8 text-3xl font-bold text-stone-800">
                Aditya Keerthi
            </p>
            <p>
                Hi, I'm Aditya and I have a dream to solve a few of the world's 
                biggest problems. 
            </p>
            <p class="mt-4"> 
                Currently, I'm a software engineering student at the University
                of <a class="hover:animate-pulse underline underline-offset-1" 
                href="https://uwaterloo.ca/">Waterloo</a>. I've previously interned at <a 
                class="hover:animate-pulse underline underline-offset-1" 
                href="https://www.feroot.com/">Feroot</a>.
            </p>
            <p class="mt-4">
                I'm looking for co-op/internship opportunities this upcoming summer.
                For more information, please check out my <a class="hover:animate-pulse underline 
                underline-offset-1" href={Resume}>resume</a> or shoot me an <a 
                class="hover:animate-pulse underline underline-offset-1" 
                href="mailto:adityakeerthi05@gmail.com">email</a>.
            </p>
        </div>
    )
}
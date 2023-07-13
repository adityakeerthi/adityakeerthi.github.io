import './Components.css';
import Resume from '../files/resume.pdf';

export default function About() {
    return (
        <div id="fds" class="section">
            <p class="mb-8 text-3xl text-stone-100">
                Aditya Keerthi 
            </p>
            {/* <hr class="h-px my-8 bg-stone-200 border-0"/> */}
            <p class="text-stone-300">
                Hi, I'm Aditya and I have a dream to solve a few of the world's 
                biggest problems. 
            </p>
            <p class="mt-4 text-stone-300"> 
                Currently, I'm a software engineering student at the University
                of <a class="hover:text-yellow-200 text-yellow-400" 
                target="_blank" rel="noreferrer" href="https://uwaterloo.ca/">Waterloo</a>. 
                I'm working as a software developer at <a 
                class="hover:text-red-200 text-red-400" 
                target="_blank" rel="noreferrer" href="https://www.toyota.ca/toyota/en/">Toyota</a>. 
                I've previously interned at <a class="hover:text-purple-200 text-purple-300" 
                target="_blank" rel="noreferrer" href="https://www.feroot.com/">Feroot</a>, 
                a leader in client side security.
            </p>
            <p class="mt-4 text-stone-300">
                I'm looking for co-op/internship opportunities for Winter 2024.
                For more information, please check out my <a class="hover:text-white underline 
                underline-offset-4" href={Resume}>resume</a> or shoot me an <a 
                class="hover:text-white transition duration-500 hover:scale-125 underline underline-offset-4" 
                href="mailto:adityakeerthi05@gmail.com">email</a>.
            </p>
        </div>
    )
}
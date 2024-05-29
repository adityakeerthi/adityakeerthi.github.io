import './Components.css';
import Resume from '../files/resume.pdf';

export default function About() {
    return (
        <div id="fds" class="section">
            <p class="mb-8 text-3xl text-stone-600">
                aditya keerthi 
            </p>
            {/* <hr class="h-px my-8 bg-stone-200 border-0"/> */}
            <p class="text-stone-500 hover:scale-105 transition duration-500">
                Hi, I'm Aditya and I have a dream to solve a few of the world's 
                biggest problems. 
            </p>
            <p class="mt-4 text-stone-500 hover:scale-105 transition duration-500"> 
                Currently, I'm a software engineering student at the University
                of <a class="hover:text-yellow-500 transition duration-500 text-yellow-400" 
                target="_blank" rel="noreferrer" href="https://uwaterloo.ca/">Waterloo</a>. 
                I've worked at <a class="hover:text-purple-500 transition duration-500 text-purple-300" 
                target="_blank" rel="noreferrer" href="https://www.feroot.com/">Feroot</a>, 
                <a class="hover:text-green-500 transition duration-500 text-green-300" target="_blank" 
                rel="noreferrer" href="https://www.litespace.io/"> Litespace</a>, and
                <a class="hover:text-red-500 transition duration-500 text-red-400" 
                target="_blank" rel="noreferrer" href="https://www.toyota.ca/toyota/en/"> Toyota</a>.
            </p>
            <p class="mt-4 text-stone-500 hover:scale-105 transition duration-500">
                I'm looking for co-op/internship opportunities for Fall 2024.
                For more information, please check out my <a class="text-stone-400 hover:text-stone-600 underline transition duration-500 hover:scale-125
                underline-offset-4" href={Resume}>resume</a> or shoot me an <a 
                class="text-stone-400 hover:text-stone-600 transition duration-500 hover:scale-125 underline underline-offset-4" 
                href="mailto:aditya.keerthi1@uwaterloo.ca">email</a>.
            </p>
        </div>
    )
}
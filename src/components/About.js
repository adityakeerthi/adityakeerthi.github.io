import './Components.css';

export default function About() {
    return (
        <div className="section">
            <p id="title" className="mb-8 text-3xl text-amber-100">
                Aditya Keerthi 
            </p>
            {/* <hr className="h-px my-8 bg-stone-200 border-0"/> */}
            <p className="text-stone-400 transition duration-500">
                {/* Hi, I'm Aditya and I have a dream to solve a few of the world's 
                biggest problems.  */}
                Hi, I'm Aditya! I'm currently studying software engineering student at the University
                of <a className="hover:text-yellow-500 transition duration-500 text-yellow-400" 
                target="_blank" rel="noreferrer" href="https://uwaterloo.ca/">Waterloo</a>. 
                I'm an incoming SWE Intern @ <a className="hover:text-yellow-400 transition duration-500 text-yellow-500" 
                target="_blank" rel="noreferrer" href="https://www.rippling.com/">Rippling</a> for the next summer.
                I've worked at <a className="hover:text-blue-300 transition duration-500 text-blue-500" 
                target="_blank" rel="noreferrer" href="https://daffodilhealth.co/">Daffodil</a>, <a className="hover:text-purple-500 transition duration-500 text-purple-300" 
                target="_blank" rel="noreferrer" href="https://www.feroot.com/">Feroot</a>, 
                <a className="hover:text-green-500 transition duration-500 text-green-300" target="_blank" 
                rel="noreferrer" href="https://www.litespace.io/"> Litespace</a>, and
                <a className="hover:text-red-500 transition duration-500 text-red-400" 
                target="_blank" rel="noreferrer" href="https://www.toyota.ca/toyota/en/"> Toyota</a>.
            </p>

            <p className="mt-4 text-stone-400 transition duration-500">
                I'm looking for co-op/internship opportunities during <a className="text-blue-300"> 2026. </a>
                For more information, please feel free to shoot me an <a 
                className="text-stone-400 hover:text-amber-100 transition duration-500 underline underline-offset-4" 
                href="mailto:aditya.keerthi1@uwaterloo.ca">email</a>.
            </p>
        </div>
    )
}
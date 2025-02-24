import { skillsData } from '../../assets/skillsData';

interface Skill {
  name: string;
  image: string;
}

const About = () => {
    return (
        <div className="flex md:flex-row flex-col md:justify-center items-center text-white bg-pink">
            <div className="flex flex-col items-center justify-center text-white p-4 text-justify w-full md:w-1/2 bg-darkBlue">
                <h1 className="text-center text-2xl font-bold underline">About Me</h1>

                <h2 className="text-center text-xl font-bold underline">David Fletes Esparza</h2> 

                <h3 className="text-center text-lg font-bold underline">Front End Developer | React & React Native Specialist</h3>

                <p className="text-justify">
                    I am a passionate Front End Developer with experience in creating web and mobile applications using modern technologies like React, 
                    React Native, and Node.js. My focus is on delivering dynamic and engaging user experiences while optimizing design and functionality.
                    I have a strong command of tools such as Expo, Vite, and Webpack, and I am proficient in version control with Git and GitHub. 
                    My adaptability allows me to quickly adjust to new environments and technologies, and I thrive in collaborative, fast-paced settings.
                    I am fluent in both English and Spanish, making me well-suited for international teams. 
                    My goal is to continuously grow as a developer, tackling complex technical challenges and delivering innovative solutions.
                    </p>

                <h4 className="text-center text-lg font-bold underline">Skills & Expertise</h4>

                Languages: JavaScript, Java <br />

                Frameworks & Libraries: React, React Native, Node.js, Vite <br />

                Web Design: CSS, Bootstrap, Tailwind CSS, Responsive Design <br />

                Development Tools: Git, GitHub, Webpack, Expo <br />

                Soft Skills: Adaptability, Communication, Initiative <br />

                <h4 className="text-center text-lg font-bold underline">Education</h4>

                Systems Engineering – TECMM (2019 - 2022) <br />

                Front End React Developer Certification – Alura (2023 - 2024) <br />

                <h4 className="text-center text-lg font-bold underline mt-4">Contact</h4>

                <div className="flex flex-col text-white m-4 p-4 text-justify w-full md:w-1/2">
                    <a href="tel:+13466043606" target="_blank" rel="noopener noreferrer">📞 Phone: (+1) 346-604-3606</a> <br />

                    <a href="mailto:david.fletes.dev@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email: david.fletes.dev@gmail.com</a> <br />

                    <a href="https://www.linkedin.com/in/david-fletes-esparza-729018228/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn: David Fletes Esparza</a> <br />
                    
                    <p className="text-center text-lg font-bold underline" >Let's build something amazing together!</p>
                </div>

            </div>

            <div className="flex flex-wrap justify-evenly items-center text-white m-4 p-4 text-justify w-full md:w-1/2">
                {skillsData.skills.map((skill: Skill, index: number) => (
                    <>
                        <div key={skill.name} className="flex flex-col items-center m-2">
                            <img src={skill.image} alt={skill.name} className="rounded md:h-16 md:w-16 h-10 w-10 hover:scale-110 transition-all duration-300" />
                            <p className="text-center text-sm font-bold mt-2">{skill.name}</p>
                        </div>
                        {(index + 1) % 4 === 0 && <div className="w-full mt-4"></div>}
                    </>
                ))}
            </div>
        
        </div>
        
    )
}   

export default About;

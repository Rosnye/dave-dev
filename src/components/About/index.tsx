import { skillsData } from '../../assets/skillsData';

interface Skill {
  name: string;
  image: string;
}

const About = () => {
    return (
        <div className="flex flex-col items-center text-white mt-4 font-Barlow">
            <div className="rounded-2xl flex flex-col md:flex-row items-center text-left justify-items-around text-white p-4 w-full md:w-3/4 bg-amarillito bg-opacity-60">
                <div>
                    <h2 className="w-full font-BebasNeue text-5xl pb-4 pt-8">David Fletes Esparza</h2> 

                    <h3 className="w-full text-lg pb-4">Front End Developer | React & React Native</h3>

                    <p className="text-justify pb-4 font-Barlow text-xl">
                        I am a passionate Front End Developer with experience in creating web and mobile applications using modern technologies like React, 
                        React Native, and Node.js. My focus is on delivering dynamic and engaging user experiences while optimizing design and functionality.
                        I have a strong command of tools such as Expo, Vite, and Webpack, and I am proficient in version control with Git and GitHub. 
                        My adaptability allows me to quickly adjust to new environments and technologies, and I thrive in collaborative, fast-paced settings.
                        I am fluent in both English and Spanish, making me well-suited for international teams. 
                        My goal is to continuously grow as a developer, tackling complex technical challenges and delivering innovative solutions.
                    </p>
                </div>
                <div>
                    <img className="ml-4 rounded-2xl w-3/4 object-fit" src="./src/assets/Manzanillo18.jpg" alt="Profile picture" />
                </div>

            </div>

            <h3 className='text-3xl font-BebasNeue mt-8'>Skills & Techs</h3>
            <div className="flex flex-wrap justify-evenly items-center text-white m-4 p-4 text-justify w-full md:w-1/2">
                {skillsData.skills.map((skill: Skill, index: number) => (
                    <>  
                        <div key={skill.name} className="flex flex-col items-center p-4">
                            <img src={skill.image} alt={skill.name} className="rounded md:h-16 md:w-16 h-10 w-10 hover:scale-110 transition-all duration-300" />
                            <h2 className="text-center text-lg font-Barlow mt-2">{skill.name}</h2>
                        </div>
                        {(index + 1) % 3 === 0 && <div className="w-full mt-4"></div>}
                    </>
                ))}
            </div>

            <div className="flex flex-col items-center text-white m-4 p-4 text-justify w-full md:w-1/2">
                    <a href="tel:+13466043606" target="_blank" rel="noopener noreferrer">📞 Phone: (+1) 346-604-3606</a> <br />

                    <a href="mailto:david.fletes.dev@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email: david.fletes.dev@gmail.com</a> <br />

                    <a href="https://www.linkedin.com/in/david-fletes-esparza-729018228/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn: David Fletes Esparza</a> <br />
                    
                    <p className="text-center text-lg" >Let's build something amazing together!</p>
            </div>
        
        </div>
        
    )
}   

export default About;

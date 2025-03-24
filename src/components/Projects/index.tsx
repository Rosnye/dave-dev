import { projectData } from "../../assets/projectData";

interface project {
  name: string;
  image: string;
  dir: string;
}

const Projects = () => {

    return (
        <div className="flex flex-col items-center text-white mt-4 font-Barlow">

            <h3 className='text-3xl font-BebasNeue mt-8'>Projects i've been working on</h3>
            <div className="flex flex-wrap justify-evenly items-center text-white m-4 p-4 text-justify w-full md:w-1/2">
                {projectData.skills.map((project: project, index: number) => (
                    <>  
                        <a href={project.dir} key={project.name} className="flex flex-col items-center p-4">
                            <img src={`../images/${project.image}`} alt={project.name} className="rounded  hover:scale-110 transition-all duration-300" />
                            <h2 className="text-center text-lg font-Barlow mt-2">{project.name}</h2>
                        </a>
                        {(index + 1) % 3 === 0 && <div className="w-full mt-4"></div>}
                    </>
                ))}
            </div>
        </div>
        
    )
}   


export default Projects;
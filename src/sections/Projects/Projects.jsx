import ProjectCard from "../../components/ProjectCard/ProjectCard"
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects_container section' id="projects">
        <div className="container">
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-md-10">
                <div className="col-md-12">
                <h3 className='projects_header'>Projects |</h3>
                </div>
                <div className="row">
                <div className="col-md-4 col-12 ">
                   <ProjectCard
            image={'./projects/project1.svg'}
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,"
            link="https://example.com/project2"
          />
                   </div>
                   <div className="col-md-4 col-12 ">
                   <ProjectCard
            image={'./projects/project1.svg'}
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,"
            link="https://example.com/project2"
          />
                   </div>
                   <div className="col-md-4 col-12 ">
                   <ProjectCard
            image={'./projects/project1.svg'}
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,"
            link="https://example.com/project2"
          />
                   </div>
                </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
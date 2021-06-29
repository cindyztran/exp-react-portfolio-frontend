import { useState, useEffect} from "react";

function Projects(props) {
    //create a state variable to hold the projects data
    const [projects, setProjects] = useState(null);
    const getProjectsData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "projects");

        //turn response into javascript object
        const data = await response.json();

        //set the projects state to the data
        setProjects(data);
    };

    //make an intial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getProjectsData(), []);

    //define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1 className="project-h1">{project.name}</h1>
                <img className="project-img" alt='' src={project.image}/>
                <div className="btn">
                    <a href={project.git}>
                        <button>Github</button>
                    </a>
                    <a href={project.live}>
                        <button>live site</button>
                    </a>
                </div>

            </div>

        ));
    };
    return projects ? loaded() : <h1>Loading...</h1>

}

export default Projects;
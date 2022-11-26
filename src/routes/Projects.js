import data from '../data/projects'

export default function Projects() {
    let dt = data.map(
        project => {
            console.log(project)
            return (
                <div class="center" id="margin-left">
                    <div class="projs_container">
                        <h3>{project.title}</h3>
                        <img class="proj_img" src={project.image}></img>
                        <br></br>
                        <br></br>
                        <p>{project.description}</p>
                        <p>{project.contributors}</p>
                    </div>
                </div>

            )
        }
    )
    return (<div class="center">{dt}</div>)
}
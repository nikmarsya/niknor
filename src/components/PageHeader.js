import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Animation from "./Animation"

const PageHeader = ()=>{

    return(
        <Animation>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/publications">Publications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/researches">Research Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collaborations">Collaborations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/supervisions">Supervisions</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#contact">Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </Animation>
    )
}
export default PageHeader
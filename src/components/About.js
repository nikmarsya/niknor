import {Link} from "react-router-dom";

const About=()=>{
    return(
        <section id="about">
        <div className="container mt-4 pt-4 divborder">
            <div className="row mt-4 ">
                <h1 className="text-center" >About Me</h1>
                <div className="col-sm-12 col-md-12 col-lg-3 mt-2 ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">PROFILE</h4>
                            <p className="card-text ">Some quick example text</p>
                            <Link to="/profile" className="btn-sm btn-primary card-bottom">More details...</Link>
                            
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 mt-2 ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">PUBLICATIONS</h4>
                            <p className="card-text ">List of publications for the past 3 years</p>
                            <Link to="/publications" className="btn-sm btn-primary card-bottom">More details...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 mt-2 ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">RESEARCH PROJECTS</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/researches" className="btn-sm btn-primary card-bottom">More details...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 mt-2 ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">SUPERVISIONS</h4>
                            <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/supervisions" className="btn-sm btn-primary card-bottom">More details...</Link>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 mt-2 ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">COLLABORATIONS</h4>
                            <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/collaborations" className="btn-sm btn-primary card-bottom">More details...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
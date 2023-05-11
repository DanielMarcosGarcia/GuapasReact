import Insta from "./images/instagram.svg"
import Face from "./images/facebook.svg"


const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light p-5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <h6>© 2022 Guapas Wilde.</h6>
                    </div>

                    <div className="col-md-6 text-end">
                        <a href="https://www.facebook.com/guapaswilde" target="_blank" className="text-light me-2"><img src={Face} alt={"Facebook"} width={25} />
                        </a>
                        <a href="https://www.instagram.com/guapas_wilde/" target="_blank" className="text-light me-2"><img src={Insta} alt={"Instagram"} width={25} />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;
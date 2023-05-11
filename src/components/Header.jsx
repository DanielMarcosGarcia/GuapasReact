import manicura from "./images/manicura.png";
import pedicura from "./images/pedicura.png";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
    return (

        <div className="container-fluid">

            <div className="row bg-body-secondary p-3">

                <div className="col-md-6">
                    <a href="https://estetica-guapaswilde.netlify.app">
                        <img src={manicura} alt={"Manicura"} width={25} /></a>
                </div>

                <div className="col-md-6 text-end">
                    <a href="#" className="text-dark text-decoration-none">Buscar Tienda</a> |
                    <a href="#" className="text-dark text-decoration-none"> Ayuda</a>
                </div>
                
            </div>

            <div className="row p-3">

                <div className="col-md-4">
                    <a href="#">
                        <img src={pedicura} alt={"Pedicura"} width={40} /></a>
                </div>

                <div className="col-md-4 text-center">
                    <NavBar />
                </div>

                <div className="col-md-4 text-end">
                    <CartWidget />
                </div>

            </div>

        </div>
    )
}

export default Header;
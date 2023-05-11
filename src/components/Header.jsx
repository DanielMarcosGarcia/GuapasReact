import manicura from "./images/manicura.png"

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
        </div>
    )
}

export default Header;
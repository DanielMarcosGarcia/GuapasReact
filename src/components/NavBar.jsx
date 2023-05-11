const NavBar = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Turnos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Servicios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Promociones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
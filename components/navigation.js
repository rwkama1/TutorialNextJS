import { Component } from "react"
import Link from "next/link"

class Navigation extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                <a className="navbar-brand" >Home</a>
                </Link>
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                 
                  <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
                   
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        )
    }
 /* <Link href="/">
  {/* El Componente LINK que nos ofrece NEXT, funciona
como un rutiador para redireccionar a otros Componentes */
}
export default Navigation
import React from 'react';

const ProductNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mb-4">
            <span className="navbar-brand">Categorias:</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Todo
    <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Macetas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Descartable</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Regaleria</a>
                    </li>

                </ul>
                <form className="form-inline">
                    <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search" />
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default ProductNavbar;
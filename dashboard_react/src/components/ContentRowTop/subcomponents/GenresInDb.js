import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDB extends Component {

    constructor(){
        super();

        this.state = {
            genresList : []
        }
    }

    componentDidMount(){
        const url = "http://localhost:3030/api/categorias";
        fetch(url)
            .then((response) => response.json() )
            .then((data) => {
                this.setState({genresList: data.data});
        })
    }

    onMouseOverHandler = (e) => {
        e.target.parentElement.nextElementSibling.classList.add("bg-secondary");
    }
    
    /* mapper = (genero, index) => (
        <div className="col-lg-6 mb-4" key={genero.name + index}>
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {genero.name}
                </div>
            </div>
        </div>
    )  */

        render(){
        return(
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 
                            className="m-0 font-weight-bold text-gray-800 genres"
                            onMouseOver={this.onMouseOverHandler}
                        >
                            Categorias en la Base de Datos
                        </h5>
                    </div>
                    <div className="card-body genres">
                        <div className="row">

                            {
                                this.state.genresList.map((genero, index) => (
                                    <Genre name={ genero.nombre } productos={ genero.productos }   key={ genero.nombre + index } />
                                ))
                            }
    
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default GenresInDB;
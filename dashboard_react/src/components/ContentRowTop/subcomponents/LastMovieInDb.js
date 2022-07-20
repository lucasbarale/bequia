import React, {useEffect, useState} from "react";
import Button from "../../Buttons/CommonButton";
import Image from "../../../assets/images/mandalorian.jpg"

function LastMovieInDB() {
    const [ultimoProducto,setUltimoProducto]=useState({})

    useEffect ( ()=>{
        const urlApiProductos = "http://localhost:3030/api/productos/ultimo";
        fetch(urlApiProductos)
            .then((response) => response.json() )
            .then((data) => {
                //console.log(data.data)
                setUltimoProducto(data.data)
                //console.log(ultimoProducto)
                
        })

       

    }, []
        
    )
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                </div>
                <div className="card-body">
                    <h2 className="m-0 font-weight-bold text-gray-800">{ultimoProducto.nombre_producto}</h2>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={ {width: "20rem"} } src={"http://localhost:3030/images/Productos/"+ultimoProducto.imagen_producto} alt={ultimoProducto.nombre_producto} />
                    </div>
                    <p>{ultimoProducto.descripcion_producto}</p>
                    <Button
                        texto="Ver mas detalles"
                        href={"http://localhost:3030/productos/"+ultimoProducto.id}
                        color="primary"
                    />

                </div>
            </div>
        </div>
    )
}

export default LastMovieInDB;
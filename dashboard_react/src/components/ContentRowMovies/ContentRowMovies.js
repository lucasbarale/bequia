import React, {useEffect, useState} from "react";

import Card from "./subcomponents/Card";

function ContentRowMovies() {
    const [totalUsuarios,setTotalUsuarios]=useState()
    const [totalProductos,setTotalProductos]=useState()
    const [totalCategorias,setTotalCategorias]=useState()

    useEffect ( ()=>{
        const urlApiUsuarios = "http://localhost:3030/api/usuarios";
        fetch(urlApiUsuarios)
            .then((response) => response.json() )
            .then((data) => {
                
                setTotalUsuarios(data.meta.total)
                //console.log("usuarios"+totalUsuarios)
        })

        const urlApiProductos = "http://localhost:3030/api/productos";
        fetch(urlApiProductos)
            .then((response) => response.json() )
            .then((data) => {
                
                setTotalProductos(data.meta.total)
               // console.log("usuarios"+totalUsuarios)
        })

        const urlApiCategorias = "http://localhost:3030/api/categorias";
        fetch(urlApiCategorias)
            .then((response) => response.json() )
            .then((data) => {
                
                setTotalCategorias(data.meta.total)
               // console.log("usuarios"+totalUsuarios)
        })

    }, []
        
    )
    

    const infoCardList = [
        {
            title: "Total de Usuarios",
            value: totalUsuarios,
            icon: "fas fa-film fa-2x text-gray-300",
            color: "primary"
        },
        {
            title: "Total de Productos",
            value: totalProductos,
            icon: "fas fa-award fa-2x text-gray-300",
            color: "success"
        },
        {
            title: "Total de categorias",
            value: totalCategorias,
            icon: "fas fa-user fa-2x text-gray-300",
            color: "warning"
        }
    ]
    
    const mapper = function(cardData, index){
    return (
        <Card 
        key={cardData.title + index}
        title={cardData.title}
        value={cardData.value}
        icon={cardData.icon}
        color={cardData.color}
    />
    )
}

    return(
        <div className="row">
            { Array.isArray(infoCardList) && infoCardList.map(mapper) }
        </div>
    )
}

export default ContentRowMovies;
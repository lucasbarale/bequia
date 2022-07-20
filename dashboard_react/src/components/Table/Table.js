import React from "react";
import Row from "./subcomponents/Row";

function Table({ data = [], columns = [] }) {

const mapper = (movie, index) => (
    <Row 
    movie={ movie }
    columns={ columns }
    key={ movie.nombre_producto + index + "fede" }
    />
)

    return(
        <table className="table">
            <thead>
                <tr>
                    { columns.map((encabezado, index) => <th key={index + encabezado}>{encabezado}</th>) }
                </tr>
            </thead>

            <tbody>
                { data.map(mapper) }
            </tbody>
        </table>
    )
}

export default Table;
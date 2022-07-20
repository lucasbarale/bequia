import React from "react";
import ContentRowMovies from "../ContentRowMovies/ContentRowMovies";
import LastMovieInDB from "./subcomponents/LastMovieInDb";
import GenresInDB from "./subcomponents/GenresInDb";

function ContentRowTop() {
    return(
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard Bequia</h1>
    </div>

    <ContentRowMovies />

    <div className="row">
        <LastMovieInDB />

        <GenresInDB />
    </div>
</div>
)
}
export default ContentRowTop;
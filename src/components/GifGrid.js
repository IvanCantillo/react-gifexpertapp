import React from "react";
import { useFetchGif } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGif(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInUp"> {category} </h3>
            { loading && <p className="animate__animated animate__fadeInUp"> Loading... </p> }
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

export default GifGrid;

import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGif = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGif( category )
            .then( gifs => setState({
                data: gifs,
                loading: false
            }) );
    }, [ category ]);

    return state;
};

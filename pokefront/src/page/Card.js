import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({id,name}) =>{
    const [detail,setDetail]=useState([])

    useEffect(()=>{
        const fecthDetail = async () => {
            try{
                await axios.get(`http://localhost:8000/detail/${id}`).then((response) =>{
                    console.log(response.data.sprites.other.dream_world.front_default);
                    const result =
                    response.data.sprites.other.home.front_default;
                    setDetail(result);
                });
            } catch (error) {
                console.log("error", error);
            }
        }
        fecthDetail();
    },[])
//`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png`
    return(
        <img alt={name} src={detail} width={100} />
    )
}

export default Card;
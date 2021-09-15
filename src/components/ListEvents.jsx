import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import axios from 'axios';
import List from '../view/List';


const ListEvents = () => {
    const [evenements, setEvenements] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(()=>{
        axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=theatre')
        .then((res) => {
            setEvenements(res.data.records);
        })
    },[]);
    
    // consta,te permettant de déclancher une action
    // preventDefault empeche l'action par defaut de s'excecuter 
        const handleSubmit = (e)=>{
            e.preventDefault();
            result();
        }

    const setSearchValue = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }

    // axios est une bibliotheque js permettant de comminiquer avec l'api à l'aide d'une requete
    const result =()=>{
        axios.get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=10&search=${search}`)
        .then((res) => {
            setEvenements(res.data.records);
        })
    }
    
    return (
        <>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <h1>Liste des futurs évènements à Paris</h1>
            <div className="news-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input onInput={(e)=>setSearchValue(e)}
                    type="text" 
                    placeholder="ecrivez-ici" 
                    />
                    <input
                    type="submit"
                    value="rechercher"
                    />
                </form >
                    <br />
                    <ul>
                        {evenements
                            .map((list) =>(
                                <List key={list.record.id} id={list.record.id} fields={list.record.fields}/>
                        ))}
                    </ul>
                    
            </div>
        </>
    );
};

export default ListEvents;
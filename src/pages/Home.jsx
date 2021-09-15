import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import axios from 'axios';
import Event from '../view/Event';

const Home = () => {

// creation d'un hook (useState) qui permet de mettre à jour un état qu'on utilise
const [data, setData] = useState([]);


// creation d'un second hook permettant d'excuter une api ou autre après chaque affichage
useEffect(()=>{
    axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=10&pretty=false&timezone=UTC')
    .then((res) => {
        console.log(res.data.records);
        setData(res.data.records);
    })
},[]);

    return (
        <div>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <div className="home">
                <h1>Bienvenue sur notre site Paris Events</h1>
                <p>
                    Vous pouvez rechercher en direct les évènement Parisiens,
                    Il y a aussi à votre disposition les détails de ses évènements
                    et pour finir vous pouvez tout aussi mettre vos évènements préférés en favoris.
                </p>
                <hr/>
                <h1 className="left">Actualité</h1>
                <p>Les derniers évènements publiés:</p>
            </div>
            <ul>
                {/* on utilise la méthode map pour mapper les données d'un tableau */}
                {data
                    .map((record) =>(
                    <Event record={record.record.fields} key={record.record.id} id={record.record.id}/>
                    ))}
                
            </ul>
        </div>
    );
};

export default Home;

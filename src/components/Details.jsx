import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Logo from './Logo';
import Navigation from './Navigation';
import { useLocation } from "react-router";
import ReactHtmlParser from 'react-html-parser';
import LikeButton from '../view/LikeButton';


const Details = () => {
// useLocation est utilisé pour obtenir le paramètre de recherche ou la valeur de hachage du lien
    const id = useLocation().search.split("?")[1];
    const[list,setList] = useState(null);
    useEffect (() => {
        detailsRes();
    },[]) 
     const detailsRes = () => {
        axios.get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`)
         .then((res) =>  {
         setList(res.data.record)
         });
    }


    return (
        <div>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <div className="detail">
                <h1> Détails </h1>
                <p>Voici les détails d'un events</p>
            </div>
            <div className="details-card">
             {list &&
             <>
                <h1>{list.title}</h1>
                <div className="detail">
                    <figure>
                    <img src={list.fields.cover_url} alt={list.cover_alt} className="detail-img"/>
                    </figure>
                    
                </div>  
                
                <div className="detail-text">
                    {/* reactHtmlParser permet de cacher les balises mise par defaut dans certaine donnée de l'api */}
                <h3>{ReactHtmlParser(list.fields.lead_text)}</h3>
                {ReactHtmlParser(list.fields.description)}
                <div>
                <LikeButton id={id} />
                </div> 
                </div>
                
                <div className="detail_info">
                    <div>
                        
                        <h3>Dates:</h3>
                        <p>{ReactHtmlParser(list.fields.date_description)}</p>
                        
                    </div>
                    <div>
                        <h3>Prix :</h3>
                        <p>{list.fields.price_detail}</p>
                    </div>
                    <div>
                        <h3>S'y rendre : </h3>
                        <address>

                            <p>{list.fields.address_name}-{list.fields.contact_name}</p>
                            <p>{list.fields.address_street}-{list.fields.address_zipcode} {list.fields.address_city}                     
                            <p>{list.contact_phone}</p>
</p>
                            
                        </address>
                    </div>
                    <div>
                        <h3>En transport :</h3>
                        <p>{ReactHtmlParser(list.fields.transport)}</p>
                    </div>

                </div>
             </>
             }
            </div>
        </div>
    );
};

export default Details;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import LikeButton from './LikeButton';



const List = (props) => {
    const {fields , id} = props;

    useEffect(()=>{
        console.log(fields)
    },[])

    return (
        <div className="list">
            
                <Link to={{ pathname: "/details", search: `${id}` }}>
                    <h3 className="list-titre">{fields.title}</h3>
                </Link>

                <Link to={{ pathname: "/details", search: `${id}` }}>
                        <img src={fields.cover_url} alt="image" className="list-img" />
                </Link>  
                
                <p className="list-an">{fields.address_name}</p>
                <p className="list-ac">{fields.address_city}</p>
                <p className="list-as">{fields.address_street}</p>
                <p className="list-category">{fields.category}</p>
                <p className="list-pt">{fields.price_type}</p>
                <p className="list-dd">{ReactHtmlParser(fields.date_description)}</p>
                <div>
                <LikeButton id={id} />
                </div>  
            
        </div>
    );
};

export default List;
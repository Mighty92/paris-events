import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const Event = (props) => {
    const {record} = props;

    return (
            <div className="card">
                    <img src={record.cover_url} alt="image" className="event-img"/> 
                    <p className="event-title">{record.title}</p>
                    <p className="event-tag">{record.tag}</p>
                    <p className="event-category">{record.category}</p>
                    <p className="event-details">{record.price_detail}</p>
                    <p className="event-price_type">{record.data_start}</p>
                    <p className="event-address_name">{record.address_name}</p>
                    <p className="event-contact_phone">tel: {record.contact_phone}</p>
                    <p className="event-address_street">adresse: {ReactHtmlParser(record.address_street)}</p> 

            </div>
    );
};

export default Event;
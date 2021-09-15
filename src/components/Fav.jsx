import React, {useEffect, useState} from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import List from '../view/List';
import EventService from '../view/EventService';
import StorageService from '../services/StorageService';

const Fav = () => {
    const [myFav, setMyFav] = useState(null);

    let likedIds = StorageService.myLocalStorage();

    function fetchFavData() {
        return Promise.all(likedIds.map((id) => EventService.fetchId(id).then((response) => response)))
            .then((data) => {
                return data;
            });
    }

    useEffect(() => {
        const useFetchFavData = fetchFavData();
        useFetchFavData.then((data) => {
            setMyFav(data)
        })
    }, [])

    return (
        <div className="favoris">
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <h1>Évènements sauvegardés</h1>
            <main>
                <div>
                    {myFav && myFav.length !== 0 && myFav.map((list) => <List key={list.id} id={list.id} fields={list.fields} />)}
                </div>
            </main>
        </div>
    );
};

export default Fav;
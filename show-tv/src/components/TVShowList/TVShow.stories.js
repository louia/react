import React from 'react';
import TVShowList from './index';
// import './index.css'

export default {
    title: 'components/TVShowList',
    component: TVShowList,
}
var listSeries = [
    {original_name: "Rick and Morty", name: "Rick et Morty", popularity: 466.554,id:60625, poster_path: "/7niZl8SlCaYsZXijlawlFNT6RuZ.jpg"},
    {original_name: "His Dark Materials", name: "A la croisée des mondes",poster_path: "/xOjRNnQw5hqR1EULJ2iHkGwJVA4.jpg", id:2,popularity: 310.104,},
    {original_name: "Supernatural", name: "Supernatural",id:3, popularity: 290.232, poster_path: "/3iFm6Kz7iYoFaEcj4fLyZHAmTQA.jpg"}
];
export const default_value = () => <TVShowList listSeries={listSeries}></TVShowList>;
// export const poster_with_wrong_url = () => <TVShow url_poster="/7niZsdfsdfl8SlCaYsZXijlawlFNT6RuZ.jpg" id="01" titre="Rick & morty"></TVShow>;

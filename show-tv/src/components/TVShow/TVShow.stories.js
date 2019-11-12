import React from 'react';
import TVShow from './index';
// import './index.css'

export default {
    title: 'components/TVShow',
    component: TVShow,
}


export const default_value = () => <TVShow url_poster="/7niZl8SlCaYsZXijlawlFNT6RuZ.jpg" id="01" >{"Rick & morty"}</TVShow>;
export const poster_with_wrong_url = () => <TVShow url_poster="/7niZsdfsdfl8SlCaYsZXijlawlFNT6RuZ.jpg" id="01" >{"Rick & morty"}</TVShow>;

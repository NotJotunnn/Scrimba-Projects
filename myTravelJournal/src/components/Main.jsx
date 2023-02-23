import React from 'react';
import Header from './Header';
import Trip from './Trip';

export default function Main () {
    return (
        <main>
            <Header />
            <Trip 
                image= 'https://source.unsplash.com/WLxQvbMyfas'
                local= 'Japan'
                name= 'Mount Fuji'
                travelDay= '12 Jan, 2021'
                arrivalDay= '24 Jan, 2021'
                desc= 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
            />
            <hr />
            <Trip 
                image= 'https://source.unsplash.com/JmuyB_LibRo'
                local= 'Australia'
                name= 'Sydney Opera House'
                travelDay= '27 May, 2021'
                arrivalDay= '8 Jun, 2021'
                desc= "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
            />
            <hr />
            <Trip 
                image= 'https://source.unsplash.com/3PeSjpLVtLg'
                local= 'Norway'
                name= 'Geirangerfjord'
                travelDay= '01 Oct, 2021'
                arrivalDay= '18 Nov, 2021'
                desc= 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
            />
        </main>
    )
}
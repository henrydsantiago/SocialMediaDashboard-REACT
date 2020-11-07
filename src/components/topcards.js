import React from 'react';
import './topcards.css'
import Card from './card'

const cardListData = [
    {
        id: 1,
        username: '@Henrydsantiago',
        followers: '1987',
        todayFollowers: '12',
        icon: 'https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-facebook.svg',
        redSocial: 'facebook',

    },
    {
        id: 2,
        username: '@Henrydsantiago',
        followers: '1044',
        todayFollowers: '99',
        icon: 'https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-twitter.svg',
        redSocial: 'twitter',

    },
    {
        id: 3,
        username: '@Henrydsantiago',
        followers: '11k',
        todayFollowers: '1099',
        icon: 'https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-instagram.svg',
        redSocial: 'instagram',

    },
    {
        id: 4,
        username: '@Henrydsantiago',
        followers: '8239',
        todayFollowers: '144',
        icon: 'https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-youtube.svg',
        redSocial: 'youtube',
    }
]

function Topcards() {
    return(
        <section className="top-cards">
            <div className="wraper">
                <div className="grid">
                    {
                        cardListData.map((cardData)=> <Card key={cardData.id} {...cardData} /> )
                    }
                </div>
            </div>
        </section>
    )
}

export default Topcards;
import React from 'react';
import './overview.css'
import SmallCard from './smallCard.js'

const smallCardData = [
    {
        id: 1,
        title: "Page Views",
        number: '87',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-facebook.svg",
        porcentaje: '3',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },
    {
        id: 2,
        title: "Likes",
        number: '52',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-facebook.svg",
        porcentaje: '2',
        estado: "../images/icon-down.svg"
    },
    {
        id: 3,
        title: "Likes",
        number: '5462',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-instagram.svg",
        porcentaje: '2257',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },
    {
        id: 4,
        title: "Profile Views",
        number: '52k',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-instagram.svg",
        porcentaje: '1375',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },
    {
        id: 5,
        title: "Retweets",
        number: '117',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-twitter.svg",
        porcentaje: '303',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },
    {
        id: 6,
        title: "Likes",
        number: '507',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-twitter.svg",
        porcentaje: '553',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },
    {
        id: 7,
        title: "Likes",
        number: '107',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-youtube.svg",
        porcentaje: '19',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },
    {
        id: 8,
        title: "Total Views",
        number: '1407',
        imgRS: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-youtube.svg",
        porcentaje: '12',
        estado: "https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg"
    },

];

function Overview() {
    return (
        <section className="overview">
        <div className="wraper">
            <h2>Overview - Today</h2>
            <div className="grid-overview">
                {smallCardData.map( ( smData )=> <SmallCard key={ smData.id } {...smData} /> )}
            </div>
        </div>
    </section>
    )
}

export default Overview;
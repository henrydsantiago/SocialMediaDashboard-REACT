import React from 'react'
import './card.css'

function Card({username, followers, todayFollowers, icon, redSocial}) {
    const colorRedSocial = `card ${redSocial}`
    return (
        <article className={colorRedSocial}>
            <p className="card-title">
                <img src={icon} alt=""/>
                {username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today porcentaje-up">
                <img src="https://raw.githubusercontent.com/henrydsantiago/FrontendMentor_SocialMediaDashboard/889f238c2d5071f6c5da01a30779518eca97b138/images/icon-up.svg" alt=""/>
                {todayFollowers} Today
            </p>
        </article>
    )
}

export default Card;
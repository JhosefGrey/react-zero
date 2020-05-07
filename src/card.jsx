import React from 'react'
import PropTypes from 'prop-types'

const Card = ({title, image, price, profesor})  => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr sradius-tl">
            <img src={ image } alt={ title } />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-spxy-2">    
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Profesor: ${profesor}`}
            </div>
            <div className="s-main-center"> 
                <a className="button--ghost-alert button--tiny " href="www.google.com">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Card.defaultProps = {
    title: "No se encontró titulo",
    image: "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
    price: "--",
    profesor: ""
}

export default Card;
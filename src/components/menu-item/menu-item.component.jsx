import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, id}) => {
    return (
        <div className={`${size} menu-item`}>

            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='content'>
                <h2 className='title'>{title.toUpperCase()}</h2>
                <span className='subtitle'>ShopNOW</span>
            </div>
        </div>
    )
}

export default MenuItem

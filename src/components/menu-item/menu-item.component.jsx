import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={`${size} menu-item`}
            onClick={()=> history.push(`${match.url}${linkUrl}`)}
        >

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

export default withRouter(MenuItem)

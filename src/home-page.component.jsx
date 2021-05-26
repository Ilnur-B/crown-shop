import React from 'react';
import './home-page.styles.scss'

const HomePage = ()=> {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>HATS</h2>
                        <span className='subtitle'>ShopNOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>Jackets</h2>
                        <span className='subtitle'>ShopNOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>SNEACKERS</h2>
                        <span className='subtitle'>ShopNOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>WOMENS</h2>
                        <span className='subtitle'>ShopNOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>MENS</h2>
                        <span className='subtitle'>ShopNOW</span>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomePage

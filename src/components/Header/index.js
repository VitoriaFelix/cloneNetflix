import React from 'react';
import './Header.css';

export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://img.ibxk.com.br/2017/06/26/26120528094227.jpg?w=352&h=208&mode=crop&scale=both" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"></img>
                 </a>
            </div>
            </header>
    );
}

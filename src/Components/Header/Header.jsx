import React from 'react';
import logo from '../../logo.svg'

function Header(props) {
    return (
        <header className={'header'}>
            <div className={'header_logo'}>
                <img src={logo} alt="Логотип компании"/>
            </div>
            <div className={'header_nav'}>
                <a href="#">Что мы предлагаем</a>
                <a href="#">Компания</a>
                <a href="#">Контакты</a>
            </div>
        </header>
    );
}

export default Header;
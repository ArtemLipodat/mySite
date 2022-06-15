import React from 'react';
import Slider from "react-slick";

function Main(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className={'presentation'}>
                <h2>САЙТ - ЛИЦО <span>ВАШЕГО</span> БИЗНЕСА</h2>
                <ul>
                    <li>Разрабатываем сайты</li>
                    <li>Продвигаем проекты</li>
                    <li>Оформляем соц.сети</li>
                </ul>
                <button className={'third'}>ОБСУДИТЬ ПРОЕКТ</button>
            </section>
            <section className={'portfolio'}>
                <h2>НАШИ ПРОЕКТЫ :</h2>
                <Slider {...settings}>
                    <div className={'portfolio_item'}>
                        <div className={'portfolio_item_info'}>
                            <span>Сайт компании по перевозкам «НаАвтобусе18»</span>
                            <div>
                                <img src="./image/done.png" alt=""/>
                                <p>Покупка билета</p>
                            </div>
                            <div>
                                <img src="./image/done.png" alt=""/>
                                <p>Выбор маршрута</p>
                            </div>
                            <div>
                                <img src="./image/done.png" alt=""/>
                                <p>Калькулятор стоимости</p>
                            </div>
                        </div>
                        <div className={'portfolio_item_photo'}>
                            <img src="./image/001.png" alt=""/>
                        </div>
                    </div>
                    <div className={'portfolio_item'}>
                        <div className={'portfolio_item_info'}>
                            <span>Сайт компании по перевозкам «НаАвтобусе18»</span>
                            <div>
                                <img src="./image/done.png" alt=""/>
                                <p>Покупка билета</p>
                            </div>
                            <div>
                                <img src="./image/done.png" alt=""/>
                                <p>Выбор маршрута</p>
                            </div>
                            <div>
                                <img src="./image/done.png" alt=""/>
                                <p>Калькулятор стоимости</p>
                            </div>
                        </div>
                        <div className={'portfolio_item_photo'}>
                            <img src="./image/001.png" alt=""/>
                        </div>
                    </div>
                </Slider>
            </section>
            <section className={'services'}>
                <h2>СПЕКТР УСЛУГ</h2>
                <div className={'services_item'}>
                    <div className={'services_item_list'}>
                        <div className={"services_item_list_content hvr-reveal"}>
                            <div className={'services_item_list_content_hover'}>
                                aaaaaaaaaaaaaa
                            </div>
                            <span>ИНТЕРНЕТ-МАГАЗИН</span>
                            <ul>
                                <li>самый быстрый спопоб покупки</li>
                                <li>выход на глобальный рынок</li>
                                <li>высокая рентабельнось</li>
                            </ul>
                            <span>от 19990 &#8381;</span>
                        </div>
                    </div>
                    <div className={'services_item_list'}>
                        <div className={"services_item_list_content hvr-reveal"}>
                            <span>ИНТЕРНЕТ-МАГАЗИН</span>
                            <ul>
                                <li>самый быстрый спопоб покупки</li>
                                <li>выход на глобальный рынок</li>
                                <li>высокая рентабельнось</li>
                            </ul>
                            <span>от 19990 &#8381;</span>
                        </div>
                    </div>
                    <div className={'services_item_list'}>
                        <div className={"services_item_list_content hvr-reveal"}>
                            <span>ИНТЕРНЕТ-МАГАЗИН</span>
                            <ul>
                                <li>самый быстрый спопоб покупки</li>
                                <li>выход на глобальный рынок</li>
                                <li>высокая рентабельнось</li>
                            </ul>
                            <span>от 19990 &#8381;</span>
                        </div>
                    </div>
                    <div className={'services_item_list'}>
                        <div className={"services_item_list_content hvr-reveal"}>
                            <span>ИНТЕРНЕТ-МАГАЗИН</span>
                            <ul>
                                <li>самый быстрый спопоб покупки</li>
                                <li>выход на глобальный рынок</li>
                                <li>высокая рентабельнось</li>
                            </ul>
                            <span>от 19990 &#8381;</span>
                        </div>
                    </div>
                    <div className={'services_item_list'}>
                        <div className={"services_item_list_content hvr-reveal"}>
                            <span>ИНТЕРНЕТ-МАГАЗИН</span>
                            <ul>
                                <li>самый быстрый спопоб покупки</li>
                                <li>выход на глобальный рынок</li>
                                <li>высокая рентабельнось</li>
                            </ul>
                            <span>от 19990 &#8381;</span>
                        </div>
                    </div>
                    <div className={'services_item_list'}>
                        <div className={"services_item_list_content hvr-reveal"}>
                            <span>ИНТЕРНЕТ-МАГАЗИН</span>
                            <ul>
                                <li>самый быстрый спопоб покупки</li>
                                <li>выход на глобальный рынок</li>
                                <li>высокая рентабельнось</li>
                            </ul>
                            <span>от 19990 &#8381;</span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Main;
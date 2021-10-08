import React from 'react';
import "./home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />

                <div className="home__row">
                    <Product 
                        id="73429870"
                        title="Computers & Accessories" 
                        price={79.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Shop activity trackers and smartwatches" 
                        price={49.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                        rating={4}
                    
                    />
                </div>

                <div className="home__row">
                <Product 
                    id="49119094"
                    title="For your Fitness Needs" 
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
                    rating={4}
                />
                <Product 
                    id="00988094"
                    title="Shop Pet supplies" 
                    price={279.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
                    rating={5}
                />
                <Product 
                    id="49575756"
                    title="Shop Laptops & Tablets" 
                    price={359.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                    rating={5}
                />
                </div>

                <div className="home__row">
                <Product 
                    id="34422456"
                    title="Explore home bedding" 
                    price={579.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
                    rating={5}
                />
                </div>
            </div>
        </div>
    )
}

export default Home

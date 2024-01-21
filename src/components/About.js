import React from 'react'
import { Outlet } from 'react-router-dom'


export default function About() {

    return (
        <div>
            <h1 className='text-right banner-box' id=''>About Us</h1>
            <div>
                <div className="aboutContainer1">
                    <h1 className=''>The world’s destination for gaming</h1>
                    <p className="m-3">We’re on a mission to build the world’s best gaming platform for gamers.</p>
                    {/* <img src={require("../image/20945364.jpg")} alt="game banner" width={500} /> */}
                </div>
                <div className="aboutContainer2">
                    <h2>ABOUT THIS GAME WORLD</h2>
                    <div className="contents row">
                        <p className="aboutP col-lg-7">The battle is building! Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.</p>
                        <img src={require("../image/center5.png")} alt="game center" className='col-lg-4' />
                    </div>
                </div>

                <div className="aboutContainer3 ">
                    <h1 className='text-center mb-5'>Our Products</h1>
                    <div className="contents row">
                        <div className="cardBox">
                            <div className="items-center">
                                <img className='card-img-top' src={require("../image/card01.jpg")} alt="Trending Game" />
                                <div className="card-body flex items-center ">
                                    <h5 className="card-title text-center">Discover Our Games</h5>
                                </div>
                            </div>
                        </div>
                        <div className="cardBox">
                            <div className="  items-center ">
                                <img className='card-img-top' src={require("../image/card02.jpg")} alt="Trending Game" />
                                <div className="card-body flex items-center ">
                                    <h5 className="card-title text-center">Explore our Virtual Pass</h5>
                                </div>
                            </div>
                        </div>
                        <div className="cardBox">
                            <div className="items-center ">
                                <img className='card-img-top' src={require("../image/card03.jpg")} alt="Trending Game" />
                                <div className="card-body flex items-center ">
                                    <h5 className="card-title text-center">Learn about our Technologies</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div >
    )
}

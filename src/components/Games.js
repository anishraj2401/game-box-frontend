import React, { useContext, useState } from 'react'
import GameCard from './GameCard'
import LowBalance from './LowBalance'
import { walletContextObj } from '../context/wallet/walletContext'
import { Outlet } from 'react-router-dom'

export default function Games() {
    const [showAllCards, setShowAllCards] = useState(false)
    const { lowBalance } = useContext(walletContextObj);

    function toggleShowAllCards() {
        setShowAllCards(true);
    }

    const cardList = showAllCards ?
        [<>
            <GameCard image={require("../image/card01.jpg")} title={"SNAP"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card02.jpg")} title={"Clash Royale"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card03.jpg")} title={"Card Game"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card04.jpg")} title={"Heart Stone"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card05.jpg")} title={"Solitaire"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card06.jpg")} title={"ARCHADNIUM"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card07.jpg")} title={"Street FIghter Duel"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card08.jpg")} title={"Plant vs Zombies"} price={"Rs. 1999"} />
        </>] : [<>
            <GameCard image={require("../image/card01.jpg")} title={"SNAP"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card02.jpg")} title={"Clash Royale"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card03.jpg")} title={"Card Game"} price={"Rs. 1999"} />
            <GameCard image={require("../image/card04.jpg")} title={"Heart Stone"} price={"Rs. 1999"} />
        </>
        ]

    return (
        <div>
            <h1 className='banner-box' id=''>Games</h1>
            <div className="gameContainer1">
                <div className="headingContainer">
                    <h1 className='ml-4'>ALL GAMES</h1>
                    <a href="#" className="text-bold text-danger mr-4" onClick={toggleShowAllCards}>
                        <h6><b>SEE ALL</b></h6>
                    </a>
                </div>
                <div className="cardContainer1 border-bottom row">
                    {cardList}
                </div>
            </div>
            <div className="gameContainer2">
                <div className="trendingContainer">
                    <h1 className='ml-4'>TRENDING GAMES</h1>
                </div>
                <div className="cardContainer2 border-bottom row">
                    <GameCard image={require("../image/card02.jpg")} title={"Clash Royale"} price={"Rs. 1999"} />
                    <GameCard image={require("../image/card03.jpg")} title={"Card Game"} price={"Rs. 1999"} />
                    <GameCard image={require("../image/card04.jpg")} title={"Heart Stone"} price={"Rs. 1999"} />
                    <GameCard image={require("../image/card05.jpg")} title={"Solitaire"} price={"Rs. 1999"} />
                </div>
            </div>
            {lowBalance && <LowBalance />}
            <div className="gameContainer3">
                <div className="trendingContainer">
                    <h2 >HOW TO PLAY THIS GAME</h2>
                </div>
                <div className="cardContainer3 mb-3 row">
                    <div className="cardList1  mb-3 col-lg-3">
                        <div className="card-header bg-dark text-white">STEP 1</div>
                        <div className="card-body">
                            <h5 className="card-title">Register</h5>
                            <p className="card-text">If you don't already own Game Box, you can register it..</p>
                        </div>
                    </div>
                    <div className="cardList2  mb-3 col-lg-3">
                        <div className="card-header bg-dark text-white">STEP 2</div>
                        <div className="card-body">
                            <h5 className="card-title">Recharge your Wallet</h5>
                            <p className="card-text">If you have register yourself, do a top-up..</p>
                        </div>
                    </div>
                    <div className="cardList3  mb-3 col-lg-3">
                        <div className="card-header bg-dark text-white">STEP 3</div>
                        <div className="card-body">
                            <h5 className="card-title">Navigate to Discover</h5>
                            <p className="card-text">In Games Box, navigate to Discover by changing game-modes in the Lobby..</p>
                        </div>
                    </div>
                    <div className="cardList4 col-lg-2.5  mb-3">
                        <div className="card-header bg-dark text-white">STEP 4</div>
                        <div className="card-body">
                            <h5 className="card-title">Launch your Game</h5>
                            <p className="card-text"> Now you're ready to play!..</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div >
    )
}
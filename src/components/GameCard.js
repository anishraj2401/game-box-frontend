import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { walletContextObj } from '../context/wallet/walletContext';
import { userLoginContextObj } from '../context/user/userLoginContext';

function getAmount(amount) {
    return parseInt(amount.split(" ").at(-1))
}

export default function GameCard(props) {
    let navigate = useNavigate();
    const { wallet, setWallet, setLowBalance } = useContext(walletContextObj);
    let [, setCurrentUser, loginStatus, setLoginStatus, ,] = useContext(userLoginContextObj);
    function playGame() {
        if (wallet >= getAmount(props.price)) {
            setWallet(cur => cur - getAmount(props.price));
            navigate('/games/games01')
        } else {
            setLowBalance(true);
        }
    }
    return (
        <div className="cardBox mb-4 shadow">
            <div className="card-heading items-center mb-4 ">
                <img className='card-img-top' src={props.image} alt="Trending Game" />
                <span class="badge badge-primary overlay-badge">{props.price}</span>
                <p className="card-title m-3">Base Game</p>
                <div className=" m-3 d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-left">{props.title}</h5>
                    {loginStatus === false ?
                        <button className="btn btn-primary btn-sm" onClick={() => { }}>Login to Try</button> :
                        <button className="btn btn-primary btn-sm" onClick={playGame}>Play</button>}
                </div>
            </div>
        </div>
    );
}

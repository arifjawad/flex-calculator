import React, { useState, useContext } from 'react';
import { TotalPriceContext } from '../../pages/Home/Home';
import { CostContext } from '../../pages/Home/Home';
import "./AnswerCard.css";

const AnswerCard = (props) => {

    const { answerTitle, answerDesc, price, key } = props.answer;
    const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);
    const [showTotalCost, setShowTotalCost] = useContext(CostContext);

    return (
        <>


            <button className="card-btn answer-card" onClick={() => {
                setShowTotalCost(false);
                setTotalPrice(totalPrice + price);
            }}>
                <div className="card-container">
                    <p className="bold-16">{answerTitle}</p>
                    <p className="lit-16">{answerDesc}</p>
                </div>
            </button>


        </>
    );
};

export default AnswerCard;
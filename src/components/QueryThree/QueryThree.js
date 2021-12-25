import React, { useState, useContext } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';
import { CostContext } from '../../pages/Home/Home';
const QueryThree = (props) => {




    const handleAddCost = (product) => {
        // console.log('pd added',product);
        // const newCart =[...cart, product];
        // setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key);
        // addToDatabaseCart(product.key,sameProduct);
    }
    const [showTotalCost, setShowTotalCost] = useContext(CostContext);


    return (
        <>

            <div className="query-box">
                <p className="bold-20 text-center text-uppercase">Do you have ux design ready?</p>
                <div className="answer-card text-center">
                    <button className="btn-2" onClick={() => setShowTotalCost(false)}>Yes</button>
                    <button className="btn-2" onClick={() => setShowTotalCost(false)}>No</button>
                </div>

            </div>

            <div className="query-box">
                <p className="bold-20 text-center text-uppercase">How many webpages do you want for your public website?</p>
                <div className="answer-card text-center">

                </div>

            </div>

            <div className="query-box">
                <p className="bold-20 text-center text-uppercase">Any payment gateway integration?</p>
                <div className="answer-card text-center">
                    <button className="btn-2" onClick={() => setShowTotalCost(true)}>
                        Stripe</button>
                    <button className="btn-2" onClick={() => setShowTotalCost(true)}>Paypal</button>
                    <button className="btn-2" onClick={() => setShowTotalCost(true)}>Both</button>
                    <button className="btn-2" onClick={() => setShowTotalCost(true)}>None</button>
                </div>

            </div>

        </>
    );
};

export default QueryThree;
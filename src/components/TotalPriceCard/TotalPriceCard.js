import React from 'react';

const TotalPriceCard = (props) => {
    const price = props.totalPrice;
    console.log(price);
    return (
        <>
            <div className="est-cost answer-card text-center">
                <p className="color-blue">Est Cost</p>
                <p>${price}</p>
                <p className="text-center">This total cost will include 2 rounds of corrections at UI design stage and once the design<br /> is finalized, we will proceed to development Project will be divided into 2-3 milestones payments.</p>
            </div>
            <div className="bottom-btn"> <button className="btn-1 text-uppercase"> start your project now</button></div>

        </>
    );
};

export default TotalPriceCard;
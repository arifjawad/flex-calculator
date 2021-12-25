import React from 'react';
import TotalPriceCard from '../TotalPriceCard/TotalPriceCard';

const CostContainer = (props) => {
    const isShowTotalCost = props.showTotalCost;
    return (
        isShowTotalCost ? < TotalPriceCard totalPrice={props.totalPrice} /> :
            <>
                <div className="message">
                    <p className="lit-16 text-center text-uppercase">Please input all the fields to show estimated price</p>
                </div>

            </>
    );
};

export default CostContainer;
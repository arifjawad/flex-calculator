import React, { useState, createContext } from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import QueryOne from '../../components/QueryOne/QueryOne';
import QueryTwo from '../../components/QueryTwo/QueryTwo';
import QueryThree from '../../components/QueryThree/QueryThree';
import CostContainer from '../../components/CostContainer/CostContainer';

export const CostContext = createContext();
export const TotalPriceContext = createContext();

const Home = () => {
    const [showTotalCost, setShowTotalCost] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isPage, setIsPage] = useState(1);
    // console.log(totalPrice);
    console.log(totalPrice);
    return (
        <CostContext.Provider value={[showTotalCost, setShowTotalCost]}>
            <TotalPriceContext.Provider value={[totalPrice, setTotalPrice]}>

                <>

                    <main className="main-section">
                        <div className="main-title">
                            <h1 className="color-white bold-32 text-center text-uppercase">Calculate your price</h1>
                        </div>

                        <section className="container">
                            <Header></Header>
                        </section>

                        <section className="container">
                            <div className="form-body">
                                <div className="form-container">
                                    {isPage === 1 ? <QueryOne ></QueryOne> :
                                        isPage === 2 ? <QueryTwo ></QueryTwo> :
                                            <QueryThree></QueryThree>}
                                    <div className="text-center">
                                        <button className="btn-2" onClick={() => {
                                            setIsPage(isPage + 1);
                                        }}>Next</button>
                                    </div>
                                </div>

                                <div className="price-container">
                                    <CostContainer showTotalCost={showTotalCost} totalPrice={totalPrice}></CostContainer>
                                </div>
                            </div>
                        </section>
                    </main>

                </>


            </TotalPriceContext.Provider>
        </CostContext.Provider>
    );
};

export default Home;
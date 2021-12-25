import React, { useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';
import QueryTwo from '../QueryTwo/QueryTwo';

const QueryOne = () => {
    const services = [

        {
            "id": 1,
            "answerTitle": "Python",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 1000,
        },
        {
            "id": 2,
            "answerTitle": "Wordpress",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 2000,
        }, {
            "id": 3,
            "answerTitle": "Php Laravel",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 3000,
        }, {
            "id": 4,
            "answerTitle": "Php (From Scratch)",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 4000,
        },
        {
            "id": 5,
            "answerTitle": "Kajabi",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 5000,
        }

    ];

    const [answers, setAnswers] = useState(services);




    return (
        <>

            <div className="query-box">
                <p className="bold-20 text-center text-uppercase">I want my site to be built on (choose a framework)</p>
                <ul>
                    {
                        answers.map(ans => <AnswerCard
                            key={ans.key}
                            answer={ans}></AnswerCard>)
                    }
                </ul>


            </div>


        </>
    );
};

export default QueryOne;
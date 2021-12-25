import React, { useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';

const QueryTwo = () => {
    const services = [

        {
            "id": 1,
            "answerTitle": "An ecommerce site",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 1000,
        },
        {
            "id": 2,
            "answerTitle": "An online course platform",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 2000,
        }, {
            "id": 3,
            "answerTitle": "A blog site",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 3000,
        }, {
            "id": 4,
            "answerTitle": "My company website with pice calculators",
            "answerDesc": "Lorem ipsum dolor sit amet consectetur adipisic elit. Laboriosam, ut?",
            "price": 4000,
        }

    ];

    const [answers, setAnswers] = useState(services);




    return (
        <>

            <div className="query-box">
                <p className="bold-20 text-center text-uppercase">I want build</p>
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

export default QueryTwo;
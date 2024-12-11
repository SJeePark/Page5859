import React, { useState } from 'react';

const Sum = () => {
    const answer = ["서연", "가은"];
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const checkAnswer = () => {
        const userAnswer = input.split(' ').sort();
        const correctAnswer = [...answer].sort(); 
        const correct = userAnswer.length === correctAnswer.length && userAnswer.every((name, index) => name === correctAnswer[index]);
        setIsCorrect(correct); 
        setResult(correct ? '정답입니다!' : '다시 시도해보세요!');
    };

    return (
        <div>
            <div>
                <input
                    placeholder="띄어쓰기로 이름 입력"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button style={{ marginLeft: "10px" }} onClick={checkAnswer}>
                    정답 확인
                </button>
                {result && (
                    <p
                        style={{
                            color: isCorrect ? 'green' : 'red',
                            fontStyle: "italic"
                        }}
                    >
                        {result}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Sum;

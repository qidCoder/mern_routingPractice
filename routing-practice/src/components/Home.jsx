import React from 'react';

const Home = (props) => {
    return (
        <>
            <h1>Welcome!</h1>

            <p>You passed in {props.word}</p>

            {/* returns boolean if num is a number or not */}
            { isNaN(props.num) ?

                <h5>You did NOT pass in a valid number</h5>
                : <h5>You passed in the number {props.num}</h5>
            }

            <h6 style={{ backgroundColor: props.color2, color: props.color1 }}>You passed in {props.word}, and your first color is: {props.color1} and your second color is: {props.color2}</h6>
        </>
    )
}

export default Home;
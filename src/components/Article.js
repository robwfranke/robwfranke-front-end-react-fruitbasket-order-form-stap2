import React from 'react';


function Article({articleName}){



    const [count, setCount] = React.useState(0);
    console.log("articleName "+ articleName+ "  "+ count)


    return(
        <>

            <fieldset className="fieldset">

                <label>{articleName} </label>

                <button
                    type="button"
                    onClick={() => setCount(count === 0 ? count : count - 1)}
                >
                    -
                </button>

            {count}

                <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>





            </fieldset>
        </>
    )
}


export default Article;

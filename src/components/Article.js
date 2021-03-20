import React from 'react';

import Test from "./Test";

function Article({articleName}){








    const [count, setCount] = React.useState(0);
    // console.log((articleName))
    // console.log(count)

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

                <input name="count" value={count} ref={register}/>



            </fieldset>
        </>
    )
}


export default Article;

import React from 'react';

function Test(){


    const [countAardbeien, setCountAardbeien] = React.useState(0);



    return(
        <>




            <fieldset className="fieldset">

                <label>Aardbeien </label>

                <button
                    type="button"
                    onClick={() => setCountAardbeien(countAardbeien === 0 ? countAardbeien : countAardbeien - 1)}
                >
                    -
                </button>

                {countAardbeien}

                <button
                    type="button"
                    onClick={() => setCountAardbeien(countAardbeien + 1)}
                >
                    +
                </button>
            </fieldset>
        </>








    )







}


export default Test;

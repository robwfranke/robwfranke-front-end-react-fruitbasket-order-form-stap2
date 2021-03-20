import React from 'react';

function Stap1(){


    const [countAardbeien, setCountAardbeien] = React.useState(0);



    return(
<>

    <h1>Fruitmand bezorgservice</h1>


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


export default Stap1;

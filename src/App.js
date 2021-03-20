import './App.css';
import React from 'react';
import {useForm} from "react-hook-form"

import Stap1 from "./components/Stap1";


function onSubmit(data){
    console.log(data)

}


function App() {


    const {register, handleSubmit, errors} = useForm({


        // mode: "onChange"
    });

    const [checkedTerms, toggleCheckedTerms] = React.useState(false);



  return (
    <>
      <Stap1>
      </Stap1>


        <form onSubmit={handleSubmit(onSubmit)}>




            <label htmlFor="terms-and-conditions">
                <input
                    ref={register}
                    type="checkbox"
                    name="terms-and-conditions"
                    id="terms-and-conditions"
                    checked={checkedTerms}
                    onChange={() => toggleCheckedTerms(!checkedTerms)}
                />

                Ik ga akkoord met de algemene voorwaarden
            </label>
            <p></p>

            <button type="submit" id="submit" disabled={!checkedTerms}>
                verzenden
            </button>


        </form>

























    </>
  );
}

export default App;

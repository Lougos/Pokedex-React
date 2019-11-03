import React from 'react';

const Form = ({ handleSubmit, value }) =>  (

        <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Filtrer"></label>
            <p className="row justify-content-center">Nom du Pokemon</p>
            <input 
             key="filter"
             pokemon="text"
             url="filter"
             />
          <input type="submit" value="Filtrer"/>
        </form>
        <p>{value}</p>
      </>
);

export default Form;
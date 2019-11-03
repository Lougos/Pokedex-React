import React from 'react';

const Form = ({ handleSubmit, value, search }) =>  (

        <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Filtrer"></label>
            <p className="row justify-content-center">Nom du Pokemon</p>
            <input 
             key="filter"
             type="text"
             name="filter"
             />
          <input type="submit" value="Filtrer"/>
          <a href={'/?search='+ value}>Filtrer </a>
        </form>
      </>
);

export default Form;
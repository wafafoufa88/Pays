
import React from 'react'

    
const FilterCountry = ({onSelect}) => {
    
    const selectHandler =e=>{
    const regionName = e.target.value
    onSelect(regionName)
}
        return(
             <select onChange={selectHandler}>
            <option className='option'>Filtrer par région </option>
            <option className='option' value="Afrique">Afrique</option>
            <option className='option' value="America">Amérique</option>
            <option className='option' value="Asia">Asie</option>
            <option className='option' value="Europe">Europe</option>
            <option className='option' value="Oceania">Océanie</option>

        </select>
        );
    };

    export default FilterCountry;
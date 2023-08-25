import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiURL } from '../Util/Api';
import { Link } from 'react-router-dom';
const PaysInfo = () =>{

    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const {countryName} = useParams()

    
    useEffect(()=>{
        const getCountryByName = async()=>{
            try{
            const res =await fetch(`${ApiURL}/name/${countryName}`) 
            
            if(!res.ok) throw new Error('N"a pas pu trouver!')
    
            const data = await res.json()
            setCountry(data)
            setIsLoading(false)
            }catch(error){
                setIsLoading(false)
                setError(error.message)
            }
        };
        getCountryByName()
    },[countryName]);
    return (
    <div className='country_info_wrapper'>
        <button>
            <Link to="/"> Back </Link>
        </button>
        {
            isLoading && !error && <h4>Loading.....</h4>
        }
        {
            error && !isLoading && {error}
        }
            {country?.map((country, index) => (
                <div className='country_info_container' key={index}>
                <div className='country_info-img'>
                <img src={country.flags.png} alt="" />
                </div>
                <div className='country_info'>
                    <h3>{country.name.common}</h3>
                <div className='country_info-left'>
                    <h5>Population : <span>{new Intl.NumberFormat().format(country.population)}</span></h5>
                    <h5>Region : <span>{country.region}</span></h5>
                    <h5>Sub Region : <span>{country.subregion}</span></h5>
                    <h5>Capitale : <span>{country.capitale}</span></h5>
                    </div>
                </div>
            </div>
            ))
    
        }
       
    </div>
    
)};
export default PaysInfo;
import React from 'react'
import eye from '../images/icon-view.svg'
import ethereum from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'


const CardImage = () => {
    return(
        <header className='nft-artwork'>
            
            <div className='filter'>
                <img src={eye} className='eye-icon'/>
            </div>
            
        </header>
    )
}
const CardContent = ({ collection, id, description, price, duration }) => {

    
    return(
        <main className='card-content'>
            <header className='title-container'>
                <h1  className='title'>
                    {collection}&nbsp;{id}
                </h1>
            </header>
            <main className='description-container'>
                <p className='description'>{description}</p>
            </main>
            <footer className='card-footer'>
                <div className='price-container'>
                    <img src={ethereum} className='eth-icon' height={18} width={11}/>
                    <p className='price'>{price}</p>
                </div>
                <div className='duration-container'>
                    <img src={clock} className='clock-icon'/>
                    <p className='duration'>{duration}&nbsp;left</p>
                </div>
                
            </footer>
            
            
        </main>
    )
}
const CardFooter = ({ profilePicture, creator}) => {
    console.log(profilePicture);
    return(
        <footer className='creator-container'>
            <div className='profile-container'>
               <img src={profilePicture} alt="profile-picture" className='profile' /> 
            </div>
            

            <p className='creator'>Creation of <span className='name'>{creator}</span></p>
        </footer>
    )
}

const Card = ({ url, collection, id, description, price, duration, creator, profilePicture }) => {
  return (
    <div className='card'>
        <CardImage />
        <CardContent 
            collection={collection}
            id={id}
            description={description}
            price={price}
            duration={duration}
        />
        <hr className='border' />
        <CardFooter 
            creator={creator}
            profilePicture={profilePicture} 
        />
    </div>
  )
}

export default Card
import TourItem from '../tourItem/TourItem'
import './featured.scss'
import { useSelector } from 'react-redux'

const Featured = () => {
    const tours = useSelector((state) => state.tours.tours)
    const featuredTours = tours.filter(item => item.featured === true)

    const showFeatured = () => {
        return featuredTours.map((item) => {
            return (
                <TourItem 
                    img={item.img} 
                    name={item.name} 
                    descr={item.descr} 
                    price={item.price} 
                    time={item.time} 
                    grade={item.grade} 
                    reviews={item.reviews} 
                    advantage1={item.advantage1} 
                    id={item.id}
                    isLiked={item.isLiked}
                    key={item.id}
                />
            )
        })
    }


    return (
        <div className="featured">
            <div className="featured-header">
                <h2>Kilimanjaro & Safari adventure tour packages in Tanzania.</h2>
                <p>Timber Wolf Adventure is a Tanzanian based Tour Operator located in Arusha. We specialize in both Treks and Safari to all Tanzania destinations and we offer you the unique opportunity to climb Mt. Kilimanjaro and to explore the African plains with an experienced native team that offers top quality large tour operator service and safety at local tour operator prices.</p>
            </div>
            <div className="subheader">
                <h3>Featured Tours</h3>
                <p className="subheader__descr">Here are our Tanzania safari tours presented by popularity and demand Whether you’re still snooping around for information or your heart’s set out for the Great Migration Safari or feel like conquering Mount Kilimanjaro, we’ve narrowed them into categories to help you choose!</p>
            </div>
            <div className="tourItems">
                {showFeatured()}
            </div>
        </div>
    )
}

export default Featured
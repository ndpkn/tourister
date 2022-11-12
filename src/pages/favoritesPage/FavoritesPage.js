import { useSelector } from 'react-redux'
import TourItem from '../../components/tourItem/TourItem'

const FavoritesPage = () => {    
    const tours = useSelector((state) => state.tours.tours)
    const favoriteTours = tours.filter(item => item.isLiked === true)

    const showFavorits = () => {
        return favoriteTours.map((item) => {
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
        <main>
            <div className="subheader">
                <h3>Favorite Tours</h3>
                <p className="subheader__descr">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
            </div>
            <div className="tourItems">
                {showFavorits()}                
            </div>
        </main>
    )
}

export default FavoritesPage
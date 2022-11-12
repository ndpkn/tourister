import { useDispatch ,useSelector } from 'react-redux'
import { filteringTours } from '../tours/toursSlice'

import TourItem from '../tourItem/TourItem'
import './sortItems.scss'
import { useEffect, useState } from 'react'

const SortItems = () => {
    const dispatch = useDispatch()
    const tours = useSelector((state) => state.tours.tours)
    const active = useSelector((state) => state.sort.activeFilter)
    const [filterTours, setFilterTours] = useState(tours)
    useEffect(() => {
        switch (active) {
            case 'discount':
                setFilterTours(tours.filter((item) => item.advantages.discount === true))
                dispatch(filteringTours(filterTours))
                
                break;
            case 'cancelation':
                setFilterTours(tours.filter((item) => item.advantages.cancelation === true));
                dispatch(filteringTours(filterTours))
                
                break;
            case 'specials':
                setFilterTours(tours.filter((item) => item.advantages.specials === true));
                dispatch(filteringTours(filterTours))
                
                break;
            case 'fewSeats':
                setFilterTours(tours.filter((item) => item.advantages.fewSeats === true));
                dispatch(filteringTours(filterTours))
                
                break;
            case 'privat':
                setFilterTours(tours.filter((item) => item.advantages.privat === true));
                dispatch(filteringTours(filterTours))
                
                break;
            case 'new':
                setFilterTours(tours.filter((item) => item.advantages.new === true));
                dispatch(filteringTours(filterTours))
                
                break;
            case 'all':
                setFilterTours(tours);
                dispatch(filteringTours(filterTours))
                
                break;
            default: 
                setFilterTours(tours)
                // dispatch(filteringTours(filterTours))
                
        }
        // eslint-disable-next-line
    },[active, tours])

    return (
        <div className="sortItems">
            {filterTours.map((item) => {
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
                        isLiked={item.isLiked}
                        id={item.id}
                        key={item.id}
                    />
                )
            })
            }
        </div>
    )
}

export default SortItems
import './sortButtons.scss'

import { useDispatch } from 'react-redux'
import { filtersChanged } from './sortSlice'

import chopper from '../../images/sortIcons/Chopper.png'
import deals from '../../images/sortIcons/Deals.png'
import icon from '../../images/sortIcons/Icon.png'
import special from '../../images/sortIcons/Special.png'
import star from '../../images/sortIcons/Star Plus.png'
import timer from '../../images/sortIcons/Timer.png'
import { useState } from 'react'

const initialArray = [
    {icon: `${deals}`, label: "Discounted Deals", key: "discount", adv: "discount"},
    {icon: `${icon}`, label: "Free Cancellation", key: "cancel", adv: "cancelation"},
    {icon: `${special}`, label: "Entrada Specials", key: "specials", adv: "specials"},
    {icon: `${timer}`, label: "Few Seats Left", key: "fewSeats", adv: "fewSeats"},
    {icon: `${chopper}`, label: "Private Tours", key: "privat", adv: "privat"},
    {icon: `${star}`, label: "New on Entrada", key: "new", adv: "new"}
]

const SortButtons = () => {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    const [sortBtnsArr, setSortBtnsArr] = useState(initialArray)
    const [activeKey, setActiveKey] = useState()

    const getKey = (key) => {
        setActiveKey(activeKey === key ? 'all' : key)
        dispatch(filtersChanged(activeKey === key ? 'all' : key))
    }

    return (
        <div className="sortBtns">
            {sortBtnsArr.map((item) => {
                return (
                    <SortButton 
                        icon={item.icon} 
                        label={item.label} 
                        key={item.key} 
                        adv={item.adv}
                        activeClass={item.key === activeKey ? 'sortBtns-item active' : 'sortBtns-item'}
                        getKey={() => getKey(item.key)}
                        />
                )
            })}
        </div>
    )
}

const SortButton = (props) => {
    return (
        <div className={props.activeClass} onClick={props.getKey}>
            <button><img src={props.icon} alt="" />{props.label}</button>
        </div>
    )
}

export default SortButtons
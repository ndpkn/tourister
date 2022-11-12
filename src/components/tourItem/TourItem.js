import './tourItem.scss'
import duration from '../../images/Duration.png'
import checkmark from '../../images/Checkmark.png'
import unliked from '../../images/Icon/Vector.png'
import liked from '../../images/Icon/heart.png'
import star from '../../images/Icon/Star.png';
import { useDispatch } from 'react-redux'
import { favorite } from '../tours/toursSlice'


const TourItem = (props) => {
    const dispatch = useDispatch()

    const liking = (id) => {
        dispatch(favorite(id))
        console.log(id);
    }
    const time = `${props.time} ${props.time > 1 ? 'days' : 'day'}`

    return (
        <div className="tourItem">
            <div className="tourItem-img">
                <img src={props.img} alt="" />
            </div>
            <div className="tourItem-name">
                <h4>{props.name}</h4>
            </div>
            <div className="tourItem-descr">
                <p>{props.descr}</p>
            </div>
            <div className="tourItem-price">
                <p className="tourItem-price__text">from</p>
                <p className="tourItem-price__num">${props.price}</p>
                <p className="tourItem-price__text">*Price varies</p>
            </div>
            <div className="tourItem-details">
                <div className="tourItem-detail">
                    <div className="tourItem-detail__icon">
                        <img src={duration} alt="" />
                    </div>
                    <div className="tourItem-detail__text">
                        <p>{time}</p>
                    </div>
                </div>
                <div className="tourItem-detail">
                    <div className="tourItem-detail__icon">
                        {props.advantage1 != null ? <img src={checkmark} alt="" /> : null}
                    </div>
                    <div className="tourItem-detail__text">
                        <p>{props.advantage1}</p>
                    </div>
                    <div className="tourItem-detail__icon">
                        {props.advantage2 != null ? <img src={checkmark} alt="" /> : null}
                    </div>
                    <div className="tourItem-detail__text">
                        <p>{props.advantage2}</p>
                    </div>
                </div>
                
            </div>
            {/* absolulte  elements */}

            <div onClick={() => liking(props.id)} className= {props.isLiked ? 'tourItem-like liked' : 'tourItem-like'}>
                <button >{props.isLiked ? <img src={liked} alt="" /> : <img src={unliked} alt="" />}</button>
            </div>
            <div className="tourItem-review">
                <div className="tourItem-review__stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className="tourItem-review__grade">
                    <p>{props.grade} ({props.reviews})</p>
                </div>
            </div>

            <div className="tourItem-sale">{props.sale}</div>
        </div>
    )
}

export default TourItem
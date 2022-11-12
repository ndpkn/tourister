import './destinations.scss'
import destination1 from '../../images/destination1.png'
import destination2 from '../../images/destination2.png'
import destination3 from '../../images/destination3.png'
import destination4 from '../../images/destination4.png'
import destination5 from '../../images/destination5.png'
import destination6 from '../../images/destination6.png'




const Destinations = () => {
    return (
        <div className="destinations">
                <div className="subheader">
                    <h3>Top Destinations</h3>
                    <p className="subheader__descr">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
                </div>
            <div className="destinations-grid">
                <GridItem itemNum="1" grade="4.7" name="Vietnam" descr="Waterfall" img={destination1}/>
                <GridItem itemNum="2" grade="4.5" name="Old Rain" descr="Waterfall" img={destination2}/>
                <GridItem itemNum="3" grade="4.2" name="Greece" descr="Waterfall" img={destination3}/>
                <GridItem itemNum="4" grade="4.5" name="London" descr="Waterfall" img={destination4}/>
                <GridItem itemNum="5" grade="4.6" name="Amsterdam" descr="Waterfall" img={destination5}/>
                <GridItem itemNum="6" grade="4.3" name="Paris" descr="Waterfall" img={destination6}/>

            </div>
        </div>
    )
}

const GridItem = (props) => {
    return (
        <figure className={`destinations-grid__item item-${props.itemNum}`}>
            <div className="destinations-grid__grade">
                <p>{props.grade}</p>
            </div>
            <div className="destinations-grid__name">
                <p>{props.name}</p>
            </div>
            <div className="destinations-grid__descr">
                <p>{props.descr}</p>
            </div>
            <img className='gallery__img' src={props.img} alt="" />
        </figure>
    )
}

export default Destinations
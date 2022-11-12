import './sortFilter.scss'
import { useState } from 'react';
import ReactSlider from 'react-slider'
import DatePicker from "react-widgets/DatePicker";
import stars1 from "../../images/Stars1.png"
import stars2 from "../../images/Stars2.png"
import stars3 from "../../images/Stars3.png"
import stars4 from "../../images/Stars4.png"
import stars5 from "../../images/Stars5.png"


const SortFilter = () => {
    const [minimal, setMin] = useState(500)
    const [maximum, setMax] = useState(10000)
    const [date, setDate] = useState(null)
    
    return (
        <form className="sortFilter">
            <fieldset className="sortFilter-item">
                <h4>When are you traveling?</h4>
                <DatePicker placeholder="Select start date" value={date} onChange={date => setDate(date)} />
            </fieldset>

            <fieldset className="sortFilter-item">
                <h4>Popular Tags</h4>
                <div className="sortFilter-checkbox">
                    <Checkbox name="Child Friendly" />
                    <Checkbox name="Away from the chaos"/>
                    <Checkbox name="Taking extra precautions"/>
                    <Checkbox name="Epic Challenges"/>
                    <Checkbox name="Virtual Experiences"/>
                </div>
            </fieldset> 

            <fieldset className="sortFilter-item">
                <h4>Price Range</h4>
                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    defaultValue={[500, 10000]}
                    min={500}
                    max={10000}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    pearling={false}
                    step={100}
                    minDistance={100}
                    value={[minimal, maximum]}
                    onChange={([minimal,maximum]) => {
                        setMin(minimal)
                        setMax(maximum)
                    }}
                />
                <div className="range-values">
                    <input type="number" value={minimal} onChange={(e) => setMin(e.target.value)} max={9900} min={500} />
                    <span>-</span>
                    <input type="number" value={maximum} onChange={(e) => setMax(e.target.value)}  max={10000} min={600}/>
                </div>
            </fieldset>

            <fieldset className="sortFilter-item">
                <h4>Duration</h4>
                <div className="sortFilter-checkbox">
                    <Checkbox name="Upto 1 Hour"/>
                    <Checkbox name="1 to 4 Hours"/>
                    <Checkbox name="4 Hours to 1 Day"/>
                    <Checkbox name="1 to 3 Days"/>
                    <Checkbox name="3 Days or More"/>
                </div>
            </fieldset> 

            <fieldset className="sortFilter-item">
                <h4>Tour Rating</h4>
                <div className="sortFilter-checkbox">
                    <div className="sortFilter-checkbox__item">
                        <input className="custom-checkbox" type="checkbox" name="star1" id="star1" />
                        <label htmlFor="star1"><img src={stars1} alt="" /></label>
                    </div>
                    <div className="sortFilter-checkbox__item">
                        <input className="custom-checkbox" type="checkbox" name="star2" id="star2" />
                        <label htmlFor="star2"><img src={stars2} alt="" /></label>
                    </div>
                    <div className="sortFilter-checkbox__item">
                        <input className="custom-checkbox" type="checkbox" name="star3" id="star3" />
                        <label htmlFor="star3"><img src={stars3} alt=""/></label>
                    </div>
                    <div className="sortFilter-checkbox__item">
                        <input className="custom-checkbox" type="checkbox" name="star4" id="star4" />
                        <label htmlFor="star4"><img src={stars4} alt="" /></label>
                    </div>
                    <div className="sortFilter-checkbox__item">
                        <input className="custom-checkbox" type="checkbox" name="star5" id="star5" />
                        <label htmlFor="star5"><img src={stars5} alt="" /></label>
                    </div>
                </div>
            </fieldset>

            <fieldset className="sortFilter-item">
                <h4>Age Group</h4>
                <div className="sortFilter-checkbox">
                    <Checkbox name="1 & Up"/>
                    <Checkbox name="3 & Up"/>
                    <Checkbox name="7 & Up"/>
                    <Checkbox name="13 & Up"/>
                    <Checkbox name="18 & Up"/>
                </div>
            </fieldset>
            
            <fieldset className="sortFilter-item">
                <h4>Specials</h4>
                <div className="sortFilter-checkbox">
                    <Checkbox name="Discounted deals"/>
                    <Checkbox name="Free Cancellations"/>
                    <Checkbox name="Private Groups"/>
                    <Checkbox name="New on Entrada"/>
                    <Checkbox name="Entrada Specials"/>
                </div>
            </fieldset>
        </form>
    )
}

const Checkbox = (props) => {
    return (
        <div className="sortFilter-checkbox__item">
            <input className="custom-checkbox" type="checkbox" name={props.name} id={props.name} onChange={(e) => e.target.value} value={props.name}/>
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default SortFilter


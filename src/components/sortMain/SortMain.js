import SortFilter from '../sortFilter /SortFilter'
import SortItems from '../sortItems/SortItems'
import './sortMain.scss'

const SortMain = (props) => {
    return (
        <div className="sortMain">
            <SortFilter/>
            <SortItems tours={props.tours}/>
        </div>
    )
}

export default SortMain
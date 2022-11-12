import SortButtons from "../../components/sortButtons/SortButtons"
import SortBy from "../../components/sortBy/SortBy"
import SortMain from "../../components/sortMain/SortMain"

const SearchPage = (props) => {
    return (
        <div className="main">
            <SortBy/>
            <SortButtons/>
            <SortMain tours={props.tours}/>
        </div>
    )
}

export default SearchPage

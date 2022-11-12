import { DropdownList } from 'react-widgets'
import './sortBy.scss'

const SortBy = () => {
    return (
        <div className="sortBy">
            <div className='sortBy-left'>
                <p>Showing 1 - 10 of 2037 results for “cultural”</p>
            </div>
            <div className='sortBy-right'> 
                <p>Sort by:</p>
                <DropdownList
                    defaultValue="Most Popular"
                    data={["Most Popular", "Low Price", "High price"]}
                />
                {/* <select name="sorted" id="sortedBy" className="sortBy-select">
                    <option value="popular">Most Popular</option>
                    <option value="low">Low Price</option>
                    <option value="high">High price</option>
                </select> */}
            </div>
        </div>
    )
}

export default SortBy
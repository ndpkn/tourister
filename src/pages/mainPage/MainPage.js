import Banner from '../../components/banner/Banner';
import Destinations from '../../components/destinations/Destinations';
import Featured from '../../components/featured/Featured';
import Guides from '../../components/guides/Guides';
import CTA from '../../components/cta/CTA';
import Subscribe from '../../components/subscribe/Subscribe';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Question from '../../components/question/Question';

const MainPage = (props) => {
    
    // console.log(tours);
    
    return (
        <main>
            <Banner/>
            <Featured/>
            <Destinations/>
            <Guides/>
            <CTA/>
            <Subscribe/>
            <Question/>
        </main>
    )
}

export default MainPage
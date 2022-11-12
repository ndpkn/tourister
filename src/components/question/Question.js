import './question.scss'
import headphones from '../../images/headphones.png'
import question from '../../images/question.png'
import questionDots from '../../images/Icon/questionDots.png'


const Question = () => {
    return (
        <div className="question">
            <div className="question-header">
                <h2>Still have a question?</h2>
            </div>
            <div className="question-subheader">
                <p>The Brilliant reasons Entrada be your one-stop-shop!</p>
            </div>
            <div className="question-blocks">
                <img className='questionDots' src={questionDots} alt="" />

                <div className="question-left question-block">
                    <div className="question-icon">
                        <img src={headphones} alt="" />
                    </div>
                    <div className="question-header">
                        <h4>For Sales</h4>
                    </div>
                    <div className="question-descr">
                        <p className='questionBlock1'>The Brilliant reasons Entrada be <br /> your one-stop-shop!</p>
                    </div>
                    <div className="question-contacts">
                        <a href="mailto:sales@entrada.com">sales@entrada.com</a>
                        <a href="tel:+977(985)456-32-12">+977(985) 456-32-12</a>
                    </div>
                </div>
                <div className="question-right question-block">
                    <div className="question-icon">
                        <img src={question} alt="" />
                    </div>
                    <div className="question-header">
                        <h4>Help & Support</h4>
                    </div>
                    <div className="question-descr">
                        <p className='questionBlock2'>The Brilliant reasons Entrada be <br /> your one-stop-shop!</p>
                    </div>
                    <div className="question-contacts">
                        <a href="mailto:sales@entrada.com">sales@entrada.com</a>
                        <a href="tel:+977(985)456-32-12">+977(985) 456-32-12</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
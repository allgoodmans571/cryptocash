import Button from "./Button"
import FeedbackImg from '../Images/Reviews.png'

const Feedback = () => {
  return ( 
    <section className="feedback">
      <h2 className="feedback__title">Вопросы и ответы</h2>
      <div className="feedback__line">
        <Button text={"Как начать зарабатывать?"}/>
        <img src={FeedbackImg} alt="FeedbackImg"/>
        <Button text={"Какие существуют риски?"}/>
      </div>
        <Button text={"Какая минимальная и максимальная сумма депозита?"}/>
    </section>
   );
}
 
export default Feedback;
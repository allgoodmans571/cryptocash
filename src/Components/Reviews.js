import Review from '../Components/Review'
import DocOne from '../Images/doc-1.png'
import DocTwo from '../Images/doc-2.png'

const Reviews = () => {
  return ( 
    <section className="reviews">
     <div className="reviews__left">
        <h2 className="reviews__title" >Документы компании</h2>
        <div className="reviews__bot">
          <div className="reviews__item">
            <img className="reviews__img" src={DocOne} alt="DocOne"/>
            <p className="reviews__sub">Свидетельство о гос. <br/> регистрации юридического <br/>лица</p>
          </div>
          <div className="reviews__item">
            <img className="reviews__img" src={DocTwo} alt="DocTwo"/>
            <p className="reviews__sub">Свидетельство о гос. <br/> регистрации юридического <br/>лица</p>
          </div>
        </div>
     </div>
      <div className="review__right">
        <h2 className="reviews__title" >Отзывы</h2>
        <Review />
      </div>
    </section>
   );
}
 
export default Reviews;
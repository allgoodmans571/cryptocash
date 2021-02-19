import NumbersImgOne from '../Images/Numbers-1.png'
import NumbersImgTwo from '../Images/Numbers-2.png'
import NumbersImgThree from '../Images/Numbers-3.png'

const Numbers = () => {
  return ( 
    <section className="numbers">
      <div className="numbers__item">
        <img className="numbers__img" src={NumbersImgOne} alt="NumbersImgOne"/>
        <h4 className="numbers__title" >532 625</h4>
        <p className="numbers__sub" >Инвесторов</p>
      </div>
      <div className="numbers__item">
        <img className="numbers__img numbers__img--smaller" src={NumbersImgTwo} alt="NumbersImgTwo"/>
        <h4 className="numbers__title" >+1 978</h4>
        <p className="numbers__sub" >Новых за 24 часа</p>
      </div>
      <div className="numbers__item">
        <img className="numbers__img" src={NumbersImgThree} alt="NumbersImgThree"/>
        <h4 className="numbers__title" >84 900 ₽</h4>
        <p className="numbers__sub" >Среднее пополнение счёта</p>
      </div>
    </section>
   );
}
 
export default Numbers;
import PartnershipImg from '../Images/Partnership.png'

const Partnership = () => {
  return ( 
    <section className="partnership">
      <h2 className="partnership__title">Начинаем партнерство</h2>
      <div className="partnership__left">
        <ul className="partnership__list">
          <li className="partnership__list__item"><span>1.</span>Регистрация на платформе</li>
          <li className="partnership__list__item"><span>2.</span>Выбор инвестиционного пакета. <br/>Вы выбираете срок и сумму инвестиции</li>
          <li className="partnership__list__item"><span>3.</span>Выбор способа пополнения и вывода средств</li>
          <li className="partnership__list__item"><span>4.</span>Диверсификация инвестиций через разные пакеты, которые можно открыть одновременно</li>
          <li className="partnership__list__item"><span>5.</span>Подсчет собственной прибыли и финансовое планирование</li>
        </ul>
      </div>
      <img className="partnership__img" src={PartnershipImg} alt="PartnershipImg"/>
    </section>
   );
}
 
export default Partnership;
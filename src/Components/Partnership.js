import PartnershipImg from '../Images/Partnership.png'

const Partnership = () => {
  return ( 
    <section className="partnership">
      <h2 className="partnership__title">Начинаем партнерство</h2>
      <div className="partnership__left">
        <ul className="partnership__list">
          <li className="partnership__list__item"><h4>1.</h4><p>Регистрация на платформе</p><div></div></li>
          <li className="partnership__list__item"><h4>2.</h4><p>Выбор инвестиционного пакета. <br/>Вы выбираете срок и сумму инвестиции</p><div></div></li>
          <li className="partnership__list__item"><h4>3.</h4><p>Выбор способа пополнения и вывода средств</p><div></div></li>
          <li className="partnership__list__item"><h4>4.</h4><p>Диверсификация инвестиций через разные пакеты, <br/>которые можно открыть одновременно</p><div></div></li>
          <li className="partnership__list__item"><h4>5.</h4><p>Подсчет собственной прибыли и финансовое планирование</p><div></div></li>
        </ul>
      </div>
      <img className="partnership__img" src={PartnershipImg} alt="PartnershipImg"/>
    </section>
   );
}
 
export default Partnership;
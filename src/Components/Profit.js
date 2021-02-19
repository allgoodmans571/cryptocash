import Button from "./Button"
import Calculator from "./Calculator"

const Profit = () => {
  return ( 
    <section className="profit">
      <div className="profit__left">
        <h2 className="profit__title">Калькулятор<br/>Доходности</h2>
        <p className="profit__sub">Посчитайте, сколько<br/>вы можете заработать вместе<br></br>с CashStream</p>
        <Button text={'Инвестировать сейчас'}/>
      </div>
      <Calculator />
    </section>
   );
}
 
export default Profit;
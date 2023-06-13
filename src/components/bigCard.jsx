import '../CSs/bigcard.css'
import SmallCard from './SmallCard'
const BigCard =()=>{
    return (
        <section>
        <div className="big-card">
        <div className="title">
            <h1>Soups</h1>
        </div>
        <div className="small-card">
            <SmallCard/>
        </div>
        </div>
        </section>
    )
}
export default BigCard
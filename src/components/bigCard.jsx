import '../CSs/bigcard.css'
import SmallCard from './SmallCard'
const BigCard =({name})=>{
    return (
        <section>
        <div className="big-card">
        <div className="title">
            <h1>{name}</h1>
        </div>
        <div className="small-card">
            <SmallCard
            img="left"
            name="Pilates Class Pass"
            />
            <SmallCard
            img="left1"
            name=""
            />
            <SmallCard
            img="left"
            />
           
        </div>
     
        </div>
        </section>
    )
}
export default BigCard
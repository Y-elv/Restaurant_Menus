import '../CSs/bigcard.css'
import smallCard from './SmallCard.jsx'
const BigCard =({name})=>{
    return (
        <section>
        <div className="big-card">
        <div className="title">
            <h1>{name}</h1>
        </div>
        <div className="small-card">
            <smallCard
            img="left"
            name="Pilates Class Pass"
            />
            <smallCard
            img="left1"
            name=""
            />
            <smallCard
            img="left"
            />
           
        </div>
     
        </div>
        </section>
    )
}
export default BigCard
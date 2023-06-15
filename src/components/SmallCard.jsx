import '../CSs/smallcard.css';
import Star from '../assets/vector.png'
const SmallCard =({img,name})=>{
    return( 
    <>
    <div className="all">
        <div className={img}></div>
        <div className="right">
            <div className="content">
                <h4>{name}</h4>
                <h4>240 Cal</h4>
                <div className="last">
                <h4 id="left"><img src={Star} alt="star"/>1.7</h4>
                <h4>8,200Rwf</h4>
                </div>
                
            </div>
        </div>
    </div>
    </>
    )
   
}
export default SmallCard
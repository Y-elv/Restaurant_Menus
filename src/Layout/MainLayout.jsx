import '../CSs/mainlayout.css'
import img1 from '../assets/menu-alt-left-regular-24.png'
import img2 from '../assets/search-alt-2-regular-24.png'
const MainLayout =()=>{
    return(
        <>
       <div className="container">
        <div className="menu"><img src={img1}/></div>
        <div className="text">
            <h3>Tall bakery cafe</h3>
        </div>
        <div className="search"><img src={img2}/></div>
       </div>
        </>
    )
}
export default MainLayout
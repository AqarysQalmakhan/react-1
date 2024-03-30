import korzina from '../assets/button _ black _ icon.png'
import logo from '../assets/Group.png'
export default function Header() {
    return (
        <>
        <img src={logo} alt="" />
        <p>QuickMeal</p>
        <div>
            <a href="">Home</a>
            <a href="">All restaurants</a>
            <a href=""><img src={korzina} alt="" /> </a>
        </div>
        </>
    )
}

import nearRst from '../assets/restaurants.png'
export default function BestRst() {
    return(
        <>
        <div>
            <h1><span>Award winning</span> The best restaurants near you!</h1>
            <button>Explore the best restaurants</button>
        </div>
        <img src={nearRst} alt="" />
        </>
    )
}

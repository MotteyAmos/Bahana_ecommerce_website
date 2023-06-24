import { Link } from "react-router-dom"

const ItemCard = ({value:{img, title, text, rating,btn,price, color,product_url}}) => {
 
  return (
    <div className={`w-[20rem] h-[25rem] drop-shadow-2xl rounded-md  border-2 overflow-hidden  bg-${color}` }>
        <Link to={'/${product_url}'}>
          <div className="w-full overflow-hidden h-[90%]">
            <img src={img} alt={title} className="h-[90%] w-full hover:scale-110 transitionTheme " />
          </div>
        </Link>
        <Link to={`/${product_url}`}>
        <div className="text-lg textFont tracking-wide text-center font-medium text-slate-900 hover:text-slate-500" >{text}</div>
        </Link>
    </div>
  )
}

export default ItemCard
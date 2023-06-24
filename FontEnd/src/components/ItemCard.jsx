import { Link } from "react-router-dom"

const ItemCard = ({isTopSales,value:{img, title, text, rating,btn,price, color,product_url}}) => {
  // we are still working on the random number animation 
  
  let randomNumber =Math.floor(Math.random() * (100 -50)) + 50 ; 
  let sign = Math.random() < 0.5 ? "-" : "";
  console.log(sign)
  console.log(randomNumber);

  let radomRotate = `hover:-rotate-[${randomNumber}deg]`;
  return (
    <div className={`w-[20rem] h-[25rem] drop-shadow-2xl rounded-md  border-2 ${isTopSales && "border-none rounded-md overflow-hidden "} overflow-hidden  bg-${color}` }>
        <Link to={'/${product_url}'}>
          <div className={`w-full overflow-hidden h-[90%] ${isTopSales && 'h-[100]'}`}>
            <img src={img} alt={title} className={`h-[90%] w-full hover:scale-110 transitionTheme ${isTopSales && radomRotate}`}/>
          </div>
        </Link>
        {
          isTopSales &&(
            <Link to={`/${product_url}`}>
              <div className="text-lg textFont tracking-wide text-center font-medium text-slate-900 hover:text-slate-500" >{text}</div>
            </Link>
          )
        }

    </div>
  )
}

export default ItemCard
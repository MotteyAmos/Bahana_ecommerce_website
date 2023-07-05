import { BsStar} from "react-icons/bs";

const FabricCard = ({isshowCase,value:{rating,img,product_url}}) => {
  return (
    <div className={`h-[20rem] w-[15rem] overflow-hidden border-2 rounded-md drop-shadow-2xl ${isshowCase && 'h-[30rem] border-2'}`}>

        <img src={img} alt="fabric" className={`hover:scale-110 transitionTheme  w-full h-[80%] ${ isshowCase && 'hover:skew-x-3 h-[100%]'}`}/>
        
        {
            !isshowCase && (
                <div className="grid text-center justify-center">
                    <p className="text-slate-800 text-2xl">View</p>
                    <p className="flex gap-2">
                        <span>
                            <BsStar className="text-xl"/>
                        </span>
                        <span>
                            <BsStar  className="text-xl"/>
                        </span>
                        <span>
                            <BsStar className="text-xl"/>
                        </span>
                        <span>
                            <BsStar className="text-xl"/>
                        </span>
                        <span>
                            <BsStar className="text-xl"/>
                        </span>
                        <span>
                            <BsStar className="text-xl"/>
                        </span>
                    </p>
                </div>
            )
        }
    </div>
  )
}

export default FabricCard
import { useSelector } from "react-redux";
import { selectSearchState, getSearchProduct} from "../Features/searchSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectSearchedProducts } from "../Features/searchSlice";
import DisplayOneItem from "./DisplayOneItem";
import ItemCard from "./ItemCard";

export const DisplaySearchedProduct = () => {
  const searchState = useSelector(selectSearchState);
  const selectedItems = useSelector(selectSearchedProducts );

    return (
        <div className="">
        <div className={`${searchState ? 'top-[5rem] left-[10%]': "-top-[146rem] left-[10%] "}  fixed w-[80vw]  grid grid-cols-3 gap-y-[20rem] gap-5 h-[80vh] overflow-scroll transition-all duration-700  drop-shadow-2xl removeScrollBar backdrop-blur-md bg-white/80 z-[100] rounded-sm`}>
            {
                
                selectedItems.map((item, key)=>{
                
                    return(
                        <div key={key} className="w-[2rem] h-[3rem] m-5">
                        <ItemCard  value={item} isSearchProduct={true}/>

                        </div>
                       
                    )
                })
            }
        </div>
        </div>

      )
  }



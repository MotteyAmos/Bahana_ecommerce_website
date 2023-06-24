import ItemCard from "./ItemCard"
import Title from "./Title"

const TopSales = ({,value:{title,items}}) => {
  return (
    <>
    <div className="popular_sale  container mx-auto px-[15rem] mt-[10rem] ">
        <Title title={title}/>
        <div className="flex justify-between">
        {
            items.map(item=>(
                <ItemCard value={item}/>
            ))
        }
        </div>

    </div>
    </>
  )
}

export default TopSales
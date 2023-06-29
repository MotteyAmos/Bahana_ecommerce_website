import { allBags, bag_showCase } from "../../data/data"
import { Banner, MainProduct } from "../components";

const AllBags = ({val}) => {
  return (
    <div>
    <Banner val={val} />
    <MainProduct images={allBags} showcase= {bag_showCase}/>
</div>
  )
}

export default AllBags
import { Banner, MainProduct } from "../components"
import { allFabric, clothe_showCase } from "../../data/data"


const AllFabric = ({val}) => {
  return (
    <div>
        <Banner val={val} />
        <MainProduct images={allFabric} showcase= {clothe_showCase}/>
    </div>
  )
}

export default AllFabric
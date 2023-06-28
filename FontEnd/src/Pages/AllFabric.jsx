import { Banner, MainProduct } from "../components"
import { allFabric, clothe_showCase } from "../../data/data"


const AllFabric = ({fabric_val}) => {
  return (
    <div>
        <Banner fabric_val={fabric_val} />
        <MainProduct images={allFabric} clothe_showcase= {clothe_showCase}/>
    </div>
  )
}

export default AllFabric
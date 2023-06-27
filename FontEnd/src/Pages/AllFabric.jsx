import { Banner, MainProduct } from "../components"
import { allFabric } from "../../data/data"

const AllFabric = ({fabric_val}) => {
  return (
    <div>
        <Banner fabric_val={fabric_val} />
        <MainProduct images={allFabric}/>
    </div>
  )
}

export default AllFabric
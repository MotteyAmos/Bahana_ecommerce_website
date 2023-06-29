import { allCuff_link, cufflink_showCase } from "../../data/data"
import { Banner, MainProduct } from "../components";


const AllCuffLInk = ({val}) => {
    return (
        <div>
        <Banner val={val} />
        <MainProduct images={allCuff_link} showcase= {cufflink_showCase}/>
    </div>
      )
}

export default AllCuffLInk;

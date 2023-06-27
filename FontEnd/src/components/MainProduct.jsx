import { FabricCard } from ".";


const MainProduct = ({images:{title, items}}) => {
  return (
    <div>
      <div>

      </div>

        <div>
            {
                items.map((item, key)=>(
                    <FabricCard key={key}/>
                ))
            }
      </div>
    </div>
  );
};

export default MainProduct;

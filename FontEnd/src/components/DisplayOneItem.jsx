
const DisplayOneItem = ({value}) => {
   
  return (
    <div>
        <div className="w-[5rem] h-[6rem]">
            <img src={value.img} alt="" />
        </div>
    </div>
  )
}

export default DisplayOneItem
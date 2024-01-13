const Filterbar=({filterData,category,setcategory})=>{
    function handlefilter(title){
        setcategory(title);
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 justify-center mx-auto py-4">
            {filterData.map((data)=>{return <button onClick={()=>handlefilter(data.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 ${category===data.title?"border-[#fff]":"border-sky-900"} hover:bg-opacity-50 transition-all duration-300`} key={data.id}>{data.title}</button>})}
        </div>
    )
}
export default Filterbar;
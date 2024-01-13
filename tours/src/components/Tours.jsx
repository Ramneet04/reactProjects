import Card from "./Card";
function Tours({Toursdata,handleButton}){
    return(
        <div>
            <div className="pt-24 flex flex-col items-center">
            <h2 className="text-white text-4xl font-extrabold border-dotted border-4 inline rounded-md border-sky-700 px-3 py-1">Plans with Ramneet</h2>
            <div className="max-w-[1300px] flex justify-center flex-wrap pt-20 gap-8">
                {
                    Toursdata.map((item)=>{return <Card key={item.id} {...item} handleButton={handleButton}></Card>})
                }
            </div>
            </div>
        </div>
    )
}
export default Tours;
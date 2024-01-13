import "./Spinner.css"
function Spinner(){
    return(
        <div>
            <div className="spinner"></div>
            <p className="text-lg font-bold mt-2 text-[#fff]">Loading...</p>
        </div>
    )
}
export default Spinner;
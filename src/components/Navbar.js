

const Navbar = ({filterData}) => {
    return(
        <div className="flex gap-4 justify-center">
            {filterData.map( (data) => {
                return (
                    <button key={data.id} className="text-white bg-[#fa71ff] hover:bg-bgDark my-4 py-2 px-4 rounded-md font-bold text-base">{data.title}
                    </button>
                )
            } )}
        </div>
    )
}

export default Navbar;
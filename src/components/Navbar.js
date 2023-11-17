

const Navbar = ({filterData}) => {
    return(
        <div className="flex gap-4 justify-center">
            {filterData.map( (data) => {
                return (
                    <button key={data.id} className="text-white bg-[#177c24] hover:bg-bgDark my-4 py-2 px-4 rounded-md font-bold text-base transition-all duration-300">{data.title}
                    </button>
                )
            } )}
        </div>
    )
}

export default Navbar;
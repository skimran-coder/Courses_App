const Card = ({course}) => {
    return(
        <div className="w-96 flex flex-col gap-4 bg-[#0b4813] rounded-md  pb-4 hover:scale-[1.03] transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-[#177c24]">
            <img src={course?.image?.url} alt={course?.image?.alt} className="w-96 rounded-t-md"/>
            <h2 className="px-4 font-bold text-lg text-white  ">{course?.title}</h2>
            <p className="px-4 text-white text-sm">{course.description}</p>
        </div>
    )
}

export default Card;
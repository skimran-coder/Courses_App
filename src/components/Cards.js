import useCourses from "../utils/useCourses";
import Card from "./Card";

const Cards = () => {
    const courses = useCourses()
    const allCourses = Object.values(courses).flat();

    return(
        <div className="w-[90%] mx-auto flex flex-wrap gap-8 justify-center">
            {
                allCourses.map((course) => {
                    return <Card course={course} key={course.id}/>
                })
            }
        </div>
    )
}

export default Cards;
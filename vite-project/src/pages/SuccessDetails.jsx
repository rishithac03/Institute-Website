import { useParams } from "react-router-dom";
import "../styles/successdetails.css";
import placements from "../assets/placements.png";
import students from "../assets/students.png";
import projects from "../assets/projects.png";

function SuccessDetails() {

    const { category } = useParams();
    const banners = {placements,students,projects};

    return (

        <section className="success-details">

            <img
                src={banners[category]}
                alt={category}
                className="success-banner"
            />

        </section>

    );

}

export default SuccessDetails;
import "./home.scss";
import { Link } from "react-router-dom";

// Components
import Card from "../../components/card/card";

// Projects
import MindEvolution from "../Work/projects/MindEvolution/mind_evolution.json";
import RiffsFinancialCoach from "../Work/projects/RiffsFinancialCoach/riffs_financial_coach.json";
import CityPups from "../Work/projects/CityPups/city_pups.json";
import NextLevelFitness from "../Work/projects/NextLevelFitness/next_level_fitness.json";

// Project Images
import CityPupsHeader from "../Work/projects/CityPups/images/Newcpheader.png";
import MindEvolutionHeader from "../Work/projects/MindEvolution/images/NewCSHeaderimage.png";
import NextLevelFitnessHeader from "../Work/projects/NextLevelFitness/images/NextLevelFitnessHeaderimage1.png";
import RiffsFinancialCoachHeader from "../Work/projects/RiffsFinancialCoach/images/Riffnewheader.png";

// Images
import headshot from "../../assets/images/miaheadshot.jpg";
import aboutpic from "../../assets/images/miaabout.jpg";

// Resume
import resume from "../../assets/files/MiaLewisResume.pdf";

export default function Home() {
    return (
        <div id="home" name="home">
            <div className="home">
                {/* Landing section on homepage */}
                <div className="home__desc">
                    <h3 className="home__desc--title">Hello there, I'm Mia.</h3>
                    <p className="home__desc--text">
                        I am a UX/UI Designer &amp; Researcher who uses creative
                        thinking and strategic planning to solve problems that
                        simplify the lives of others.
                    </p>
                    <div className="home__location">
                        <i className="fa fa-location-dot home__location--icon"></i>
                        <span>Los Angeles County</span>
                    </div>
                    <a href={resume} alt='Download Mia"s Resume' download>
                        <button className="home__button">
                            Download Resume
                        </button>
                    </a>
                </div>
                <div className="home__image">
                    <img
                        src={headshot}
                        alt="Headshot of Mia Lewis"
                        className="home__image--img"
                    />
                </div>
            </div>

            {/* Case Study Cards */}
            <div className="home__work">
                <h4 className="home__work--title">
                    Some of the work I'm most proud of.
                </h4>
                <Card
                    project={NextLevelFitness}
                    image={NextLevelFitnessHeader}
                    alt="Next Level Fitness"
                />
                <Card
                    project={MindEvolution}
                    image={MindEvolutionHeader}
                    alt="Mind Evolution"
                />
                <Card
                    project={RiffsFinancialCoach}
                    image={RiffsFinancialCoachHeader}
                    alt="Riffs Financial Coach"
                />
                <Card
                    project={CityPups}
                    image={CityPupsHeader}
                    alt="City Pups"
                />
            </div>

            {/* About Section */}
            <div className="home__about">
                <div className="home__about--info">
                    <h4 className="home__about--title">Nice to meet you.</h4>
                    <p className="home__about--desc">
                        I am an innovator! My motto is, "there's got to be a
                        better way! It is more than my motto; it is
                        pre-programmed ROM chip in my brain's reticular
                        receiver. I enjoy the challenge of a problem to the
                        degree that I become sad when I must settle on any one
                        solution... I know; I know, I'm actively working on it!"
                    </p>
                    <Link to="/about" replace>
                        <button className="home__about--button">
                            More About Me
                        </button>
                    </Link>
                </div>
                <div className="home__about--image">
                    <img
                        src={aboutpic}
                        alt="Mia smiling with arms crossed"
                        className="home__about--img"
                    />
                </div>
            </div>
        </div>
    );
}

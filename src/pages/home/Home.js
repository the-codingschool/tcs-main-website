import "./Home.scss";
//import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";

import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import Particle_slider from '../../component/particle-slider/Particle-slider';
import HomeBanner from "../../component/home-banner/Home-banner";
import StudentMapCounter from "../../component/student-map-counter/Student-map-counter";
import KeyInitiatives from "../../component/key-initiatives/Key-initiatives";
import Testimonial from "../../component/testimonial/Testimonial";

const users = [
    {
        name: "John D.",
        title: "CO FOUNDER",
        label: "/images/Layer 21 copy 3.png",
        avatar: "/images/Layer 10 copy 3.png",
    },
    {
        name: "Daphne T.",
        title: "FOUNDER",
        label: "/images/Layer 19 copy 3.png",
        avatar: "/images/Layer 14 copy 3.png",
    },
    {
        name: "Emily S.",
        title: "CEO",
        label: "/images/Layer 17 copy 3.png",
        avatar: "/images/Layer 13 copy 3.png",
    },
    {
        name: "Mike W.",
        title: "DIRECTOR",
        label: "/images/Layer 16 copy 3.png",
        avatar: "/images/Layer 12 copy 3.png",
    },
    {
        name: "Adam W.",
        title: "CTO",
        label: "/images/Layer 18 copy 3.png",
        avatar: "/images/Layer 11 copy 3.png",
    },
    {
        name: "Carla O.",
        title: "CO FOUNDER",
        label: "/images/Layer 20 copy 3.png",
        avatar: "/images/Layer 15 copy 3.png",
    },
];

var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const programPost = [
    {
        name: "1",
        title: "One-of-a-kind virtual camps",
        list: [
            { id: "1", listItem: "Emerging Technologies" },
            { id: "2", listItem: "Computer Music" },
            { id: "3", listItem: "Creative Code" },
            { id: "4", listItem: "AI/Big Data" },
        ],
        img: "/images/k-12-emerging-technologies.jpg",
        link: "https://codeconnects.org/summercamps22.html",
        isExternal: true,
    },
    {
        name: "2",
        title: "Research Opportunity",
        list: [
            { id: "1", listItem: "Columbia University professors" },
            { id: "2", listItem: "In-depth data science skills" },
            { id: "3", listItem: "Conduct real-world research" },
            { id: "4", listItem: "Increase college competitiveness" },
        ],
        img: "/images/k-12-research-opportunity.jpg",
        link: "https://codeconnects.org/research.html",
        isExternal: true,
    },
    {
        name: "3",
        title: "Artificial Intelligence",
        list: [
            { id: "1", listItem: "For-credit course" },
            { id: "2", listItem: "In-depth skills in AI/ML" },
            { id: "3", listItem: "National lab tours" },
            { id: "4", listItem: "Industry expert Q&A’s" },
        ],
        img: "/images/k-12-artificial-intelligence.jpg",
        link: "/train",
        isExternal: false,
    },
    {
        name: "4",
        title: "Quantum Computing",
        list: [
            { id: "1", listItem: "Learn real quantum skills" },
            { id: "2", listItem: "Led by MIT PhD " },
            {
                id: "3",
                listItem: "Learn qubits, superposition & teleportation",
            },
            { id: "4", listItem: "Run code in a quantum computer!" },
        ],
        img: "/images/upcoming-programs-4.jpg",
        link: "https://www.qubitbyqubit.org/hs-college-camps",
        isExternal: true,
    },
    {
        name: "5",
        title: "Personalized Lessons",
        list: [
            { id: "1", listItem: "1:1 and Code-with-Friends Lessons" },
            { id: "2", listItem: "Learn at your own pace" },
            { id: "3", listItem: "Specialized curriculum: AI, fintech" },
            { id: "4", listItem: "cybersecurity, full stack, & more!" },
        ],
        img: "/images/upcoming-programs-4.jpg",
        link: "https://codeconnects.org/personal-lessons.html",
        isExternal: true,
    },
];
const programPostUniversity = [
    {
        name: "1",
        title: "Quantum Computing",
        list: [
            { id: "1", listItem: "Learn real quantum skills" },
            { id: "2", listItem: "Run code in a quantum computer" },
            { id: "3", listItem: "Year-long course & winter intensives" },
            { id: "4", listItem: "Research & Internships" },
        ],
        img: "/images/upcoming-programs-5.jpg",
        link: "https://www.qubitbyqubit.org/programs",
        isExternal: true,
    },
];
const programPostEducators = [
    {
        name: "1",
        title: "Artificial Intelligence",
        list: [
            { id: "1", listItem: "PD in AI/ML" },
            { id: "2", listItem: "Bring ML into your classroom" },
            { id: "3", listItem: "CEU opportunity" },
            { id: "4", listItem: "STEM educators community" },
        ],
        img: "/images/upcoming-programs-3.jpg",
        link: "/train",
        isExternal: false,
    },
    {
        name: "2",
        title: "Quantum Computing",
        list: [
            { id: "1", listItem: "Bring quantum to your students" },
            { id: "2", listItem: "K-12 transcript credit" },
            { id: "3", listItem: "Free for school partners" },
        ],
        img: "/images/upcoming-programs-3.jpg",
        link: "https://www.qubitbyqubit.org/",
        isExternal: true,
    },
];
const keyPost = [
    {
        name: "1",
        title: "codeConnects empowers K-12 students with classical coding skills from Python to specialized tech areas including AI, cybersecurity, big data and more. ",
        img: "/images/classical-coding.png",
        link: "https://codeconnects.org",
        anim: "left",
        subTitle: "Classical Coding",
        isExternal: true,
    },
    {
        name: "1",
        title: "Qubit by Qubit makes quantum computing education accessible to K-12; university, and the workforce through camps, year-long courses, research and internships.",
        img: "/images/quantum-computing.png",
        link: "https://www.qubitbyqubit.org",
        anim: "top",
        subTitle: "Quantum Computing",
        isExternal: true,
    },
    {
        name: "1",
        title: "TRAIN is creating the future AI leaders through a first-of-its-kind year-long course: Introduction to  Machine Learning (ML) for High School Students and Educators.",
        img: "/images/train-new.png",
        link: "/train",
        anim: "right",
        subTitle: "Artificial Intelligence",
        isExternal: false,
    },
];
const imgContainerStyle = {
    width: "440px",
};
const imageStyle = {
    maxWidth: "100%",
};

function NextArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} up-next-item`} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} up-prev-item`} onClick={onClick} />;
}

function Home() {
    // function onLoad() {
    //     var ps = new window.ParticleSlider({
    //         ptlGap: 0,
    //         mouseForce: 1000,
    //         monochrome: true,
    //         color: '#86a1b2',
    //         ptlSize: 1,
    //     });
    //     var ptl = new ps.Particle(ps);
    //     ptl.ttl = 10;
    // }

    //useEffect(onLoad, [])
    return (
        <div id="Home">
            <div className="container">
                <HomeBanner></HomeBanner>
            </div>
            <div id="" className="KeyInitiatives mb-80">
                <div className="container">
                    <div className="visual-text text-center mb-30">
                        <h3>Key Initiatives</h3>
                    </div>
                </div>
                <div className="container container-1660">
                    <div className="row">
                        {keyPost.map((item, index) => {
                            return (
                                //<li key={index}>{item['title']}</li>
                                {
                                    ...(index / 2 ? (
                                        <Fade left>
                                            <div className="col-md-4 postBox">
                                                <div className="postBox-wrap">
                                                    <img
                                                        src={item["img"]}
                                                        alt="students"
                                                    />
                                                    <h5 className="pbW-sub-title">
                                                        {item["subTitle"]}
                                                    </h5>
                                                    <h6>{item["title"]}</h6>
                                                    {item["isExternal"] ? (
                                                        <a
                                                            href={item["link"]}
                                                            className="link"
                                                        >
                                                            Learn More
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            to={item["link"]}
                                                            className="link"
                                                        >
                                                            Learn More
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </Fade>
                                    ) : (
                                        <Fade right>
                                            <div className="col-md-4 postBox">
                                                <div className="postBox-wrap">
                                                    <img
                                                        src={item["img"]}
                                                        alt="students"
                                                    />
                                                    <h5 className="pbW-sub-title">
                                                        {item["subTitle"]}
                                                    </h5>
                                                    <h6>{item["title"]}</h6>
                                                    {item["isExternal"] ? (
                                                        <a
                                                            href={item["link"]}
                                                            className="link"
                                                        >
                                                            Learn More
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            to={item["link"]}
                                                            className="link"
                                                        >
                                                            Learn More
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </Fade>
                                    )),
                                }
                            );
                        })}
                    </div>
                </div>
            </div>
            <StudentMapCounter></StudentMapCounter>
            <KeyInitiatives></KeyInitiatives>

            <div className="brown-sec mb-70">
                <div className="container">
                    <h2>Upcoming Summer Programs</h2>
                </div>
            </div>

            <div className="upcoming-programs">
                <div className="container">
                    <div class="nav upcomingProgramsTab mb-30" role="tablist">
                        <a
                            id="k2-pro2-tab"
                            data-toggle="tab"
                            href="#k2-pro2"
                            role="tab"
                            aria-controls="k2-pro2"
                            aria-selected="false"
                        >
                            <img src="images/k2-2.png" alt="" />
                            <h6 className="tab-title">University Programs</h6>
                        </a>
                        <a
                            id="k2-pro-tab"
                            data-toggle="tab"
                            href="#k2-pro"
                            role="tab"
                            aria-controls="k2-pro"
                            aria-selected="true"
                            className="active"
                        >
                            <img src="images/k2-1.png" alt="" />
                            <h6 className="tab-title">K-12</h6>
                        </a>
                        <a
                            id="k2-pro3-tab"
                            data-toggle="tab"
                            href="#k2-pro3"
                            role="tab"
                            aria-controls="k2-pro3"
                            aria-selected="false"
                        >
                            <img src="images/k2-3.png" alt="" />
                            <h6 className="tab-title">Educators</h6>
                        </a>
                    </div>
                </div>

                <div class="tab-content mb-50" id="upcomingProgramsTabContent">
                    <div
                        class="tab-pane fade show active"
                        id="k2-pro"
                        role="tabpanel"
                        aria-labelledby="k2-pro-tab"
                    >
                        <div className="programPost">
                            <Slider
                                {...settings}
                                className="programPost-Carousel"
                            >
                                {programPost.map((item, index) => {
                                    return (
                                        <Fade bottom>
                                            <div className="programPost-item">
                                                <div className="programPost-img">
                                                    <img
                                                        src={item["img"]}
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="programPost-desc">
                                                    <h4>{item["title"]}</h4>
                                                    <ul>
                                                        {item.list.map((i) => {
                                                            return (
                                                                <li>
                                                                    {i.listItem}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    {item["isExternal"] ? (
                                                        <a
                                                            href={item["link"]}
                                                            className="btn btn-gradient-2 text-white rounded-0"
                                                        >
                                                            Learn More
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            to={item["link"]}
                                                            className="btn btn-gradient-2 text-white rounded-0"
                                                        >
                                                            Learn More
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </Fade>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div
                        class="tab-pane fade"
                        id="k2-pro2"
                        role="tabpanel"
                        aria-labelledby="k2-pro2-tab"
                    >
                        <div className="programPost">
                            <div className="row justify-content-center">
                                {programPostUniversity.map((item, index) => {
                                    return (
                                        <Fade bottom>
                                            <div className="col-12 col-md-6">
                                                <div className="programPost-item non-carosel">
                                                    <div className="programPost-img">
                                                        <img
                                                            src={item["img"]}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="programPost-desc">
                                                        <h4>{item["title"]}</h4>
                                                        <ul>
                                                            {item.list.map(
                                                                (i) => {
                                                                    return (
                                                                        <li>
                                                                            {
                                                                                i.listItem
                                                                            }
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                        {item["isExternal"] ? (
                                                            <a
                                                                href={
                                                                    item["link"]
                                                                }
                                                                className="btn btn-gradient-2 text-white rounded-0"
                                                            >
                                                                Learn More
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                to={
                                                                    item["link"]
                                                                }
                                                                className="btn btn-gradient-2 text-white rounded-0"
                                                            >
                                                                Learn More
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div
                        class="tab-pane fade"
                        id="k2-pro3"
                        role="tabpanel"
                        aria-labelledby="k2-pro3-tab"
                    >
                        <div className="programPost">
                            <div className="row justify-content-center">
                                {programPostEducators.map((item, index) => {
                                    return (
                                        <Fade bottom>
                                            <div className="col-12 col-md-3">
                                                <div className="programPost-item">
                                                    <div className="programPost-img">
                                                        <img
                                                            src={item["img"]}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="programPost-desc">
                                                        <h4>{item["title"]}</h4>
                                                        <ul>
                                                            {item.list.map(
                                                                (i) => {
                                                                    return (
                                                                        <li>
                                                                            {
                                                                                i.listItem
                                                                            }
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                        {item["isExternal"] ? (
                                                            <a
                                                                href={
                                                                    item["link"]
                                                                }
                                                                className="btn btn-gradient-2 text-white rounded-0"
                                                            >
                                                                Learn More
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                to={
                                                                    item["link"]
                                                                }
                                                                className="btn btn-gradient-2 text-white rounded-0"
                                                            >
                                                                Learn More
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="eng-bg"
                style={{ backgroundImage: `url("/images/eng-bg-old-1.png")` }}
            >
                <div className="container container-1660">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <Fade left>
                                <h3>
                                    We’ve Created a Learning Model That’s{" "}
                                    <u>Making Real Impact.</u>
                                </h3>
                                <p>
                                    To expand the pool of qualified talent and
                                    increase diversity in tech, every student
                                    needs access to high quality computer
                                    science education. We’re making that a
                                    reality. Taught by PhD researchers and
                                    professional software engineers, our
                                    students gain in-depth knowledge and real
                                    world skills in emerging technologies, such
                                    as AI and Quantum Computing, that they would
                                    not otherwise have access to.{" "}
                                </p>
                                <p>
                                    Our model offers virtual courses with live
                                    instruction, teaching nearly 10,000 students
                                    in a single course with staggeringly
                                    impressive outcomes.
                                </p>
                                <p>
                                    Through this model, every student in the
                                    U.S. can have access to high-quality
                                    computer science instruction.
                                </p>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right>
                                <img
                                    className="img-responsive"
                                    src="/images/eng-bg-hand.png"
                                    alt=""
                                />
                            </Fade>
                        </div>
                    </div>
                    <div class="row align-items-center mt-50 eng-bg-bottom">
                        <div class="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                            <h5>
                                <CountUp end={80} duration={3.75} />
                                %+
                            </h5>
                            <p>
                                Over 80% completion rate in 8-month virtual
                                courses
                            </p>
                        </div>
                        <div class="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                            <h5>
                                <CountUp end={99} duration={3.75} />%
                            </h5>
                            <p>
                                of students are more likely to take a STEM class
                                in college after the course
                            </p>
                        </div>
                        <div class="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                            <h5>
                                <CountUp end={98} duration={3.75} />%
                            </h5>
                            <p>
                                of students would recommend the course to their
                                friends
                            </p>
                        </div>
                        <div class="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                            <h5>
                                <CountUp end={95} duration={3.75} />%
                            </h5>
                            <p>
                                of students are more interested in pursuing a
                                STEM career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="school-partner mb-80">
                <div className="container container-1660">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <Fade left>
                                <div className="sp-left">
                                    <p>Nationally Accredited By: </p>
                                    <img
                                        src="/images/wasc.jpg"
                                        className="mb-50"
                                        alt="wasc"
                                    />
                                    <img
                                        src="/images/uc-ag-guide.jpg"
                                        alt="uc-ag-guide"
                                    />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="school-box">
                                <div className="visual-text">
                                    <Fade top>
                                        <h3>
                                            School{" "}
                                            <span class="text-gold">
                                                Partners
                                            </span>
                                        </h3>
                                    </Fade>
                                    <Fade bottom>
                                        <p>
                                            Accredited by the Western
                                            Association of Schools and Colleges
                                            (WASC), your K-12 students can earn
                                            transcript credit in emerging
                                            technologies such as AI and Quantum
                                            Computing.{" "}
                                        </p>
                                        <p>
                                            Hundreds of schools and districts
                                            across the U.S. from the Hawaii
                                            Department of Education to the
                                            Cleveland School District have
                                            partnered with The Coding School to
                                            ensure their students receive the
                                            highest quality and most
                                            cutting-edge STEM education
                                            possible. The Coding School's Qubit
                                            by Qubit Introduction to Quantum
                                            Computing Course is also A-G
                                            approved by the University of
                                            California as an accepted college
                                            preparatory course.{" "}
                                        </p>
                                        <div className="row home-banner mt-30 p-0">
                                            <div className="col-md-6 text-right">
                                                <Link
                                                    className="btn btn-outline link"
                                                    to="/involved"
                                                >
                                                    {" "}
                                                    CONNECT WITH US
                                                </Link>
                                            </div>
                                            <div className="col-md-6 text-left">
                                                <HashLink
                                                    className="btn btn-outline link"
                                                    to="/about_us#school-partners"
                                                >
                                                    {" "}
                                                    SEE OUR SCHOOL PARTNERS
                                                </HashLink>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    );
}

export default Home;

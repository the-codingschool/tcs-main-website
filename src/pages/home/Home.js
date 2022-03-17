import "./Home.scss";

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
import { Helmet } from "react-helmet";
import DropIcon from "../../component/topnav/DropIcon";

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1439,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const programPost = [
    {
        name: "1",
        title: "Data Science Research",
        subTitle: "Grades 10 - 13",
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
        name: "2",
        title: "Virtual Summer Camps",
        subTitle: "Grades 6 - 12",
        list: [
            { id: "1", listItem: "Skills in emerging technologies" },
            {
                id: "2",
                listItem:
                    "AI, Cybersecurity, Music + Tech, Big Data, Pre-AP CS and more!",
            },
            { id: "3", listItem: "Taught by tech professionals" },
        ],
        img: "/images/k-12-emerging-technologies.jpg",
        link: "https://codeconnects.org/summercamps22.html",
        isExternal: true,
    },
    {
        name: "3",
        title: "Quantum Computing",
        subTitle: "Grades 7 - 12",
        list: [
            { id: "1", listItem: "Camps & year-long course" },
            { id: "2", listItem: "Learn real quantum skills" },
            {
                id: "3",
                listItem: "Led by MIT PhD",
            },
            { id: "4", listItem: "Code in a quantum computer!" },
        ],
        img: "/images/upcoming-programs-5.jpg",
        link: "https://www.qubitbyqubit.org/hs-college-camps",
        isExternal: true,
    },
    {
        name: "4",
        title: "Artificial Intelligence",
        subTitle: "Grades 9 - 12",
        list: [
            { id: "1", listItem: "For-credit course" },
            { id: "2", listItem: "Academic year 2022-23" },
            { id: "3", listItem: "In-depth skills in AI/ML" },
            { id: "4", listItem: "Funded by the DoD" },
        ],
        img: "/images/upcoming-programs-1.jpg",
        link: "/train",
        isExternal: false,
    },
    {
        name: "5",
        title: "Personalized Lessons",
        subTitle: "Grades 3 - 12",
        list: [
            { id: "1", listItem: "1:1 & Code-with-Friends Lessons" },
            { id: "2", listItem: "Learn at your own pace" },
            { id: "3", listItem: "Specialized curriculums" },
            { id: "4", listItem: "Your own instructor" },
        ],
        img: "/images/996F0475-AC41-418B-BF94-0703D5240BA3 (2).jpg",
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
            { id: "4", listItem: "Conduct quantum research" },
            { id: "5", listItem: "Corporate internships" },
            { id: "6", listItem: "Industry expert Q&As" },
        ],
        img: "/images/girl w Q computer-lab.png",
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
        img: "/images/upcoming-programs-3-new.jpg",
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
            { id: "4", listItem: "Learn quantum skills" },
        ],
        img: "/images/Alta_Google Quantum Computer3438.jpg",
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

const pastPrograms = [
    {
        ppImg: "/images/QxQ_NoLastNames_Photo.jpg",
        ppTitle:
            "Introduction to Quantum Computing for High School Students 2020-2021",
        ppDesc: "Partnered with IBM Quantum and taught by MIT and Oxford quantum researchers, Qubit by Qubit led the first ever global quantum computing course for high school students and above. In this year-long course, over 7,500 students from 125 countries learned skills in quantum mechanics, quantum computation, quantum algorithms and even ran code on a real quantum computer!",
        ppLink: "https://www.ibm.com/blogs/research/2020/10/quantum-coding-school/",
        isExternal: true,
    },
    {
        ppImg: "/images/QxQ_Conference.jpg",
        ppTitle:
            "Diversity in Quantum Conference",
        ppDesc: "Featuring 21 speakers across 7 panels, the QxQ Diversity in Quantum Computing Conference is a one-day virtual event dedicated to creating an inclusive, diverse, and equitable future of quantum computing. We are proud to say over 2,200 attendees from 65 countries joined us for these important conversations. Conversation topics ranged from actionable inclusion strategies, policy discussions, and educational initiatives to authentic, vulnerable discussions about confidence, allyship, and lifting up others in the space. Educators, tech leaders, policy makers, and researchers took the stage to discuss how we all can work together to make quantum computing diverse and inclusive-- starting today.",
        ppLink: "https://www.qubitbyqubit.org/conference",
        isExternal: true,
    },
    {
        ppImg: "/images/blackboard.jpeg",
        ppTitle:
            "Quantum Computing Summer Camp 2020",
        ppDesc: "Sponsored by Google AI and IBM Quantum, QxQ developed the first of its kind Quantum Camp for High School Students. With nearly 300 high school students from diverse backgrounds - 53% female; 43% low SES; and 40% students of color - MIT PhD researchers led this intensive week-long camp exposing students to quantum computing and teaching them tangible quantum skills. Students loved the camp: 98% said they would recommend the camp to a friend; 93% liked or loved the camp; and 88% are interested in studying quantum in the future.",
        ppLink: "https://the-cs.medium.com/preparing-for-the-jobs-of-the-future-mit-physicists-are-making-quantum-computing-accessible-to-230e04fb0ff8",
        isExternal: true,
    },
    {
        ppImg: "/images/red_blue_hoodie.jpg",
        ppTitle:
            "Quantum Computing Workshop for Middle School Students",
        ppDesc: "Be one of the first middle school students in the world to learn quantum computing - the technology that will change the world as we know it today! Join us for a <b style="color: gold;">free</b> "Introduction to Quantum Computing" workshop for middle school students. In this interactive session developed and led by MIT PhD Dr. Sarah Goodman, we'll learn about the quantum world and how it is being used to make the most powerful computers ever - quantum computers!",
        ppLink: "/",
        isExternal: false,
    },
];

function NextArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} up-next-item`} onClick={onClick} />;
}
function PrevArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} up-prev-item`} onClick={onClick} />;
}

function Home() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The Coding School awarded $3 million grant"
                />
            </Helmet>
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
                                                <div className="col-lg-4 mb-30 mb-lg-0">
                                                    <div className="postBox">
                                                        <div className="postBox-wrap">
                                                            <img
                                                                src={
                                                                    item["img"]
                                                                }
                                                                alt="students"
                                                            />
                                                            <h6>
                                                                {item["title"]}
                                                            </h6>
                                                            <h5 className="pbW-sub-title">
                                                                {
                                                                    item[
                                                                        "subTitle"
                                                                    ]
                                                                }
                                                            </h5>
                                                            {item[
                                                                "isExternal"
                                                            ] ? (
                                                                <a
                                                                    href={
                                                                        item[
                                                                            "link"
                                                                        ]
                                                                    }
                                                                    className="link"
                                                                >
                                                                    Learn More
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    to={
                                                                        item[
                                                                            "link"
                                                                        ]
                                                                    }
                                                                    className="link"
                                                                >
                                                                    Learn More
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        ) : (
                                            <Fade right>
                                                <div className="col-lg-4 mb-30 mb-lg-0">
                                                    <div className="postBox">
                                                        <div className="postBox-wrap">
                                                            <img
                                                                src={
                                                                    item["img"]
                                                                }
                                                                alt="students"
                                                            />
                                                            <h6>
                                                                {item["title"]}
                                                            </h6>
                                                            <h5 className="pbW-sub-title">
                                                                {
                                                                    item[
                                                                        "subTitle"
                                                                    ]
                                                                }
                                                            </h5>
                                                            {item[
                                                                "isExternal"
                                                            ] ? (
                                                                <a
                                                                    href={
                                                                        item[
                                                                            "link"
                                                                        ]
                                                                    }
                                                                    className="link"
                                                                >
                                                                    Learn More
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    to={
                                                                        item[
                                                                            "link"
                                                                        ]
                                                                    }
                                                                    className="link"
                                                                >
                                                                    Learn More
                                                                </Link>
                                                            )}
                                                        </div>
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

                <div className="brown-sec mb-70" id="upcomingPrograms">
                    <div className="container">
                        <h2>Upcoming Summer Programs</h2>
                    </div>
                </div>

                <div className="upcoming-programs">
                    <div className="container">
                        <div
                            className="nav upcomingProgramsTab mb-30"
                            role="tablist"
                        >
                            <a
                                id="k2-pro2-tab"
                                data-toggle="tab"
                                href="#k2-pro2"
                                role="tab"
                                aria-controls="k2-pro2"
                                aria-selected="false"
                            >
                                <h6 className="tab-title">University</h6>
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
                                <h6 className="tab-title">Educators</h6>
                            </a>
                        </div>
                    </div>

                    <div
                        className="tab-content mb-50"
                        id="upcomingProgramsTabContent"
                    >
                        <div
                            className="tab-pane fade show active"
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
                                                        <h5>
                                                            {item["subTitle"]}
                                                        </h5>
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
                                                                target="_blank"
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
                                            </Fade>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="k2-pro2"
                            role="tabpanel"
                            aria-labelledby="k2-pro2-tab"
                        >
                            <div className="programPost">
                                <div className="row justify-content-center">
                                    {programPostUniversity.map(
                                        (item, index) => {
                                            return (
                                                <Fade bottom>
                                                    <div className="col-12 col-md-8 col-xl-6">
                                                        <div className="programPost-item non-carousel">
                                                            <div className="programPost-img">
                                                                <img
                                                                    src={
                                                                        item[
                                                                            "img"
                                                                        ]
                                                                    }
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="programPost-desc">
                                                                <h4>
                                                                    {
                                                                        item[
                                                                            "title"
                                                                        ]
                                                                    }
                                                                </h4>
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
                                                                {item[
                                                                    "isExternal"
                                                                ] ? (
                                                                    <a
                                                                        href={
                                                                            item[
                                                                                "link"
                                                                            ]
                                                                        }
                                                                        className="btn btn-gradient-2 text-white rounded-0"
                                                                    >
                                                                        Learn
                                                                        More
                                                                    </a>
                                                                ) : (
                                                                    <Link
                                                                        to={
                                                                            item[
                                                                                "link"
                                                                            ]
                                                                        }
                                                                        className="btn btn-gradient-2 text-white rounded-0"
                                                                    >
                                                                        Learn
                                                                        More
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="k2-pro3"
                            role="tabpanel"
                            aria-labelledby="k2-pro3-tab"
                        >
                            <div className="programPost">
                                <div className="row justify-content-center">
                                    {programPostEducators.map(
                                        (item, index, arr) => {
                                            return (
                                                <Fade bottom>
                                                    <div
                                                        className={`col-12 col-md-6 col-lg-5 col-xl-4 ${
                                                            index ===
                                                            arr.length - 1
                                                                ? ""
                                                                : "mb-30 mb-md-0"
                                                        } `}
                                                    >
                                                        <div className="programPost-item">
                                                            <div className="programPost-img">
                                                                <img
                                                                    src={
                                                                        item[
                                                                            "img"
                                                                        ]
                                                                    }
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="programPost-desc">
                                                                <h4>
                                                                    {
                                                                        item[
                                                                            "title"
                                                                        ]
                                                                    }
                                                                </h4>
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
                                                                {item[
                                                                    "isExternal"
                                                                ] ? (
                                                                    <a
                                                                        href={
                                                                            item[
                                                                                "link"
                                                                            ]
                                                                        }
                                                                        className="btn btn-gradient-2 text-white rounded-0"
                                                                    >
                                                                        Learn
                                                                        More
                                                                    </a>
                                                                ) : (
                                                                    <Link
                                                                        to={
                                                                            item[
                                                                                "link"
                                                                            ]
                                                                        }
                                                                        className="btn btn-gradient-2 text-white rounded-0"
                                                                    >
                                                                        Learn
                                                                        More
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 mx-auto">
                                <div id="past-programs">
                                    <div id="accordion">
                                        <div className="card">
                                            <div
                                                className="card-header p-0"
                                                id="headingOne"
                                            >
                                                <h5 className="mb-0">
                                                    <button
                                                        className="btn btn-link"
                                                        data-toggle="collapse"
                                                        data-target="#pastPrograms"
                                                        aria-expanded="false"
                                                        aria-controls="pastPrograms"
                                                    >
                                                        View Past Programs
                                                        <DropIcon />
                                                    </button>
                                                </h5>
                                            </div>

                                            <div
                                                id="pastPrograms"
                                                className="collapse"
                                                aria-labelledby="headingOne"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    {pastPrograms.map(
                                                        (e, i) => {
                                                            return (
                                                                <div className="pp-wrap">
                                                                    <div className="ppImg">
                                                                        <img
                                                                            src={
                                                                                e[
                                                                                    "ppImg"
                                                                                ]
                                                                            }
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                    <div className="ppCont">
                                                                        <h5 className="ppc-title">
                                                                            {
                                                                                e[
                                                                                    "ppTitle"
                                                                                ]
                                                                            }
                                                                        </h5>
                                                                        <p className="ppc-desc">
                                                                            {
                                                                                e[
                                                                                    "ppDesc"
                                                                                ]
                                                                            }
                                                                        </p>
                                                                        {e[
                                                                            "isExternal"
                                                                        ] ? (
                                                                            <a
                                                                                href={
                                                                                    e[
                                                                                        "ppLink"
                                                                                    ]
                                                                                }
                                                                                target="_blank"
                                                                                className="text-blue-gradient-2"
                                                                            >
                                                                                Learn
                                                                                More
                                                                            </a>
                                                                        ) : (
                                                                            <Link
                                                                                to={
                                                                                    e[
                                                                                        "ppLink"
                                                                                    ]
                                                                                }
                                                                                className="text-blue-gradient-2"
                                                                            >
                                                                                Learn
                                                                                More
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="eng-bg"
                    style={{
                        backgroundImage: `url("/images/eng-bg-old-1.png")`,
                    }}
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
                                        To expand the pool of qualified talent
                                        and increase diversity in tech, every
                                        student needs access to high quality
                                        computer science education. We’re making
                                        that a reality. Taught by PhD
                                        researchers and professional software
                                        engineers, our students gain in-depth
                                        knowledge and real world skills in
                                        emerging technologies, such as AI and
                                        Quantum Computing, that they would not
                                        otherwise have access to.{" "}
                                    </p>
                                    <p>
                                        Our model offers virtual courses with
                                        live instruction, teaching nearly 10,000
                                        students in a single course with
                                        staggeringly impressive outcomes.
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
                        <div className="row align-items-center mt-50 eng-bg-bottom">
                            <div className="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                                <h5>
                                    <CountUp end={80} duration={3.75} />
                                    %+
                                </h5>
                                <p>
                                    Over 80% completion rate in 8-month virtual
                                    courses
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                                <h5>
                                    <CountUp end={99} duration={3.75} />%
                                </h5>
                                <p>
                                    of students are more likely to take a STEM
                                    class in college after the course
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                                <h5>
                                    <CountUp end={98} duration={3.75} />%
                                </h5>
                                <p>
                                    of students would recommend the course to
                                    their friends
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 text-center mb-30 mb-lg-0">
                                <h5>
                                    <CountUp end={95} duration={3.75} />%
                                </h5>
                                <p>
                                    of students are more interested in pursuing
                                    a STEM career.
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
                                                <span className="text-gold">
                                                    Partners
                                                </span>
                                            </h3>
                                        </Fade>
                                        <Fade bottom>
                                            <p>
                                                Accredited by the Western
                                                Association of Schools and
                                                Colleges (WASC), your K-12
                                                students can earn transcript
                                                credit in emerging technologies
                                                such as AI and Quantum
                                                Computing.{" "}
                                            </p>
                                            <p>
                                                Hundreds of schools and
                                                districts across the U.S. from
                                                the Hawaii Department of
                                                Education to the Cleveland
                                                School District have partnered
                                                with The Coding School to ensure
                                                their students receive the
                                                highest quality and most
                                                cutting-edge STEM education
                                                possible. The Coding School's
                                                Qubit by Qubit Introduction to
                                                Quantum Computing Course is also
                                                A-G approved by the University
                                                of California as an accepted
                                                college preparatory course.{" "}
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
        </>
    );
}

export default Home;

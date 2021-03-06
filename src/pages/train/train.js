import React from "react";

import "./css/animate.css";
import "./css/aos.css";

import "./css/custom.css";
import "./css/font-awesome.css";
import "./css/fonts.css";
import "./css/owl.carousel.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.css";
import "./css/rwd.css";
import "./css/slick-theme.css";
import "./css/slick.css";
import "./train.scss";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";

const Train = (props) => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The Coding School awarded $3 million grant"
                />
            </Helmet>
            <div id="trainPage">
                <section className="banner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-xl-7">
                                <div className="headline" data-aos="zoom-in">
                                    <h1>
                                        <span className="train-logo">
                                            <span className="tl-gray-dark">
                                                TR
                                            </span>
                                            <span className="text-brand-light">
                                                AI
                                            </span>
                                            <span className="tl-gray-dark">
                                                N
                                            </span>
                                            <span className="tl-gray-light">
                                                ING
                                            </span>
                                        </span>
                                        <span className="d-block text-blue-gradient">
                                            The Next Generation of
                                        </span>{" "}
                                        <span className="text-brand-light d-inline-block">
                                            AI
                                        </span>{" "}
                                        LEADERS AND EDUCATORS
                                    </h1>
                                </div>
                                <div
                                    className="tagline train-page-tagline mt-40"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    {/* <h4>This initiative is proudly funded by the Department of Defense National Defense Education Program</h4> */}
                                    <h4>
                                        This initiative is proudly funded by
                                    </h4>
                                    <img
                                        src={require("./images/dod-stem-dark.png")}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-8 col-lg-6 col-xl-5 train-lottier-player mx-auto">
                                <Player
                                    autoplay={true}
                                    loop={true}
                                    controls={true}
                                    src="https://assets2.lottiefiles.com/packages/lf20_wjngbsl7.json"
                                ></Player>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row mt-70">
                        <div className="col-12 col-md-11 mx-auto">
                            <div className="train-banner-below ">
                                <div className="shadowed-box">
                                    <div
                                        className="tagline"
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    >
                                        <div className="d-flex flex-wrap justify-content-center">
                                            <div className="bg-blue-gradient p-15 rounded">
                                                <h6 className="mb-0 text-bold">
                                                    ???[Artificial Intelligence]
                                                    will be the most powerful
                                                    tool in generations for
                                                    benefiting humanity.???{" "}
                                                </h6>
                                                <h6 className="my-0">
                                                    -U.S. National Security
                                                    Commission on Artificial
                                                    Intelligence
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="desc"
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                    >
                                        <p class="text-dark">
                                            Artificial Intelligence (AI) will
                                            change the world as we know it,
                                            shaping how business is done, how
                                            people connect, and how society
                                            functions. It will affect every
                                            industry and sector, making it
                                            critical that all members of the
                                            future workforce have an
                                            understanding of AI and its
                                            implications. So whether students
                                            plan on pursuing careers in
                                            politics, business, or healthcare,
                                            they all need to learn about AI.{" "}
                                            <span className="text-blue-gradient text-bold">
                                                That???s why we???re providing
                                                in-depth, real-world AI skills
                                                and knowledge to thousands of
                                                high school students and
                                                educators around the United
                                                States.
                                            </span>
                                        </p>
                                    </div>

                                    <div className="more" data-aos="zoom-in">
                                        <a href="#introduction">
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section_1" id="introduction">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-md-4"></div>
                            <div className="col-md-6">
                                <div
                                    className="headline"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    <h2>
                                        FUTURE AI LEADERS{" "}
                                        <span class="bar-overline">
                                            <span className="bo-text">
                                                PROGRAM
                                            </span>
                                        </span>{" "}
                                    </h2>
                                </div>
                                <div
                                    className="desc"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    {/* <p class="text-dark">In collaboration with USC???s Viterbi School of Engineering, we???re offering two, first-of-its-kind programs for high school students and educators focused on Machine Learning (ML), a subfield of Artificial Intelligence. Main components of our program include:</p> */}
                                    <p>
                                        The Coding School is offering two,{" "}
                                        <span className="text-bold">
                                            first-of-its-kind programs
                                        </span>{" "}
                                        for high school students and educators
                                        to gain real-world skills and knowledge
                                        in Machine Learning (ML), a subfield of
                                        Artificial Intelligence.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="offset-md-4"></div> */}
                            <div className="offset-md-2"></div>
                            <div className="offset-md-4"></div>
                            <div className="col-md-4">
                                <h5 className="mt-30">
                                    Students and Educators
                                </h5>
                                <div
                                    className="main bg-blue-gradient"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                >
                                    <div className="tagline">
                                        <h3>
                                            Introduction to Machine Learning
                                            Course
                                        </h3>
                                    </div>
                                    <div className="desc">
                                        {/* <p className="text-white">A two-semester, for-credit course for high school students and educators beginning in September 2022. <a href="https://airtable.com/shrQcXGeOnE8o7Kxa" target="_blank">Sign Up</a></p> */}
                                        <p className="text-white">
                                            A two-semester, for-credit course
                                            for high school students and
                                            educators with weekly lecture + lab
                                            beginning in September 2022.
                                        </p>
                                        <p className="text-white">
                                            Highlights:
                                        </p>
                                        <ul className="list-check">
                                            <li>Learn real skills in AI/ML</li>
                                            <li>
                                                National lab tours &amp;
                                                projects
                                            </li>
                                            <li>Industry expert Q&amp;A???s </li>
                                            <li>AI career path panels</li>
                                            <li>No previous coding required</li>
                                        </ul>
                                        <a
                                            className="btn btn-gradient-2 text-white"
                                            href="https://airtable.com/shrQcXGeOnE8o7Kxa"
                                            target="_blank"
                                        >
                                            Sign Up For More Information
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h5 className="mt-30">Educators</h5>
                                <div
                                    className="main bg-blue-gradient"
                                    data-aos="fade-left"
                                    data-aos-duration="600"
                                >
                                    <div className="tagline">
                                        <h3>
                                            Summer Intensive PD for Educators
                                        </h3>
                                    </div>
                                    <div className="desc">
                                        <p className="text-white">
                                            A four-week professional development
                                            (PD) course for high school
                                            educators and community college
                                            faculty in July 2022.
                                        </p>
                                        <p className="text-white">
                                            Highlights:
                                        </p>
                                        <ul className="list-check">
                                            <li>
                                                Bring ML into your classroom
                                            </li>
                                            <li>Teaching support </li>
                                            <li>CEU opportunity</li>
                                            <li>Stipend provided</li>
                                            <li>Community of STEM educators</li>
                                        </ul>
                                        <a
                                            className="btn btn-gradient-2 text-white"
                                            href="https://airtable.com/shr4CIVyf5KoYVZZF"
                                            target="_blank"
                                        >
                                            Apply
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-md-4"></div>
                            <div className="col-md-8">
                                {/* <div className="box">
                                    <h4>Year long course  funded by <span> DoD </span>STEM to...</h4>
                                </div> */}
                                <div
                                    className="desc"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    <p class="text-dark text-center">
                                        To ensure{" "}
                                        <span className="text-bold">
                                            accessibility
                                        </span>
                                        , all programming is virtual, meaning
                                        students and educators from anywhere in
                                        the United States can participate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div
                                    className="tagline"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    <h4>Educators and School Administrators</h4>
                                </div>
                                <div
                                    className="headline"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <h2>
                                        BRING{" "}
                                        <span class="text-brand-light">AI</span>{" "}
                                        TO YOUR SCHOOL
                                    </h2>
                                </div>
                                <div
                                    className="desc"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    <p>
                                        Our goal is to provide every high school
                                        student with real world AI skills.
                                        Currently, there are not enough
                                        qualified high school educators to teach
                                        AI in high schools. We???ve partnered with
                                        100+ schools and school districts to
                                        bring education in emerging technologies
                                        to students around the U.S. and globe.
                                        Be one of the first schools to offer
                                        students the chance to learn about the
                                        exciting world of AI.
                                    </p>
                                    <a
                                        href="https://airtable.com/shrtYbn1ghbtxvOdM"
                                        target="_blank"
                                        className="btn btn-gradient-2 text-white"
                                    >
                                        Connect With Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </div>
                </section>

                <section className="section_5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div
                                    className="main"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <div className="headline">
                                        <h4>
                                            Offer As A For-Credit Or Afterschool
                                            Course
                                        </h4>
                                    </div>
                                    <div className="desc">
                                        <p>
                                            <span class="text-bold">
                                                Nationally accredited by WASC
                                            </span>
                                            , we offer our two-semester
                                            Introduction to ML course for high
                                            school credit at participating
                                            schools and school districts. We
                                            provide the weekly instruction;
                                            assignments, including problem sets,
                                            homework and projects; and grading
                                            and transcripts; all that we require
                                            of participating schools is that
                                            they approve to offer the course for
                                            transcript credit. We work with
                                            individual schools, school
                                            districts, and statewide DOEs. This
                                            course is fully funded by DoDSTEM
                                            and there is no cost to our school
                                            partners or students. To learn more
                                            about how to offer this course for
                                            credit complete the form below.
                                        </p>
                                    </div>
                                    <a
                                        class="btn btn-primary-gradient text-upper text-white text-bold py-10 mt-20 rounded-0"
                                        href="https://airtable.com/shrtYbn1ghbtxvOdM"
                                        target="_blank"
                                    >
                                        Connect with Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="main"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    <div className="headline">
                                        <h4>
                                            Professional Development Course For
                                            Educators
                                        </h4>
                                    </div>
                                    <div className="desc">
                                        <p>
                                            High school educators and community
                                            college faculty have two
                                            professional development (PD)
                                            opportunities: a 4-week summer
                                            intensive or participating in the
                                            two-semester Introduction to ML
                                            course, in which educators will have
                                            a weekly lab section specifically
                                            designed for teachers. Educators
                                            will develop in-depth ML knowledge,
                                            receive curriculum they can
                                            integrate into their existing
                                            curricula, and join an online
                                            community of like-minded educators
                                            who are bringing AI into their
                                            classrooms. Teachers will receive
                                            {/* Continuing Education Units (CEUs)
                                            and */}{" "}
                                            a stipend upon completion of the
                                            training.
                                        </p>
                                    </div>
                                    <a
                                        class="btn btn-primary-gradient text-upper text-white text-bold py-10 mt-20 rounded-0"
                                        href="https://airtable.com/shr4CIVyf5KoYVZZF"
                                        target="_blank"
                                    >
                                        Apply
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="headline"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    <h2>
                                        {" "}
                                        <span> AI Board</span> &amp; Advisors
                                    </h2>
                                </div>
                                <div>
                                    <h4 className="text-center">
                                        {" "}
                                        We work with leading experts in AI to
                                        ensure our students are inspired and
                                        receive the most cutting-edge, high
                                        quality education possible.{" "}
                                    </h4>
                                </div>
                                <ul>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-4.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>
                                                    Chief Master Sgt. James
                                                    Fitch II
                                                </h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Command Chief, Air Force
                                                    Research Laboratory
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-2.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Dr. Manuela Veloso</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Head of AI Research at J.P.
                                                    Morgan & President AAA
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/david-s-touretzky.jpg")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Dr. Dave Touretzky</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Research Professor at
                                                    Carnegie Mellon University
                                                    and Chair of AI4K12
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-5.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Dr. Polina Golland</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    MIT, CS & EE Professor at
                                                    MIT
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="900"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-10.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Dr. Nathaniel Bastian</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Assistant Professor of
                                                    Operations Research & Data
                                                    Science at West Point
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-6.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Dr. Hal Abelson</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Computer Science Professor
                                                    at MIT
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="1100"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/jeremy-howard.jpg")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Jeremy Howard</h4>
                                            </div>
                                            <div className="position">
                                                <p>Co-Founder at fast.ai</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-8.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Dr. Yolanda Gil</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Director for Strategic AI
                                                    and Data Science Initiatives
                                                    & Professor at USC
                                                </p>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="1300"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-3.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Ben Isecke</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                President of NJ CSTA &amp; CS Teacher at Bergen County Academies
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="1400"
                                    >
                                        <div className="main">
                                            <div className="pic">
                                                <img
                                                    src={require("./images/team-1.png")}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="title">
                                                <h4>Andrew Oliver</h4>
                                            </div>
                                            <div className="position">
                                                <p>
                                                    Cloud and AI SWE at
                                                    Microsoft
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-md-2"></div>
                            <div className="col-md-6">
                                <div
                                    className="tagline mb-20"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                >
                                    <h3>Our Partners & Collaborators</h3>
                                </div>
                                {/*<div className="tagline" data-aos="fade-right" data-aos-duration="600">
                                    <h2><span>DOD</span> partnership and USC</h2>
                            </div>*/}
                                <div
                                    className="desc"
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                >
                                    <p>
                                        {" "}
                                        To ensure the most engaging, high
                                        quality AI experience, we are proudly
                                        partnered with:{" "}
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-10">
                                        <div
                                            className="img mb-60"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                        >
                                            <ul className="partners">
                                                {/* <li>
                                            <img
                                                src={require("./images/2e77697f538befb44e5e9a40f5775d2a.png")}
                                            />
                                        </li> */}
                                                <li>
                                                    <img
                                                        src={require("./images/partner-1.png")}
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={require("./images/partner-2.png")}
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={require("./images/partner-3.png")}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tagline mb-20"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                >
                                    <h3>Our Sponsor</h3>
                                </div>
                                <div
                                    className="desc"
                                    data-aos="fade-up"
                                    data-aos-duration="`1000"
                                >
                                    <p>
                                        We are honored that this project is
                                        supported by a three-year grant award
                                        from the United States{" "}
                                        <a
                                            className="text-blue-gradient-2 self-underlined position-relative d-inline-block"
                                            href="https://dodstem.us/about/partners/?tab=grantees"
                                            target="_blank"
                                        >
                                            Department of Defense
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://www.cto.mil/news/47-million-grants-ndep/"
                                            target="_blank"
                                            className="text-blue-gradient self-underlined position-relative d-inline-block"
                                        >
                                            National Defense Education Program
                                        </a>
                                    </p>
                                </div>
                                <ul className="sponsor">
                                    <li
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                    >
                                        <img
                                            src={require("./images/sponsors-logo.png")}
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="offset-md-1"></div>
                            <div className="col-md-3">
                                <div className="pic">
                                    <img
                                        src={require("./images/earth-and-connections.png")}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"></div>
                        </div>
                    </div>
                </section>

                <section className="section-disclaimer">
                    <div className="container">
                        <p className="text-center">
                            <small>This material is based upon work supported by the National Defense Education Program (NDEP) for Science, Technology, Engineering, and Mathematics (STEM) Education, Outreach, and Workforce Initiative Programs under Grant No. HQ0034-22-1-0006. The views expressed in written materials or publications, and/or made by speakers, moderators, and presenters, do not necessarily reflect the official policies of the Department of Defense nor does mention of trade names, commercial practices, or organizations imply endorsement by the U.S. Government.</small>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Train;

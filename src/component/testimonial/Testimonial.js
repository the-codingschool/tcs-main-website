import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import "./testimonial.scss";
import Fade from "react-reveal/Fade";

const schoolPartnersTestimonials = [
    {
        name: "Nimmi Arunachalam, Palm Beach County, Florida",
        testimony:
            " I highly recommend this opportunity to all students and teachers who are curious about the role of quantum computing in our futures.",
        image: "images/testimonials/Nimmi Photo new (6).jpg",
    },
    {
        name: "Heather Pereira",
        testimony:
            "Qubit by Qubit has been a wonderful partner to work with. From assisting with ensuring that the course is approved by the University of California to providing a streamlined and straightforward enrollment process, the management of the course has been great.",
        image: "images/testimonials/heather.jpeg",
    },
    {
        name: "William K. Funderburk",
        testimony:
            "My own participation in this course has resulted in an overall better physics curriculum at my school! and I'm very thankful I met them. I'm so pleased to recommend their high-school course in Quantum Computing to any high school.",
        image: "images/testimonials/william.jpg",
    },
    {
        name: "Ben Iseke, Bergen County Academies",
        testimony:
            "The program runners at Qubit by Qubit are incredibly devoted educators. Their willingness to engage with feedback showed how much they wanted the program to be deeply excellent, and that dedication showed in every aspect of the program that I got a chance to see. The program is genuinely incredible, and undoubtedly life-changing for many of the students that they work with. QxQ is creating the future that we need.",
        image: "images/testimonials/ben-iseke.jpg",
    },
    {
        name: "Maajida Murdock, Math instructor, Baltimore County Public School",
        testimony:
            "I have seen how presenting opportunities to a student has broadened their vision of themself in a STEM field with determination. My students' experience with Qubit by Qubit brought out a sense of confidence in their ability as a coder.",
        image: "images/testimonials/Maajida-nano.png",
    },
    {
        name: "William K. Funderburk",
        testimony:
            "My own participation in this course has resulted in an overall better physics curriculum at my school! and I'm very thankful I met them. I'm so pleased to recommend their high-school course in Quantum Computing to any high school.",
        image: "images/testimonials/william.jpg",
    },
    {
        name: "Amanda Giuliani, STEM Coordinator and Teacher, Longmont, Colorado",
        testimony:
            "Time is always of the essence for teachers, and this program provides everything I could possibly need to run the course in my school. The content is presented in an engaging way, and there are ample opportunities to make the online coursework align with my busy schedule. I am so thankful I learned about Qubit x Qubit!",
        image: "images/testimonials/IMG_0081.jpg",
    },
    {
        name: "Audrey Wei, CS teacher, Bishop Amat high school",
        testimony:
            "I highly recommend all students all of the world to take the class to help them prepare for the quantum computing world.",
        image: "images/testimonials/IMG_1363.jpg",
    },
    {
        name: "Charles Shryock, Assistant Principal, Bishop McNamara High School",
        testimony:
            "The Qubit by Qubit teachers have taken a mysterious, futuristic, complex subject and made it clear and accessible. Students say the pacing, workload, and engaging lectures and activities are perfect for them. I find it tremendously exciting to see their progress, and watch their confidence grow week by week. And I am grateful that Qubit by Qubit made it so easy to enroll and support new students.",
        image: "images/testimonials/ShryockHeadshot_Qubit.jpg",
    },
    {
        name: "Brett Tanaka, Computer Science Educational Specialist, Hawaii State Department of Education",
        testimony:
            "We appreciate the Introduction to Quantum Computing virtual learning opportunities by Qubit by Qubit that are accessible to our students. This opportunity is very helpful for our rural schools that may not have the capacity to offer computer science courses in new emerging CS education areas such as quantum computing. Thank you to the Qubit by Qubit Team!",
        image: "images/testimonials/Brett Tanaka Headshot (1).png",
    },
    {
        name: "Chris Lynch, STEM Manager, Arkansas Department of Career Education",
        testimony:
            "My students have grown tremendously in understanding quantum circuits, and I enjoy watching them explain concepts during the Zoom class meetings. This program is a very important first step in creating a cadre of quantum programmers and developers as quantum computing becomes moves into the mainstream of information processing.",
        image: "images/testimonials/chris.jpg",
    },
    {
        name: "Michelle Fujie",
        testimony:
            "I must admit after experiencing the program, I was envious to see that The Coding School found the perfect mix allowing students to be actively engaged and continuously learning even while on a virtual platform! As a math educator of over 11 years, I found myself eager to be a student again, actively taking notes, and engaging in meaningful conversations while learning something new every day.",
        image: "images/testimonials/IMG_8696.JPG",
    },
    {
        name: "Dr. Narineh Makijan, Professor at USC, Rossier School of Education",
        testimony:
            "The Coding School in collaboration with IBM Quantum has created an innovative introduction to quantum computing course for high school students that is taught by esteemed MIT and Oxford quantum scientists.",
        image: "images/testimonials/Makijan Picture.jpg",
    },
    {
        name: "Chris Lo, Math, Computer Science, Engineering teacher",
        testimony:
            "The content was thorough, engaging, and very well designed with sparking curiosity and learning in mind. I strongly believe that any visiting teacher to the camp would approve of the pedagogy and method of delivery these lessons demonstrated.",
        image: "images/testimonials/1516524787342.jpg",
    },
];

const instructorTestimonials = [
    {
        name: "Anthony, Google",
        testimony:
            "“<span class='text-bold'>I wish</span> I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg",
    },
    {
        name: "Kelly, Amazon, TCS Advisory Board",
        testimony:
            "[At The Coding School] the people who are teaching you are highly qualified people. The best students who came out of the best universities and now working at the best companies and they’re spending their time wanting to help [students] learn more. That’s a resource that not a lot of people could ever find in their normal life.",
        image: "images/testimonials/kelley-ellis.jpeg",
    },
    {
        name: "A.J., TCS instructor, JP Morgan Chase",
        testimony:
            "I think it’s very important to introduce high school students to this technology. I think this is the way you lower the barrier to entry and get people from many different backgrounds into the field.",
        image: "images/testimonials/AJ DiDonato III - JP Morgan.jpg",
    },
    {
        name: "Aziza, QxQ TA, MIT",
        testimony:
            "I think it’s very important to introduce high school students to this technology. I think this is the way you lower the barrier to entry and get people from many different backgrounds into the field.",
        image: "images/testimonials/Aziza-e1594246955302-300x300.jpg",
    },
    {
        name: "Sanskriti - QxQ TA, North Carolina State University",
        testimony: "I am sure I have multiple Noble Prize winners in my labs.",
        image: "images/testimonials/Sanskriti.jpg",
    },
    {
        name: "Shayda, QxQ TA, MIT",
        testimony:
            "The more time I spent teaching, the more I learned about the impact I can have on someone’s future. I left this summer with a new passion to leverage the power of technology to bring students from diverse backgrounds together and teach each other that we all share so much more in common than we are different.",
        image: "images/testimonials/Shayda.png",
    },
    {
        name: "Ricky, QxQ TA, University of Connecticut",
        testimony:
            "I can’t count how many times a student has asked a question that has me pause and think, ‘I’ve never thought of that.’ They prove to me over and over that they are the future of quantum.",
        image: "images/testimonials/Ricky.png",
    },
    {
        name: "Alev, QxQ TA, University of Waterloo ",
        testimony: "I wish I had this kind of community when I first started.",
        image: "images/testimonials/Alev.png",
    },
    {
        name: "Yao, codeConnects instructor, Harvard",
        testimony:
            "The best part about the codeConnects community is that all of the teaching staff believe in and are passionate about education advocacy and really making computer science accessible to everyone and making it fun at the same time.",
        image: "images/testimonials/Yao.jpg",
    },
    {
        name: "Isabelle, codeConnects instructor, Microsoft",
        testimony:
            "What’s really awesome about the [codeConnects] program is that the instructors are mainly college students or recent grads close to the age of the students. I think it’s really important that students in middle and high school have someone close in age they can look up to as a mentor - especially if that person looks like them, talks like them and has a background similar to them.",
        image: "images/testimonials/Isabelle.jpg",
    },
    {
        name: "Jack, codeConnects instructor, Duke University",
        testimony:
            "I think what The Coding School does with their 1:1 lessons format and having instructors be full time mentors and moving at any pace [for the student] results in learning in the most effective way. It’s something I’ve never experienced before and it’s super refreshing and effective.",
        image: "images/testimonials/Jack Wood.jpg",
    },
    {
        name: "Rishi, codeConnects instructor, Google",
        testimony:
            "I think learning all the [tough] parts of coding and syntax is done better with a friend. I see myself as a friend and a mentor for the students I’ve had a chance to work with. And it’s been a really powerful experience.",
        image: "images/testimonials/Rishi.jpg",
    },
    {
        name: "Aaron, TCS instructor, Microsoft",
        testimony:
            "It’s so exciting for me to be able to teach someone across the country. I see the excitement in his eyes every time he makes a circle bouncing across the screen. It’s immediately rewarding and inspiring. I love it.",
        image: "images/testimonials/Aaron.png",
    },
    {
        name: "Anthony Mirand, Google",
        testimony:
            "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg",
    },
];

const studentTestimonials = [
    {
        name: "University student, England",
        testimony:
            "My time at QxQ has been nothing short of a truly incredible experience.",
        image: "images/testimonials/Image.jpg",
    },
    {
        name: "11th grader, New York",
        testimony:
            "“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”",
        image: "images/testimonials/michelle.jpg",
    },
    {
        name: "High school student, Kenya",
        testimony:
            " I will forever be <span class='text-bold'>grateful to Qubit by Qubit</span> for giving me a chance to take part in this program, and finally <span class='text-bold'>revolutionize African women and their achievements in the scientific and technological community.</span>",
        image: "images/testimonials/allsmiles._Love_and_smiles. (1).jpg",
    },
    {
        name: "12th grader, Texas",
        testimony:
            "<span class='text-bold'>I LOVED THE CAMP!</span> There are many students such as myself whether that be minority, low income, etc. who, by nature of social and systematic marginalization, lack many opportunities and chances of exposure...I had never heard of Quantum Coding before this camp, let alone thought that I would enjoy it! <span class='text-bold'>This camp and this scholarship gave me an opportunity and a new liking for another field of STEM study that without it, I would not have known anything about!</span>",
        image: "images/testimonials/testimonial-12th grade boy TX.jpg",
    },
    {
        name: "12th grader, Arizona",
        testimony:
            "This camp has honestly been <span class='text-bold'>life-changing</span> and <span class='text-bold'>eye-opening!</span> I am looking forward to exploring quantum for the rest of my life.",
        image: "images/testimonials/testimonial-12th grade girl AZ.jpg",
    },
    {
        name: "High school student, USA",
        testimony:
            "While I identify as non-binary, I was assigned female at birth, and many individuals perceive me as such. <span class='text-bold'>[This program's] emphasis on diversity and inclusion really makes me feel welcome, and I feel genuinely safe</span> in this community. ",
        image: "images/testimonials/Sam - HS non-binary student.jpg",
    },
    {
        name: "12th grader, Australia",
        testimony:
            "This course is absolutely beautiful, it is pact with the introductory information into the world of quantum.",
        image: "images/testimonials/E204400A-5814-44A9-BD56-723354D6F74F.jpeg",
    },
    {
        name: "High school student, Scotland",
        testimony:
            "<span class='text-bold'>I am so thankful as my family are homeless and I would never have been able to do this course if it wasn't...free.</span> This is the beginning of my journey and future career and it is an amazing and exciting opportunity.",
        image: "images/testimonials/testimonial photo-Scotland boy (1).png",
    },
    {
        name: "11th grader, USA",
        testimony:
            "In regular STEM classes, when I look around the room, I’m one of the only girls. In this class, <span class='text-bold'>I was mentored by a female.</span> Learning quantum computing from someone that I know shared a similar if not more difficult experience in STEM <span class='text-bold'>inspired me to believe in myself</span> and chase after more complex sciences.",
        image: "images/testimonials/noora.jpg",
    },
    {
        name: "10th grader, Massachusetts",
        testimony:
            "Qubit by Qubit with IBM really changed my life! The course strengthened my math skills, increased my desire to explore STEM and hopefully one day become an Engineer or a student in college studying some type of math or programming heavy field!",
        image: "images/testimonials/07F1A90A-8D94-47DE-AD63-435D496A81B8.jpeg",
    },
    {
        name: "High school student family, California",
        testimony:
            "Wednesday night dinners now include a summary of quantum computing lab activities and a preview for my Saturday lab. While our Sunday mornings involve gathering in the living room with our laptops, logging into our Zoom meeting, & furthering our knowledge in quantum computing. <span class='text-bold'>This course has created a wonderful opportunity that includes academics and family time.</span>",
        image: "images/testimonials/Ramirez Family (1).jpg",
    },
    {
        name: "11th grader, Turkey",
        testimony:
            "It’s the small things that make this course feel inclusive… there are so many women here that you don’t feel out of place. <span class='text-bold'>It’s not a 'he thing.' It’s a smart people thing.</span>",
        image: "images/testimonials/Malak Elghriani.jpg",
    },
    {
        name: "11th grader, Pennsylvania",
        testimony:
            "When I heard about the Qubit by Qubit course, I knew I had to apply. This course has challenged my intuitions and exposed me to new realities of the micro-world. I love how this course and the field of quantum computing connect all of my favorite subjects: math; physics; and computer science.",
        image: "images/testimonials/etwitmyer.jpeg",
    },
    {
        name: "University student, Minnesota",
        testimony:
            "I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.",
        image: "images/testimonials/lucy.jpg",
    },
    {
        name: "10th grader, Canada",
        testimony:
            "As I attended lectures and participated in labs, my excitement for quantum computing only grew.",
        image: "images/testimonials/Ammielle Wambo Becker.jpg",
    },
    {
        name: "12th grader, Maryland",
        testimony:
            "This year of learning quantum computing changed my college plans. This course cemented my love for physics, and has made me pivot to pursue this in higher education through undergrad, through a masters and even a PhD. ",
        image: "images/testimonials/April-Jade-Rossouw-South-Africa-HS.jpg",
    },
];

var FeaturedSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // centerMode: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // centerMode: true,
            },
        },
    ],
};

const showMore = true;

const featuredPost = [
    {
        name: "1",
        title: "IBM",
        img: "/images/IBM-Logo-Design-1972-present-2.png",
        description:
            "IBM Quantum and Qubit by Qubit partner again to offer quantum computing course",
        link: "https://research.ibm.com/blog/quantum-coding-school",
    },
    {
        name: "1",
        title: "Quantum London",
        img: "/images/Logo_Banner_1920x700_whiteBG.webp",
        description: "Quantum summer-camp",
        link: "https://quantum-london5.passle.net/post/102g9gf/quantum-summer-camp",
    },
    {
        name: "1",
        title: "ACE-Ed",
        img: "/images/american-council-on-education-ace-logo-vector.png",
        description:
            "THE CODING SCHOOL & IBM QUANTUM OFFERING FREE QUANTUM COURSE TO 5,000 STUDENTS",
        link: "https://ace-ed.org/the-coding-school-ibm-quantum-offering-free-quantum-course-to-5000-students/",
    },
    {
        name: "1",
        title: "TechGig",
        img: "/images/TechGig.com_Logo.png",
        description:
            "IBM and The Coding School to offer free quantum education to 5000 students",
        link: "https://content.techgig.com/ibm-and-the-coding-school-to-offer-free-quantum-education-to-5000-students/articleshow/78538803.cms",
    },
    {
        name: "1",
        title: "CACM",
        img: "/images/2014-communications-of-the-acm.png",
        description:
            "MIT Researchers Lead High School Educational Initiative on Quantum Computing",
        link: "https://cacm.acm.org/careers/246701-mit-researchers-lead-high-school-educational-initiative-on-quantum-computing/fulltext?mobile=false",
    },
    {
        name: "1",
        title: "Agnes Irwin School",
        img: "/images/The-Agnes-Irwin-School-logo.png",
        description:
            "Two Juniors Accepted Into First-Ever Quantum Computing Course",
        link: "https://www.agnesirwin.org/about/news/news-detail-page/~board/news/post/two-juniors-accepted-into-first-ever-quantum-computing-course",
    },
    {
        name: "1",
        title: "Business Insider",
        img: "/images/BI_blue_background_vertical.png",
        description:
            "Preparing for the Jobs of the Future: The Coding School and MIT Physicists Are Making Quantum Computing Accessible",
        link: "https://markets.businessinsider.com/news/stocks/preparing-for-the-jobs-of-the-future-the-coding-school-and-mit-physicists-are-making-quantum-computing-accessible-to-high-school-students-this-summer-1029279911",
    },
    {
        name: "1",
        title: "Quantum Insider",
        img: "/images/FOR-SOCIALS-CLASSIC.png",
        description:
            "TQD Quantum Ethics Exclusive: Qubit by Qubit’s Mission is to Train a Diverse Quantum Workforce",
        link: "https://thequantuminsider.com/2021/03/01/tqd-quantum-ethics-exclusive-qubit-by-qubits-mission-is-to-train-a-diverse-quantum-workforce/",
    },
];

const partnersLogo = [
    {
        src: "/images/dod_stem.svg",
    },
    {
        src: "/images/google.png",
    },
    {
        src: "/images/ibm_q.png",
    },
    {
        src: "/images/ne.svg",
    },
    {
        src: "/images/usc.svg",
    },
];

const featuredLogo = [
    {
        src: "/images/mitnews.svg",
    },
    {
        src: "/images/los.svg",
    },
    {
        src: "/images/business-insider.svg",
    },
    {
        src: "/images/inside-quantum.svg",
    },
    {
        src: "/images/quantum-tech.svg",
    },
    {
        src: "/images/built-la.svg",
    },
    {
        src: "/images/american.svg",
    },
    {
        src: "/images/tech-gig.svg",
    },
    {
        src: "/images/s-logo.svg",
    },
];

var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
};

const testimonialsTab = [
    {
        href: "#students",
        testifierText: "Students",
        text: "Students",
    },
    {
        href: "#partner-school",
        testifierText: "Partners",
        text: "Partner Schools",
    },
    {
        href: "#instructors",
        testifierText: "Instructors",
        text: "Instructors",
    },
];

function Testimonial() {
    const [isActive, setIsActive] = useState(0);
    const [testifier, setTestifier] = useState("Students");

    const sliderRefStudent = useRef();
    const sliderRefPartners = useRef();
    const sliderRefInstructors = useRef();

    function handleOnClickStudent(e) {
        e.preventDefault();
        sliderRefStudent.current.slickGoTo(e.target.dataset.slide);
        setIsActive(e.target.dataset.slide);
    }

    function handleOnClickPartners(e) {
        e.preventDefault();
        sliderRefPartners.current.slickGoTo(e.target.dataset.slide);
        setIsActive(e.target.dataset.slide);
    }

    function handleOnClickInstructors(e) {
        e.preventDefault();
        sliderRefInstructors.current.slickGoTo(e.target.dataset.slide);
        setIsActive(e.target.dataset.slide);
    }

    function handleTestifierName(e) {
        setTestifier(e.target.dataset.testifier);
    }

    return (
        <div id="" className="testimonia-sec">
            <Fade top>
                <div className="container">
                    <div className="visual-text text-center mb-30">
                        <h3>Testimonials</h3>
                        <h5 className="text-thin">
                            A lot of Happy {testifier}
                        </h5>
                    </div>

                    <ul className="nav nav-tabs">
                        {testimonialsTab.map((e, i) => {
                            return (
                                <li className={i == "0" ? "active" : null}>
                                    <a
                                        className={i == "0" ? "active" : null}
                                        data-toggle="tab"
                                        href={e["href"]}
                                        data-testifier={e["testifierText"]}
                                        onClick={handleTestifierName}
                                    >
                                        {e["text"]}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Fade>

            <div
                className="testimonia-sec-bg"
                style={{
                    backgroundImage: `url("/images/testimonial-bg-new.png")`,
                }}
            >
                <div className="container">
                    <img
                        className="testimonials-quote"
                        src="images/quotes.png"
                    />
                    <div className="tab-content">
                        <div
                            id="students"
                            className="tab-pane fade in active show"
                        >
                            <div className="go-to-slide">
                                {studentTestimonials.map((item, index) => {
                                    return (
                                        <a
                                            key={index}
                                            className={
                                                isActive == index
                                                    ? "active"
                                                    : null
                                            }
                                            href="#"
                                            onClick={handleOnClickStudent}
                                        >
                                            <img
                                                src={`${item["image"]}`}
                                                data-slide={`${index}`}
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                            <ul className="testimonials">
                                <Slider {...settings} ref={sliderRefStudent}>
                                    {studentTestimonials.map((item, index) => {
                                        return (
                                            <li>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item[
                                                            "testimony"
                                                        ],
                                                    }}
                                                />
                                                <img src={`${item["image"]}`} />
                                                <h6>{item["name"]}</h6>
                                            </li>
                                        );
                                    })}
                                </Slider>
                            </ul>
                        </div>

                        <div id="partner-school" className="tab-pane fade">
                            <div className="go-to-slide">
                                {schoolPartnersTestimonials.map(
                                    (item, index) => {
                                        return (
                                            <a
                                                key={index}
                                                className={
                                                    isActive == index
                                                        ? "active"
                                                        : null
                                                }
                                                href="#"
                                                onClick={handleOnClickPartners}
                                            >
                                                <img
                                                    src={`${item["image"]}`}
                                                    data-slide={`${index}`}
                                                />
                                            </a>
                                        );
                                    }
                                )}
                            </div>
                            <ul className="testimonials">
                                <Slider {...settings} ref={sliderRefPartners}>
                                    {schoolPartnersTestimonials.map(
                                        (item, index) => {
                                            return (
                                                <li>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: item[
                                                                "testimony"
                                                            ],
                                                        }}
                                                    />
                                                    <h6>{item["name"]}</h6>
                                                </li>
                                            );
                                        }
                                    )}
                                </Slider>
                            </ul>
                        </div>

                        <div id="instructors" className="tab-pane fade">
                            <div className="go-to-slide">
                                {instructorTestimonials.map((item, index) => {
                                    return (
                                        <a
                                            key={index}
                                            className={
                                                isActive == index
                                                    ? "active"
                                                    : null
                                            }
                                            href="#"
                                            onClick={handleOnClickInstructors}
                                        >
                                            <img
                                                src={`${item["image"]}`}
                                                data-slide={`${index}`}
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                            <ul className="testimonials">
                                <Slider
                                    {...settings}
                                    ref={sliderRefInstructors}
                                >
                                    {instructorTestimonials.map(
                                        (item, index) => {
                                            return (
                                                <li>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: item[
                                                                "testimony"
                                                            ],
                                                        }}
                                                    />
                                                    <h6>{item["name"]}</h6>
                                                </li>
                                            );
                                        }
                                    )}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="partner-sponsor">
                <div className="container">
                    <div className="partner-sponsor-wrap">
                        <div className="visual-text text-center mb-30">
                            <Fade top>
                                <h3>Our Partners & Sponsors</h3>
                            </Fade>
                            <Fade bottom>
                                <p>
                                    It takes a village to create high quality,
                                    high impact STEM education and make it
                                    accessible to all. We are grateful to our
                                    sponsors and partners for helping make it
                                    happen.
                                </p>
                            </Fade>
                        </div>
                        <ul>
                            {partnersLogo.map((item, index) => {
                                return (
                                    <li
                                        className={index >= 5 ? "hide" : "show"}
                                    >
                                        <img src={item["src"]} />
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="row home-banner mt-30 p-0">
                            <div className="col-md-6 text-right">
                                <HashLink
                                    className="btn btn-outline link"
                                    to="/about_us#partners"
                                >
                                    {" "}
                                    SEE MORE
                                </HashLink>
                            </div>
                            <div className="col-md-6 text-left">
                                <Link
                                    className="btn btn-outline link"
                                    to="/involved"
                                >
                                    {" "}
                                    PARTNER WITH US
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news-sec">
                <div className="visual-text text-center mb-30">
                    <h3 className="pt-50 mb-30"> Latest TCS News</h3>
                </div>

                <div className="latest-tcs-news">
                    <div className="container">
                        <div className="ltcsn-wrap py-50">
                            <div className="row">
                                <div className="col-12 col-md-11 mx-auto">
                                    <div className="ltcsn-card">
                                        <img src="/images/latest-news-img.jpg" />
                                        <div className="ltcsn-card-content">
                                            <h5 className="ltcsn-cc-title">
                                                <Link to="/news">
                                                    The coding school awarded
                                                    $3m grant from department of
                                                    defense through national
                                                    defense education program to
                                                    empower next generation of
                                                    artificial intelligence (ai)
                                                    leaders
                                                </Link>
                                            </h5>
                                            <h6 className="ltcsn-cc-subtitle">
                                                In collaboration with University
                                                of Southern California&#39;s
                                                Viterbi School of Engineering,
                                                The Coding School will develop
                                                an in-depth AI course for high
                                                school students and educators
                                                across the United States
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-logo">
                <div className="featured-in-section container-1920">
                    <div className="visual-text text-center mb-30">
                        <h3>In the News</h3>
                    </div>

                    <ul className="featuredLogo row align-items-center">
                        {featuredLogo.map((item, index) => {
                            return (
                                <Fade bottom>
                                    <li className="col-4 col-lg">
                                        <img src={item["src"]} />
                                    </li>
                                </Fade>
                            );
                            // return {
                            //     ...(index / 2 ? (
                            //         <Fade top>
                            //             <li
                            //                 className={
                            //                     index >= 5 ? "hide" : "show"
                            //                 }
                            //             >
                            //                 <img src={item["src"]} />
                            //             </li>
                            //         </Fade>
                            //     ) : (
                            //         <Fade bottom>
                            //             <li
                            //                 className={
                            //                     index >= 5 ? "hide" : "show"
                            //                 }
                            //             >
                            //                 <img src={item["src"]} />
                            //             </li>
                            //         </Fade>
                            //     )),
                            // };
                        })}
                    </ul>
                </div>

                <div className="featured-post">
                    <Slider {...FeaturedSettings}>
                        {featuredPost.map((item, index) => {
                            return (
                                <div className="featuredPost-item shadowed-box">
                                    <div className="featuredPost-img">
                                        <img src={item["img"]} />
                                    </div>
                                    <div className="featuredPost-desc">
                                        <h4>{item["title"]}</h4>
                                        <p>{item["description"]}</p>
                                        <a
                                            className="link p-0"
                                            target="_blank"
                                            href={item["link"]}
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

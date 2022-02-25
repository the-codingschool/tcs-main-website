import "./News.scss";
import { Link } from "react-router-dom";
function News() {
    return (
        <>
            <div className="news-page">
                <div className="container">
                    <div className="news-1 py-50">
                        <img
                            className="news-banner"
                            src="/images/news-1-bg.jpg"
                        />
                        <p>February 24, 2022</p>
                        <h1 className="text-center news-title">
                            The coding school awarded $3m grant from department
                            of defense through national defense education
                            program to empower next generation of artificial
                            intelligence (ai) leaders
                        </h1>

                        <p className="news-subtitle">
                            In collaboration with University of Southern
                            California's Viterbi School of Engineering, The
                            Coding School will develop an in-depth AI course for
                            high school students and educators across the United
                            States
                        </p>

                        <p>
                            <span class="text-bold">(Los Angeles, CA)</span> -
                            <Link to="/">The Coding School (TCS)</Link>, a tech
                            education nonprofit organization dedicated to
                            empowering the next generation through emerging
                            technology education, announced today that the U.S.
                            Department of Defense (DoD), through the Office of
                            the Under Secretary of Defense for Research and
                            Engineering (OUSD(R&amp;E)), has been selected as a
                            $3 million grant recipient under the National
                            Defense Education Program (NDEP) in Science,
                            Technology, Engineering, and Mathematics (STEM),
                            Biotechnology, and Enhanced Civics Education.
                        </p>

                        <p>
                            The Coding School will receive the funds over a
                            three-year period to develop and implement TR
                            <span className="text-bold">AI</span>N, a
                            first-of-its-kind initiative focused on cultivating
                            a diverse Artificial Intelligence (AI)-literate
                            workforce through high school AI education.
                            Specifically, the program, in partnership with
                            University of Southern California&rsquo;s (USC)
                            Viterbi School of Engineering, aims to establish an
                            accessible path for thousands of students in the
                            United States to learn Artificial Intelligence (AI)
                            and Machine Learning (ML) through a two-fold
                            approach.
                        </p>

                        <p>
                            TR<span className="text-bold">AI</span>N will offer
                            a two-semester, for credit Introduction to Machine
                            Learning course for high school students beginning
                            in Fall 2022. With an inclusive program design, the
                            course will be held virtually with live instruction
                            to ensure accessibility and consist of weekly
                            lectures, labs, and projects. High school STEM
                            educators will also be able to enroll in the course
                            or complete a two- or four-week summer intensive for
                            professional development and will receive continuing
                            education units (CEUs) through USC&rsquo;s Viterbi
                            School, in addition to a stipend upon completion.
                            The Coding School&rsquo;s two-pronged approach
                            provides STEM educators with in-depth training to
                            develop comprehensive modules or courses at their
                            local school, and a for-credit course provides
                            meaningful AI and ML instruction to students who
                            otherwise would not have the ability to take an AI
                            course at their school.
                        </p>

                        <p>
                            &ldquo;Artificial Intelligence and Machine Learning
                            will affect nearly every aspect of society - from
                            how we interact and socialize to how industries run.
                            Having an AI-literate workforce is not just
                            important for the U.S. economy but is also an issue
                            of national security,&rdquo; said Kiera Peltz,
                            Founder and CEO of The Coding School, as well as
                            Principal Investigator (PI) on the grant. &ldquo;We
                            are grateful that this grant will help us ensure
                            high school students - particularly those who
                            don&rsquo;t have access to high-quality STEM
                            education - are prepared with the technical skills
                            necessary for the future of work.&rdquo;
                        </p>

                        <p>
                            As the economic impact of AI is substantially
                            increasing, TR<span className="text-bold">AI</span>N
                            is critical to developing the next generation of AI
                            leaders and changemakers. Through providing an
                            accessible path to AI and ML for thousands of
                            students and educators, the TR
                            <span className="text-bold">AI</span>N program will
                            enable The Coding School in collaboration with USC
                            Viterbi to make a bigger impact in underserved
                            communities, with the goal of incorporating the
                            course into school curriculums across the country.
                            TR<span className="text-bold">AI</span>N is designed
                            to focus on increasing diversity in AI and the
                            future workforce, and will serve students from
                            traditionally underrepresented backgrounds,
                            broadening access to quality STEM education to
                            ensure future leaders are agile and equipped with
                            skills and mentorships needed to succeed.
                        </p>

                        <p>
                            &ldquo;This important high school program provides
                            the necessary, contemporary AI and machine learning
                            content knowledge that will situate high school
                            students as uniquely prepared to enter colleges and
                            universities in computer science, engineering and
                            data science relevant majors thereby readying them
                            as next generation AI ML workforce leaders,&rdquo;
                            said, Dr. Gisele Ragusa, Co-PI and Professor of
                            Engineering Education in USC&rsquo;s Viterbi School
                            of Engineering.
                        </p>

                        <p>
                            As the lead organization, The Coding School will
                            develop and execute the learning programs and
                            provide the curriculum to schools throughout the
                            country. USC&rsquo;s Viterbi School will lead the
                            research component, studying multi-dimensional data
                            collected from the program to inform best practices
                            for future AI educational efforts for high school
                            educators and students. Additionally, USC&rsquo;s
                            Viterbi School will collaborate on student outreach
                            and professional development for high school
                            educators. Throughout the course, students and
                            educators will have the opportunity to connect with
                            AI experts in academia, government, and industry to
                            raise awareness of careers in AI and ML.
                            Additionally, The Coding School and USC&rsquo;s
                            Viterbi School will work with the DoD to include a
                            range of staff from different laboratories and
                            departments to highlight STEM career paths at the
                            DoD.
                        </p>

                        <p>
                            Available through The Coding School&rsquo;s online
                            platform, TR<span className="text-bold">AI</span>N
                            will be accessible to students and high school
                            educators at no cost through either a two-semester
                            course or a four-week summer intensive.
                        </p>

                        <p>
                            For more information about The Coding School, visit:
                            <Link to="/">www.the-cs.org</Link>.
                        </p>

                        <p>###</p>

                        <h3 className="small-title">
                            About The Coding School:
                        </h3>

                        <p>
                            The Coding School (TCS) is a 501(c)(3) tech
                            education nonprofit dedicated to empowering the next
                            generation through computer science education.
                            Founded in 2014 by Brown University graduate Kiera
                            Peltz, TCS has become a global leader in emerging
                            technology education, teaching over 40,000 students
                            and teachers in 125 countries with over 50% of
                            students from traditionally underrepresented
                            backgrounds. TCS offers a diverse range of program
                            offerings, including 3-year in-classroom courses,
                            one-on-one and small group coding lessons, summer
                            camps, and virtual courses in 16+ specialized tech
                            fields, such as Cyber Security, Quantum Computing,
                            and Data Science. TCS is sponsored by IBM Quantum
                            and Google AI, and partnered with higher educational
                            institutions, including UCLA, USC Viterbi School of
                            Engineering, Brown University, and Villanova
                            University.
                        </p>

                        <h3 className="small-title">
                            About University of Southern California Viterbi
                            School of Engineering:
                        </h3>

                        <p>
                            Founded in 1905, the USC Viterbi School of
                            Engineering was named in 2003 as the{" "}
                            <a
                                href="https://viterbischool.usc.edu/news/2017/03/viterbi-algorithm-50/"
                                target="_blank"
                            >
                                Andrew and Erna Viterbi
                            </a>{" "}
                            School of Engineering, honoring USC alumnus Andrew
                            Viterbi, who developed an algorithm to connect the
                            world. Located in Los Angeles, a global center for
                            arts, technology, business and innovation in the
                            heart of the Pacific Rim, USC Viterbi draws
                            undergraduate and graduate students from all over
                            the world. With more than 9,000 students, 300
                            faculty across all ranks and appointment levels, and
                            more than 30 in-residence or affiliated members of
                            the National Academies, USC Viterbi is consistently
                            ranked in the nation&rsquo;s top programs. Under the
                            leadership of Dean Yannis C. Yortsos, the school
                            helps re-imagine the 21st century engineer, by
                            pioneering the{" "}
                            <a
                                href="https://www.nae.edu/169108/Grand-Challenges-Scholars-Program"
                                target="_blank"
                            >
                                Grand Challenge Scholars Program
                            </a>
                            , leading national efforts in enhancing diversity,
                            and changing the conversation about engineering.
                            With its vision of engineering a better world for
                            all humanity USC Viterbi embodies the power of
                            engineering (Engineering+) to advance discovery and
                            solutions across all disciplines, to serve
                            California, the nation and the world.
                        </p>

                        <ul className="info-box mb-30">
                            <li className="text-bold">
                                The Coding School Press Contact:
                            </li>
                            <li>Chelsea Hartnell</li>
                            <li>
                                <a href="mailto:Chelsea_Hartnell@outlook.com">
                                    Chelsea_Hartnell@outlook.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:8587746999">(858) 774-6999</a>
                            </li>
                        </ul>

                        <ul className="info-box">
                            <li className="text-bold">
                                USC Viterbi School Press Contact:
                            </li>
                            <li>Amy Blumenthal</li>
                            <li>Director, Media Relations</li>
                            <li>USC Viterbi School of Engineering</li>
                            <li>
                                <a href="mailto:amyblume@usc.edu">
                                    amyblume@usc.edu
                                </a>
                            </li>
                            <li>
                                <a href="tel:2138211887">(213) 821-1887</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default News;

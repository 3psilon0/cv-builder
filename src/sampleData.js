const spongebob = {
    personal: {
        name: "SpongeBob SquarePants",
        email: "spongebob@bmail.com",
        phone: "+123-456-789",
        location: "Bikini Bottom, Bikini Atoll",
        profession: "Line Cook",
        aboutme: "Hi, I’m SpongeBob — an enthusiastic, pineapple-dwelling professional with a passion for hard work, helping others, and making every day the best day ever. I bring unmatched optimism, a can-do attitude, and a proven track record of dedication (I’ve never missed a day of work… willingly!). Whether it’s tackling tough challenges, supporting my team, or going the extra nautical mile, I approach everything with energy, integrity, and a smile. Ready to make waves and contribute positively wherever I go—I’m ready, I’m ready, I’m ready!"
    },
    skills: [
        "Fry cooking",
        "Customer service",
        "Cleaning & sanitation",
        "Time management",
        "Enthusiasm",
        "Reliability",
        "Teamwork",
        "Resilience"
    ],
    experience: [
        {
            from: "2000",
            to: "Present",
            location: "The Krusty Krab",
            title: "Fry Cook",
            description: "Responsible for preparing high-quality meals in a high-volume, fast-paced environment while ensuring excellent customer service. Maintained rigorous cleanliness and safety standards, consistently demonstrating reliability, efficiency, and professionalism."
        },
        {
            from: "2000",
            to: "Present",
            location: "Bikini Bottom Fields",
            title: "Jellyfisher",
            description: "Conducted jellyfishing operations with a focus on safety, precision, and patience. Developed strong observational and independent working skills, consistently achieving objectives with attention to detail."
        }
    ],
    education: [
        {
            from: "2000",
            to: "Present",
            location: "Mrs. Puff’s Boating School",
            title: "Boating Safety & Navigation (In Progress)",
            description: "Currently pursuing studies in boating and navigation, demonstrating persistence, determination, and a strong commitment to continuous improvement despite ongoing challenges."
        },
        {
            from: "1995",
            to: "2000",
            location: "Bikini Bottom School",
            title: "High School Diploma",
            description: "Completed foundational education as an active and enthusiastic learner, consistently showing curiosity, positivity, and a strong willingness to grow."
        }
    ]
}

const harryPotter = {
    personal: {
        name: "Harry Potter",
        email: "harry@hogwarts.edu",
        phone: "+44-000-0000",
        location: "London, United Kingdom",
        profession: "Auror",
        aboutme: "Brave and resilient wizard with a strong sense of justice and leadership. Experienced in high-pressure situations and defense against dark forces. Known for quick thinking, loyalty, and the ability to inspire and lead others through adversity."
    },
    skills: [
        "Defense Against the Dark Arts",
        "Leadership",
        "Quick decision-making",
        "Teamwork",
        "Flying (Seeker level)",
        "Patronus Charm",
        "Resilience",
        "Problem solving"
    ],
    experience: [
        {
            from: "1998",
            to: "Present",
            location: "Ministry of Magic",
            title: "Auror",
            description: "Responsible for tracking and capturing dark wizards, maintaining magical law and order. Demonstrated exceptional bravery and strategic thinking in high-risk environments."
        },
        {
            from: "1995",
            to: "1998",
            location: "Hogwarts School of Witchcraft and Wizardry",
            title: "Leader, Dumbledore's Army",
            description: "Organized and led a student defense group, teaching practical defensive magic and fostering teamwork under challenging conditions."
        }
    ],
    education: [
        {
            from: "1991",
            to: "1998",
            location: "Hogwarts School of Witchcraft and Wizardry",
            title: "Magical Education",
            description: "Specialized in Defense Against the Dark Arts, with hands-on experience in real-world magical threats."
        }
    ]
}

const ahmedKhan = {
    personal: {
        name: "Ahmed Khan",
        email: "ahmed.khan@gmail.com",
        phone: "+92-300-1234567",
        location: "Karachi, Pakistan",
        profession: "Senior Software Engineer",
        aboutme: "Frontend-focused engineer with 5+ years of experience building scalable web applications. Strong in React, performance optimization, and system design."
    },
    skills: [
        "JavaScript (ES6+)",
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST & GraphQL APIs",
        "Performance optimization",
        "System design",
        "Testing (Jest, Cypress)"
    ],
    experience: [
        {
            from: "2023",
            to: "Present",
            location: "Systems Ltd.",
            title: "Senior Software Engineer",
            description: "Led frontend architecture for a SaaS platform serving 50k+ users. Improved load time by 35% and reduced bundle size by 25%."
        },
        {
            from: "2020",
            to: "2023",
            location: "Tech Solutions Ltd.",
            title: "Software Engineer",
            description: "Developed reusable UI components and integrated APIs. Delivered multiple client projects and improved UI consistency across apps."
        }
    ],
    education: [
        {
            from: "2016",
            to: "2020",
            location: "FAST University",
            title: "BS Computer Science",
            description: "Focused on software engineering, algorithms, and distributed systems."
        }
    ]
}

const aishaMalik = {
    personal: {
        name: "Aisha Malik",
        email: "aisha.malik@gmail.com",
        phone: "+92-333-2223344",
        location: "Karachi, Pakistan",
        profession: "Secondary School Teacher",
        aboutme: "Dedicated and results-driven educator with 6+ years of experience improving student outcomes and engagement. Skilled in curriculum development, differentiated instruction, and integrating technology into the classroom. Known for fostering a structured yet supportive learning environment and consistently achieving measurable academic improvements."
    },
    skills: [
        "Curriculum development",
        "Classroom management",
        "Student assessment",
        "Differentiated instruction",
        "Educational technology",
        "Communication",
        "Mentoring",
        "Time management"
    ],
    experience: [
        {
            from: "2021",
            to: "Present",
            location: "The City School",
            title: "Secondary School Teacher",
            description: "Improved student pass rates by 20% through structured lesson planning and continuous assessment. Integrated digital tools to enhance engagement and track performance."
        },
        {
            from: "2018",
            to: "2021",
            location: "Beaconhouse School System",
            title: "Primary Teacher",
            description: "Delivered core subjects using interactive teaching methods. Increased student participation and built strong foundational skills."
        }
    ],
    education: [
        {
            from: "2014",
            to: "2018",
            location: "University of Karachi",
            title: "B.Ed",
            description: "Specialized in pedagogy, curriculum design, and educational psychology."
        }
    ]
}

export {spongebob, harryPotter, ahmedKhan, aishaMalik}
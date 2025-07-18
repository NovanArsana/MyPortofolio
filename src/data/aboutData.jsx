const aboutData = {
    title: "About Me",
    subtitle: "Discover my journey, passions, and the story behind my work",
    // ...existing code...
    image: "/assets/Profile.jpeg",
    // ...existing code...

    biodata: [
        { label: "Name", value: "Novan Arsana", icon: "bx bx-id-card" },
        { label: "Date of Birth", value: "November,19-1998", icon: "bx bx-calendar" },
        { label: "Place of Birth", value: "Madiun, Indonesia", icon: "bx bx-map" },
        { label: "Email", value: "novantofan82@gmail.com", icon: "bx bx-envelope" },
        { label: "Phone", value: "+62 857 9023 8995", icon: "bx bx-phone" },
        { label: "Education", value: "Universitas Muhammadiyah Sidoarjo", icon: "bx bx-book" },
        { label: "GPA", value: "3.85 / 4.00", icon: "bx bx-award" },
    ],

    resume: {
        label: "Download My Resume",
        href: null,
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in Informatics Engineering, I blend design sense with technical logic.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `I focus on user-centered design, performance, and accessibility   always evolving with modern tech to deliver seamless digital experiences.`,
            icon: "bx-bulb"
        }
    }


};

export default aboutData;

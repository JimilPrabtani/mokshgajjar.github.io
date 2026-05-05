const navLinks = [
    {
        name: "Projects",
        link: "#work",
    },
    {
        name: "Activities",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const BASE_URL = import.meta.env.BASE_URL;
const withBase = (path) => `${BASE_URL}${path.startsWith("/") ? path.slice(1) : path}`;

const words = [
  { text: 'Ideas', imgPath: withBase('/images/ideas.svg') },
  { text: 'Concepts', imgPath: withBase('/images/concepts.svg') },
  { text: 'Solutions', imgPath: withBase('/images/designs.svg') },
  { text: 'Code', imgPath: withBase('/images/code.svg') },
  { text: 'Ideas', imgPath: withBase('/images/ideas.svg') },
  { text: 'Concepts', imgPath: withBase('/images/concepts.svg') },
  { text: 'Solutions', imgPath: withBase('/images/designs.svg') },
  { text: 'Code', imgPath: withBase('/images/code.svg') },
];

const counterItems = [
  { value: 9, suffix: "+", label: "Years of Schooling" },
  { value: 15, suffix: "+", label: "School Projects" },
  { value: 3, suffix: "+", label: "Hobbies Explored" },
  { value: 100, suffix: "%", label: "Passion & Dedication" },
];

const logoIconsList = [
  {
    imgPath: withBase("/images/logos/company-logo-1.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-2.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-3.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-4.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-5.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-6.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-7.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-8.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-9.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-10.png"),
  },
  {
    imgPath: withBase("/images/logos/company-logo-11.png"),
  },
];

const abilities = [
  {
    imgPath: withBase("/images/seo.png"),
    title: "Creative Thinking",
    desc: "Approaching problems with a fresh perspective and finding unique solutions.",
  },
  {
    imgPath: withBase("/images/chat.png"),
    title: "Effective Teamwork",
    desc: "Collaborating with peers and mentors to achieve shared goals and learn together.",
  },
  {
    imgPath: withBase("/images/time.png"),
    title: "Time Management",
    desc: "Balancing school academics, sports, and hobbies with discipline and focus.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: withBase("/images/logos/react.png"),
  },
  {
    name: "Python",
    imgPath: withBase("/images/logos/python.svg"),
  },
  {
    name: "Node.js",
    imgPath: withBase("/images/logos/node.png"),
  },
  {
    name: "Three.js",
    imgPath: withBase("/images/logos/three.png"),
  },
  {
    name: "Git",
    imgPath: withBase("/images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: withBase("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: withBase("/models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: withBase("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: withBase("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: withBase("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Moksh shows incredible agility and focus on the table. His dedication to improving his rallies and serves is commendable.",
    imgPath: withBase("/images/exp1.png"),
    logoPath: withBase("/images/logo1.png"),
    title: "Table Tennis Player",
    date: "2021 - Present",
    responsibilities: [
      "Practicing daily to improve hand-eye coordination and speed.",
      "Participating in inter-school tournaments and sports meets.",
      "Learning advanced spin techniques and tactical gameplay.",
    ],
  },
  {
    review: "Moksh has a natural ear for music. He quickly picks up new chords and melodies, showing great creativity and rhythm.",
    imgPath: withBase("/images/exp2.png"),
    logoPath: withBase("/images/logo2.png"),
    title: "Guitarist",
    date: "2022 - Present",
    responsibilities: [
      "Learning acoustic and electric guitar through regular practice sessions.",
      "Mastering various chords, scales, and fingerstyle techniques.",
      "Covering favorite songs and exploring different musical genres.",
    ],
  },
  {
    review: "Always energetic, Moksh balances his school academics with an active lifestyle, often seen cycling and exploring new trails.",
    imgPath: withBase("/images/exp3.png"),
    logoPath: withBase("/images/logo3.png"),
    title: "Cyclist & Active Student",
    date: "2020 - Present",
    responsibilities: [
      "Completing weekend cycling routes and maintaining physical fitness.",
      "Participating in various school activities, including science fairs and clubs.",
      "Maintaining a balance between hobbies and 9th-grade academic goals.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: withBase("/images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: withBase("/images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: withBase("/images/logo3.png"),
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Moksh. He was able to take our complex school project requirements and turn them into a seamless, functional application. His problem-solving abilities are outstanding for his age.",
    imgPath: withBase("/images/client1.png"),
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Moksh was a fantastic experience. He transformed our simple project idea into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him!",
    imgPath: withBase("/images/client3.png"),
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Moksh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our school fair project. Moksh's enthusiasm truly stands out.",
    imgPath: withBase("/images/client2.png"),
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Moksh was a pleasure to work with. He turned our outdated presentation into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: withBase("/images/client5.png"),
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Moksh’s expertise in coding is truly impressive for a 9th grader. He delivered a robust solution for our club website, and the engagement has significantly increased. He’s a true talent!",
    imgPath: withBase("/images/client4.png"),
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Moksh was a pleasure to work with. He understood the project requirements perfectly and delivered a website that exceeded our expectations. His skills in frontend development are top-notch.",
    imgPath: withBase("/images/client6.png"),
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: withBase("/images/insta.png"),
    link: "https://www.instagram.com/yourprofile",
  },
  {
    name: "facebook",
    imgPath: withBase("/images/fb.png"),
    link: "https://www.facebook.com/yourprofile",
  },
  {
    name: "twitter",
    imgPath: withBase("/images/x.png"),
    link: "https://twitter.com/yourprofile",
  },
  {
    name: "linkedin",
    imgPath: withBase("/images/linkedin.png"),
    link: "https://www.linkedin.com/in/yourprofile",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
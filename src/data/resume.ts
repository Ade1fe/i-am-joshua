export type WorkExperience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    achievements: string[];
    companyUrl?: string;
    jobDescription?: string;
};

export type Skill = {
    title: string;
    body: string[];
};

export type Education = {
    title: string;
    startDate: string;
    endDate: string;
    relevant: string[];
};

export type Language = {
    name: string;
    level: string;
};

export interface Resume {
    name: string;
    title: string;
    intro: string;
    workExperiences: WorkExperience[];
    skills: Skill[];
    educations: Education[];
    languages: Language[];
    hobbies: string[];
}

const name = 'Adisa Taiwo Joshua';

const title = 'Software Engineer';

const intro =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";

const workExperiences: WorkExperience[] = [
    {
        company: 'Taiwos',
        companyUrl: 'https://www.google.com/',
        role: 'Software Engineer',
        startDate: 'AUG 2022',
        endDate: '',
        achievements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Praesent tempus ipsum eu quam ultrices vestibulum.',
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            'Fusce vitae dapibus felis, vel scelerisque urna.',
            'Nulla facilisi. Sed aliquam lacus nec risus suscipit, non dictum elit suscipit.'
        ],
    },
    {
        company: 'PQR Tech Solutions',
        companyUrl: 'https://www.pqrtechsolutions.io/',
        role: 'Frontend Engineer',
        startDate: 'FEB 2023',
        endDate: 'AUG 2023',
        achievements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Praesent tempus ipsum eu quam ultrices vestibulum.',
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            'Fusce vitae dapibus felis, vel scelerisque urna.',
            'Nulla facilisi. Sed aliquam lacus nec risus suscipit, non dictum elit suscipit.'
        ],
    },
    {
        company: 'XYZ Corporation',
        companyUrl: 'https://www.xyz-corp.com/',
        role: 'Junior Developer',
        startDate: 'JAN 2024',
        endDate: 'DEC 2024',
        achievements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Praesent tempus ipsum eu quam ultrices vestibulum.',
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            'Fusce vitae dapibus felis, vel scelerisque urna.',
            'Nulla facilisi. Sed aliquam lacus nec risus suscipit, non dictum elit suscipit.'
        ],
    },
    
];

const skills: Skill[] = [
    {
        title: 'Programming Languages',
        body: ['Java', 'Python', 'C++', 'Ruby'],
    },
    {
        title: 'Web Technologies',
        body: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'],
    },
    {
        title: 'Tools & Frameworks',
        body: ['Git', 'Jira', 'Docker', 'Node.js', 'Vue.js'],
    },
    {
        title: 'Databases',
        body: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
];

const educations: Education[] = [
    {
        title: ' Nemo enim ipsam voluptatem quia voluptas, Ghana',
        startDate: 'JAN 2018',
        endDate: 'JAN 2022',
        relevant: [
            'Nulla facilisi. .',
            'Sed aliquam lacus nec risus ',
            'suscipit, non dictum elit suscipit',
            'Nulla facilisi. .',
            'Sed aliquam lacus nec risus ',
            'suscipit, non dictum elit suscipit',
        ],
    },

    {
        title: 'Sed ut perspiciatis unde omnis accusantium, Nigeria',
        startDate: 'JAN 2018',
        endDate: 'JAN 2022',
        relevant: [
            'Nulla facilisi. .',
            'Sed aliquam lacus nec risus ',
            'suscipit, non dictum elit suscipit',
            'Nulla facilisi. .',
            'Sed aliquam lacus nec risus ',
            'suscipit, non dictum elit suscipit',
        ],
    },
];

const languages: Language[] = [
    {
        name: 'English',
        level: 'PROFICIENT',
    },
    {
        name: 'Spanish',
        level: 'LEARNING',
    },
];

const hobbies = ['Music', 'Gaming',"Drawing",'Cooking'];

export const resume: Resume = {
    name,
    title,
    intro,
    workExperiences,
    skills,
    educations,
    languages,
    hobbies,
};

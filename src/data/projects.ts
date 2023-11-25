export type Project = {
    name: string;
    description: string;
    technologies: string[];
    links: ProjectLink[];
};

type ProjectLink = {
    name: 'github' | 'website' | 'appstore' | 'playstore';
    url: string;
};

export const projects: Project[] = [
    {
        name: 'lorem.MI',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ',
        technologies: ['Nextjs', 'Tailwind', 'Supabase', 'Postgres', 'Metamask', 'Solidity', 'Layerzero', 'Infura', 'Truffle'],
        links: [
            {
                name: 'website',
                url: 'https://wano.finance',
            },
        ],
    }, {
        name: 'Kyle XY',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ',
        technologies: ['Nextjs', 'Tailwind', 'Supabase', 'Postgres'],
        links: [
            {
                name: 'website',
                url: 'https://google.com',
            },
        ],
    }, {
        name: 'Moana',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ',
        technologies: ['Nextjs', 'Tailwind', 'OpenAI'],
        links: [
            {
                name: 'website',
                url: 'https://google.com',
            },
            {
                name: 'github',
                url: 'https://google.com',
            },
        ],
    }, {
        name: 'Jojo Candies ',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ',
        technologies: ['Flutter'],
        links: [
            {
                name: 'github',
                url: 'https://google.com',
            },
            {
                name: 'playstore',
                url: 'https://google.com',
            },
        ],
    },
    {
        name: 'Airtel',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ',
        technologies: ['Flutter'],
        links: [
            {
                name: 'github',
                url: 'https://google.com',
            },
        ],
    },
    
];

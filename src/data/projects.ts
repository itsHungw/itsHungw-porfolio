import type { Project } from "../types";

const githubUrl = 'https://github.com/itsHungw'


export const projects: Project[] = [
    {
        id: 1,
        title: 'Quizzer',
        description: 'quiz platform',
        technologies: ['react CRA, react router, redux,...'],
        image: 'hahaa',
        projectUrl: 'afafd',
        githubUrl: githubUrl,

    },
    {
        id: 2,
        title: 'Quizzer',
        description: 'quiz platform',
        technologies: ['react CRA, react router, redux,...'],
        image: 'hahaa',
        projectUrl: 'afafd',
        githubUrl: githubUrl,

    },
    {
        id: 3,
        title: 'Quizzer',
        description: 'quiz platform',
        technologies: ['react CRA, react router, redux,...'],
        image: 'hahaa',
        projectUrl: 'afafd',
        githubUrl: githubUrl,

    }
];


export const getProjectById = (id: number): Project | undefined => {
    return projects.find((project,) => project.id === id)
}

export const getProjectByTechnology = (tech: string): Project[] => {
    return projects.filter((project) => project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase())))
}



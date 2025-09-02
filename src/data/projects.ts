import type { Project } from "../types";
import Quizzer from '../assets/Screenshot 2025-09-01 224247.png'
const githubUrl = 'https://github.com/itsHungw'


export const projects: Project[] = [
    {
        id: 1,
        title: 'Quizzer',
        description: 'A modern quiz-based e-learning platform with full CRUD capabilities for quiz management and interactive learning.',
        technologies: ['react CRA, react router, redux, bootstrap,...'],
        image: Quizzer,
        projectUrl: 'https://itshungw.github.io/demo-Quizzer/',
        githubUrl: 'https://github.com/itsHungw/quizzer-react',

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



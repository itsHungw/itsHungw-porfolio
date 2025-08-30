export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
}

export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tool' | 'language';
}

export interface NavItem {
    label: string;
    path: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    tags: string[];
}
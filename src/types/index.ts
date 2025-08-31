export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    projectUrl: string;
    githubUrl: string;
}

export interface Skill {
    name: string;
    // level: number;
    category: 'frontend' | 'backend' | 'tool' | 'language';
}

export interface NavItem {
    label: string;
    path: string;
    icon: React.ComponentType<{ size?: number }>;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: number;
    tags: string[];
    author: string;
}

export interface AnimationVariants {
    hidden: {
        opacity: number;
        y?: number;
        x?: number;
        scale?: number;
    };
    visible: {
        opacity: number;
        y?: number;
        x?: number;
        scale?: number;
        transition?: {
            duration: number;
            delay?: number;
        };
    };
}
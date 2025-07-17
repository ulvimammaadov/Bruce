
// App metadata interface
export interface AppMetadata {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    repository: string;
    image: string;
    slideshow: string[];
    icon: string;
    category: string;
    version: string;
    download_link: string;
}

// Component module interface
export interface AppComponent {
    metadata: AppMetadata;
    default: any; // SvelteComponent type
}

// Category interface matching categories.json structure
export interface Category {
    name: string;
    color: string;
    emoji: string;
}
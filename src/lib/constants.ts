import NavMain from "@/components/global/add-sidebar/nav-main";
import { Home, LayoutTemplate, Settings, Trash } from "lucide-react";
import { Theme } from "./types";



export const data = {
    user: {
        name: 'Shadcn',
        email: 'hello@gmail.com',
        avatar: '/'
    },

    NavMain: [
        {
            title: 'Home',
            url: '/dashboard',
            icon: Home,
        },
        {
            title: 'Templates',
            url: '/templates',
            icon: LayoutTemplate,
        },

        {
            title: 'Trash',
            url: '/trash',
            icon: Trash,
        },

        {
            title: 'Settings',
            url: '/settings',
            icon: Settings,
        },


    ]
}

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}


export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
}


export const themes: Theme[] = [
    {
        name: 'Creative_Premium',
        fontFamily: '"Space Grotesk", sans-serif',

        backgroundColor: '#000000',
        fontColor: '#ffffff',

        slideBackgroundColor: '#000000',
        accentColor: '#ff7b54',
        gradientBackground: 'linear-gradient(135deg, #ff7b54 0%, #ff5252 100%)',

        sidebarColor: '#000000',
        navbarColor: '#000000',
        type: 'dark',

        // Cards ke liye
        cardBackgroundColor: '#ffffff',
        cardTextColor: '#000000',
        cardBorderColor: '#000000',
        cardHighlightGradient: 'linear-gradient(135deg, #ff7b54 0%, #ff5252 100%)',
    }
    ,
    {
        name: 'Modern',
        fontFamily: '"Inter", sans-serif',
        backgroundColor: '#ffffff',
        fontColor: '#000000',
        slideBackgroundColor: '#ffffff',
        accentColor: '#000000',
        gradientBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        sidebarColor: '#f8fafc',
        navbarColor: '#ffffff',
        type: 'light',
    },
    {
        name: 'Dark',
        fontFamily: '"Inter", sans-serif',
        backgroundColor: '#0f172a',
        fontColor: '#e2e8f0',
        slideBackgroundColor: '#1e293b',
        accentColor: '#38bdf8',
        gradientBackground: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        sidebarColor: '#0f172a',
        navbarColor: '#0f172a',
        type: 'dark',
    },
    {
        name: 'Minimal',
        fontFamily: '"Helvetica Neue", sans-serif',
        backgroundColor: '#fafafa',
        fontColor: '#171717',
        slideBackgroundColor: '#ffffff',
        accentColor: '#171717',
        gradientBackground: 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)',
        sidebarColor: '#fafafa',
        navbarColor: '#ffffff',
        type: 'light',
    },
    {
        name: 'Gradient',
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: '#1a1a2e',
        fontColor: '#ffffff',
        slideBackgroundColor: '#16213e',
        accentColor: '#e94560',
        gradientBackground: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        sidebarColor: '#1a1a2e',
        navbarColor: '#1a1a2e',
        type: 'dark',
    },
    {
        name: 'Nature',
        fontFamily: '"Georgia", serif',
        backgroundColor: '#f0fdf4',
        fontColor: '#14532d',
        slideBackgroundColor: '#ffffff',
        accentColor: '#16a34a',
        gradientBackground: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
        sidebarColor: '#f0fdf4',
        navbarColor: '#ffffff',
        type: 'light',
    },
    {
        name: 'Ocean',
        fontFamily: '"Inter", sans-serif',
        backgroundColor: '#0c4a6e',
        fontColor: '#f0f9ff',
        slideBackgroundColor: '#075985',
        accentColor: '#38bdf8',
        gradientBackground: 'linear-gradient(135deg, #0c4a6e 0%, #075985 100%)',
        sidebarColor: '#0c4a6e',
        navbarColor: '#0c4a6e',
        type: 'dark',
    },
    {
        name: 'Sunset',
        fontFamily: '"Playfair Display", serif',
        backgroundColor: '#fff7ed',
        fontColor: '#7c2d12',
        slideBackgroundColor: '#ffedd5',
        accentColor: '#ea580c',
        gradientBackground: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
        sidebarColor: '#fff7ed',
        navbarColor: '#ffffff',
        type: 'light',
    },
    {
        name: 'Midnight',
        fontFamily: '"Inter", sans-serif',
        backgroundColor: '#020617',
        fontColor: '#94a3b8',
        slideBackgroundColor: '#0f172a',
        accentColor: '#818cf8',
        gradientBackground: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        sidebarColor: '#020617',
        navbarColor: '#020617',
        type: 'dark',
    },
    {
        name: 'Corporate',
        fontFamily: '"Roboto", sans-serif',
        backgroundColor: '#f8fafc',
        fontColor: '#334155',
        slideBackgroundColor: '#ffffff',
        accentColor: '#2563eb',
        gradientBackground: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        sidebarColor: '#f8fafc',
        navbarColor: '#ffffff',
        type: 'light',
    },
    {
        name: 'Creative',
        fontFamily: '"Space Grotesk", sans-serif',
        backgroundColor: '#2e1065',
        fontColor: '#ffffff',
        slideBackgroundColor: '#4c1d95',
        accentColor: '#a78bfa',
        gradientBackground: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 100%)',
        sidebarColor: '#2e1065',
        navbarColor: '#2e1065',
        type: 'dark',
    },
    {
        name: 'Elegant',
        fontFamily: '"Cormorant Garamond", serif',
        backgroundColor: '#fafaf9',
        fontColor: '#292524',
        slideBackgroundColor: '#ffffff',
        accentColor: '#78716c',
        gradientBackground: 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%)',
        sidebarColor: '#fafaf9',
        navbarColor: '#ffffff',
        type: 'light',
    },
    {
        name: 'Cyberpunk',
        fontFamily: '"Orbitron", sans-serif',
        backgroundColor: '#000000',
        fontColor: '#00ff00',
        slideBackgroundColor: '#111111',
        accentColor: '#ff00ff',
        gradientBackground: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        sidebarColor: '#000000',
        navbarColor: '#000000',
        type: 'dark',
    },
]



export const CreatePageCard = [
    {
        title: 'Use a',
        highlightedText: 'Template',
        description: 'Write a prompt and leave everything else for us to handle',
        type: 'template',
    },
    {
        title: 'Generate with',
        highlightedText: 'Creative AI',
        description: 'Write a prompt and leave everything else for us to handle',
        type: 'creative-ai',
        highlight: true,
    },
    {
        title: 'Start from',
        highlightedText: 'Scratch',
        description: 'Write a prompt and leave everything else for us to handle',
        type: 'create-scratch',
    },
]

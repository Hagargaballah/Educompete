// Mock Teams
export const mockTeams = [
    {
        id: 'T001',
        name: 'Code Innovators',
        school: 'Lincoln High School',
        grade: '10th Grade',
        supervisor: 'Dr. Sarah Johnson',
        members: [
            { id: 1, name: "Emma Wilson", email: "Emma@test.com" },
            { id: 2, name: "Liam Chen", email: "Liam@test.com" },
            { id: 3, name: "Sophia Rodriguez", email: "Sophia@test.com" },
            { id: 4, name: "Hagar", email: "Hagar@test.com" }
        ],
        category: 'Technology Innovation',
        status: 'approved',
        submissionStatus: 'submitted',
        score: 92.5,
        rank: 1,
        createdAt: '2026-01-15',
    },
    {
        id: 'T002',
        name: 'Green Solutions',
        school: 'Washington Academy',
        grade: '11th Grade',
        supervisor: 'Prof. Michael Brown',
        members: [
            { id: 1, name: "Noah Martinez", email: "Noah@test.com" },
            { id: 2, name: "Olivia Lee", email: "Olivia@test.com" },
            { id: 2, name: "Ethan Davis", email: "Ethan@test.com" }
        ],
        category: 'Environmental Science',
        status: 'approved',
        submissionStatus: 'submitted',
        score: 88.3,
        rank: 2,
        createdAt: '2026-01-16',
    },
    {
        id: 'T003',
        name: 'AI Pioneers',
        school: 'Jefferson STEM School',
        grade: '12th Grade',
        supervisor: 'Dr. Emily White',
        members: [
            { id: 1, name: "Ava Thompson", email: "Ava@test.com" },
            { id: 2, name: "Mason Kim", email: "Mason@test.com" },
            { id: 2, name: "Isabella Garcia", email: "Isabella@test.com" }
        ],
        category: 'Artificial Intelligence',
        status: 'approved',
        submissionStatus: 'submitted',
        score: 90.1,
        rank: 3,
        createdAt: '2026-01-17',
    },
    {
        id: 'T004',
        name: 'Robotics Revolution',
        school: 'Franklin Technical',
        grade: '10th Grade',
        supervisor: 'Mr. David Clark',
        members: ['James Anderson', 'Mia Taylor', 'Lucas Moore'],
        category: 'Robotics',
        status: 'approved',
        submissionStatus: 'in-progress',
        createdAt: '2026-01-18',
    },
    {
        id: 'T005',
        name: 'Data Wizards',
        school: 'Roosevelt High',
        grade: '11th Grade',
        supervisor: 'Ms. Jennifer Adams',
        members: ['Charlotte Wilson', 'Benjamin Harris'],
        category: 'Data Science',
        status: 'approved',
        submissionStatus: 'not-started',
        createdAt: '2026-01-19',
    },
    {
        id: 'T006',
        name: 'Web Warriors',
        school: 'Kennedy Prep',
        grade: '12th Grade',
        supervisor: 'Dr. Robert Miller',
        members: ['Amelia Jackson', 'Logan Martinez', 'Harper Lewis'],
        category: 'Web Development',
        status: 'pending',
        submissionStatus: 'not-started',
        createdAt: '2026-01-20',
    },
];

// Mock Projects
export const mockProjects = [
    {
        id: 'P001',
        teamId: 'T001',
        teamName: 'Code Innovators',
        title: 'Smart Campus Navigation System',
        category: 'Technology Innovation',
        description: 'An AI-powered mobile app that helps students navigate campus buildings and find resources efficiently.',
        files: [
            { id: 'F001', name: 'technical_report.pdf', type: 'PDF', size: '2.3 MB', uploadedAt: '2026-01-25' },
            { id: 'F002', name: 'demo_video.mp4', type: 'Video', size: '45.6 MB', uploadedAt: '2026-01-25' },
            { id: 'F003', name: 'source_code.zip', type: 'Archive', size: '5.1 MB', uploadedAt: '2026-01-25' },
        ],
        submittedAt: '2026-01-25',
        status: 'reviewed',
        score: 92.5,
    },
    {
        id: 'P002',
        teamId: 'T002',
        teamName: 'Green Solutions',
        title: 'Solar Energy Monitoring Platform',
        category: 'Environmental Science',
        description: 'A comprehensive dashboard for tracking and optimizing solar panel efficiency in schools.',
        files: [
            { id: 'F004', name: 'project_report.pdf', type: 'PDF', size: '3.1 MB', uploadedAt: '2026-01-26' },
            { id: 'F005', name: 'presentation.pptx', type: 'Presentation', size: '12.5 MB', uploadedAt: '2026-01-26' },
        ],
        submittedAt: '2026-01-26',
        status: 'reviewed',
        score: 88.3,
    },
    {
        id: 'P003',
        teamId: 'T003',
        teamName: 'AI Pioneers',
        title: 'AI-Powered Study Assistant',
        category: 'Artificial Intelligence',
        description: 'Machine learning chatbot that provides personalized study recommendations and answers questions.',
        files: [
            { id: 'F006', name: 'technical_documentation.pdf', type: 'PDF', size: '4.2 MB', uploadedAt: '2026-01-27' },
            { id: 'F007', name: 'model_training.ipynb', type: 'Notebook', size: '1.8 MB', uploadedAt: '2026-01-27' },
        ],
        submittedAt: '2026-01-27',
        status: 'submitted',
        score: 90.1,
    },
    {
        id: 'P004',
        teamId: 'T004',
        teamName: 'Robotics Revolution',
        title: 'Automated Library Assistant Robot',
        category: 'Robotics',
        description: 'An autonomous robot that helps organize and retrieve books in the school library.',
        files: [],
        status: 'in-progress',
    },
];

// Mock Judges
export const mockJudges = [
    {
        id: 'J001',
        name: 'Dr. Patricia Moore',
        email: 'p.moore@university.edu',
        expertise: 'Computer Science, AI',
        assignedProjects: ['P001', 'P003'],
        reviewedCount: 2
    },
    {
        id: 'J002',
        name: 'Prof. Marcus Chen',
        email: 'm.chen@institute.org',
        expertise: 'Environmental Engineering',
        assignedProjects: ['P002'],
        reviewedCount: 1
    },
    {
        id: 'J003',
        name: 'Dr. Lisa Anderson',
        email: 'l.anderson@tech.edu',
        expertise: 'Robotics, Automation',
        assignedProjects: ['P004'],
        reviewedCount: 0
    },
];

// Mock Rubric
export const mockRubric = {
    id: 'R001',
    name: 'STEM Competition Rubric',
    criteria: [
        {
            id: 'C001',
            name: 'Innovation',
            description: 'Originality and creativity of the solution',
            maxScore: 25,
            weight: 0.25,
        },
        {
            id: 'C002',
            name: 'Technical Implementation',
            description: 'Quality of code, design, and technical execution',
            maxScore: 25,
            weight: 0.25,
        },
        {
            id: 'C003',
            name: 'Impact',
            description: 'Potential real-world impact and usefulness',
            maxScore: 20,
            weight: 0.20,
        },
        {
            id: 'C004',
            name: 'Presentation',
            description: 'Clarity of documentation and demonstration',
            maxScore: 15,
            weight: 0.15,
        },
        {
            id: 'C005',
            name: 'Sustainability',
            description: 'Long-term viability and scalability',
            maxScore: 15,
            weight: 0.15,
        },
    ],
};

// Mock Competition
export const mockCompetition = {
    id: 'COMP001',
    name: 'Annual STEM Innovation Challenge 2026',
    description: 'A platform for students to showcase their innovative solutions to real-world problems.',
    startDate: '2026-01-15',
    endDate: '2026-02-15',
    categories: [
        'Technology Innovation',
        'Environmental Science',
        'Artificial Intelligence',
        'Robotics',
        'Data Science',
        'Web Development',
    ],
    status: 'active',
};

// Statistics for dashboard
export const getDashboardStats = () => ({
    totalTeams: mockTeams.length,
    approvedTeams: mockTeams.filter(t => t.status === 'approved').length,
    pendingTeams: mockTeams.filter(t => t.status === 'pending').length,
    totalProjects: mockProjects.length,
    submittedProjects: mockProjects.filter(p => p.status === 'submitted' || p.status === 'reviewed').length,
    totalJudges: mockJudges.length,
    reviewsCompleted: mockJudges.reduce((sum, j) => sum + j.reviewedCount, 0),
});

// Announcements
export const mockAnnouncements = [
    {
        id: 'A001',
        title: 'Project Submission Deadline Extended',
        message: 'The submission deadline has been extended to February 15, 2026.',
        date: '2026-01-28',
        type: 'info',
    },
    {
        id: 'A002',
        title: 'Judging Phase Started',
        message: 'Judges have started reviewing submitted projects. Results will be announced soon.',
        date: '2026-01-27',
        type: 'success',
    },
    {
        id: 'A003',
        title: 'Workshop: AI & Machine Learning',
        message: 'Free workshop for all participants on February 5, 2026 at 2 PM.',
        date: '2026-01-26',
        type: 'info',
    },
];


// required files (admin sets these)
export const requiredFiles = [
    { id: 1, name: "Technical Report", key: "report", required: true, extensions: ["pdf"] },
    { id: 2, name: "Demo Video", key: "video", required: true, extensions: ["mp4", "mov"] },
    { id: 3, name: "Source Code", key: "code", required: true, extensions: ["zip"] },
    { id: 4, name: "Presentation Slides", key: "presentation", required: false, extensions: ["ppt", "pptx"] }
];

export const guidelines = {
    documents: requiredFiles.map(file => {
        const exts = file.extensions.join("/").toUpperCase();
        const optionalText = file.required ? "" : " (Optional)";
        return `${file.name} (${exts})${optionalText}`;
    }),
    sizes: [
        "Documents: Max 10 MB",
        "Videos: Max 100 MB",
        "Code Archives: Max 50 MB",
    ],
    notes: [
        "All fields marked with * are required",
        "You can edit your submission before the deadline",
        "Late submissions will not be accepted",
    ],
};


// admin dashboard data


// charts data

export const submissionTrend = [
    { label: "Week 1", value: 12 },
    { label: "Week 2", value: 19 },
    { label: "Week 3", value: 25 },
    { label: "Week 4", value: 32 },
];

export const categoryDistribution = [
    { label: "Technology", value: 8 },
    { label: "Environment", value: 5 },
    { label: "AI", value: 6 },
    { label: "Robotics", value: 4 },
    { label: "Data Science", value: 3 },
];


// recent activity

export const recentActivities = [
    { id: 1, team: "Code Innovators", action: "submitted project", time: "2 hours ago" },
    { id: 2, team: "Green Solutions", action: "updated project files", time: "4 hours ago" },
    { id: 3, team: "AI Pioneers", action: "registered", time: "6 hours ago" },
    { id: 4, team: "Robotics Revolution", action: "uploaded technical report", time: "8 hours ago" },
];



// landing page mockData

import { UserPlus, Upload, ClipboardCheck, Trophy } from "lucide-react";
import { Target, Lightbulb, Award, TrendingUp } from "lucide-react";




export const goals = [
    {
        icon: Target,
        title: "Foster Innovation",
        description:
            "Encourage students to develop creative solutions to real-world problems using technology.",
    },
    {
        icon: Lightbulb,
        title: "Build Skills",
        description:
            "Help students develop critical thinking, teamwork, and technical skills essential for the future.",
    },
    {
        icon: Award,
        title: "Recognize Talent",
        description:
            "Celebrate and reward outstanding student projects that demonstrate excellence and originality.",
    },
    {
        icon: TrendingUp,
        title: "Inspire Growth",
        description:
            "Motivate the next generation of scientists, engineers, and entrepreneurs to pursue STEM careers.",
    },
];


export const steps = [
    {
        icon: UserPlus,
        step: "01",
        title: "Register Team",
        description:
            "Form your team and register through the online portal with your school details.",
    },
    {
        icon: Upload,
        step: "02",
        title: "Submit Project",
        description:
            "Upload your project files, technical report, and demo within the deadline.",
    },
    {
        icon: ClipboardCheck,
        step: "03",
        title: "Expert Judging",
        description:
            "Qualified judges evaluate all submissions using standardized rubrics.",
    },
    {
        icon: Trophy,
        step: "04",
        title: "Results & Awards",
        description:
            "Top projects are announced and winning teams receive certificates and prizes.",
    },
];


// timeline data
export const timeline = [
    { date: "2026-01-15", event: "Registration Opens", status: "completed" },
    { date: "2026-01-25", event: "Team Registration Deadline", status: "completed" },
    { date: "2026-02-01", event: "Project Submission Deadline", status: "upcoming" },
    { date: "2026-02-10", event: "Judging Period", status: "upcoming" },
    { date: "2026-02-15", event: "Results Announcement", status: "upcoming" },
];


// Rules
export const instructions = [
    { title: "Each team must consist of 2-5 members from the same school." } ,
    { title: "Projects must be original and not previously submitted to other competitions." },
    { title: "All submissions must include a technical report and a working prototype or demo." },
    { title: "Teams must select one category for their project." },
    { title: "Late submissions will not be accepted." }
]

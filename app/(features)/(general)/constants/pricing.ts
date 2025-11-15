import { PricingPlan } from "../_components/PricingPage";

const clientPlans = [
    {
        id: "basic",
        title: "Basic",
        description:
            "Create a profile, apply to a limited number of projects, portfolio showcase only",
        price: 0,
        features: [
            "Create a personal profile",
            "Apply to a limited number of projects",
            "Portfolio showcase only",
        ],
        href: "#",
    },
    {
        id: "pro",
        title: "Pro / Standard",
        description:
            "Apply to more projects, highlighted profile, ability to offer 3 service packages, performance analytics",
        price: 20,
        features: [
            "Apply to more projects",
            "Highlighted / featured profile",
            "Offer up to 3 service packages",
            "Access to performance analytics",
        ],
        href: "#",
    },
    {
        id: "premium",
        title: "Premium",
        description:
            "Top priority visibility, exclusive opportunities, advanced collaboration tools, advanced analytics, fast support",
        price: 50,
        features: [
            "Top priority in search and listing visibility",
            "Access to exclusive project opportunities",
            "Advanced collaboration tools (Video / Chat / File Sharing)",
            "Advanced analytics & insights",
            "Fast customer support",
        ],
        href: "#",
    },
];

const freelancerPlans: PricingPlan[] = [
    {
        id: "basic",
        title: "Basic",
        description: "Suitable for new clients who want to post small projects and communicate with freelancers.",
        price: 0,
        features: [
            "Post projects",
            "Direct messaging with freelancers",
            "Limited number of proposals"
        ],
        href: "/pricing/basic"
    },
    {
        id: "pro",
        title: "Pro",
        description: "Ideal for clients who need more visibility and access to high-quality freelancers.",
        price: 49,
        features: [
            "Post larger projects",
            "View verified and top-rated freelancers",
            "Priority customer support",
            "Basic collaboration tools"
        ],
        href: "/pricing/pro"
    },
    {
        id: "premium",
        title: "Premium",
        description: "Designed for businesses that manage multiple projects and require advanced tools.",
        price: 99,
        features: [
            "Access to top-tier freelancers",
            "Manage multiple projects",
            "Advanced reports and analytics",
            "Full collaboration tools (Live Chat, Video Calls, File Sharing)",
            "24/7 dedicated support"
        ],
        href: "/pricing/premium"
    }
];



export { clientPlans, freelancerPlans }
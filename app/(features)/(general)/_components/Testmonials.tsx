import { TitleSection } from "@/app/(shared)/_components";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Web Developer",
        feedback:
            "This platform helped me find clients quickly and grow my freelance career.",
    },
    {
        name: "Michael Lee",
        role: "Graphic Designer",
        feedback:
            "I landed 3 projects in my first week — the process was smooth and secure!",
    },
    {
        name: "Aisha Karim",
        role: "Content Writer",
        feedback:
            "The smart matching feature connects me with clients who actually need my skills.",
    },

];
const Testimonials = () => (
    <section className="py-16 bg-secondary/30 ">
        <TitleSection text="What Our Users Say" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((t) => (
                <div
                    key={t.name}
                    className="p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                >
                    <Quote className="w-6 h-6 text-primary mb-3" />
                    <p className="text-content-secondary italic mb-4">&rdquo;{t.feedback}&rdquo;</p>
                    <div className="mt-auto">
                        <h3 className="font-semibold text-foreground">{t.name}</h3>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
export default Testimonials
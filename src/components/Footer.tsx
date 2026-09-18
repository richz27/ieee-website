
import { MessageCircle, Instagram, PawPrint, Mail } from "lucide-react"

const socialLinks = [
    {icon: MessageCircle, label: "Discord", href: "https://discord.gg/paTmN5AGG" },
    {icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ieeenorthwestern/" },
    {icon: PawPrint, label: "Cats on Campus", href: "https://catsoncampus.northwestern.edu/student_community?a=1&club_id=35921" },
    {icon: Mail, label: "Email us!", href: "mailto:ieee@northwestern.edu" },
]

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-700 py-8 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-neutral-100">Northwestern IEEE</h3>
                        <p className="text-neutral-400 text-sm">Advancing technology for humanity</p>
                        <div className="text-xs text-neutral-500 mt-3">
                            <div>© 2025 Northwestern University IEEE</div>
                            <div>Built and designed by Richard Zhang</div>
                        </div>
                    </div>

                    <div className="flex items-stretch">
                        {socialLinks.map(({ icon: Icon, label, href }, i) => (
                            <div key={label} className="flex items-stretch">
                                {i !== 0 && (
                                    <div className="w-px bg-neutral-700 mx-6 my-1" />
                                )}
                                <a        
                                    href={href}
                                    className="group flex flex-col items-center justify-center gap-2 px-2 rounded-lg transition-colors hover:bg-neutral-800"
                                >
                                    <Icon className="w-6 h-6 text-neutral-300 transition-colors group-hover:text-purple-400" />
                                    <span className="text-neutral-400 text-xs whitespace-nowrap transition-colors group-hover:text-purple-400">
                                        {label}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
import vichedaImg from "../assets/images/execs/vicheda.png"
import darrelImg from "../assets/images/execs/darrel.png"
import satvikiImg from "../assets/images/execs/satviki.png"
import gauthamImg from "../assets/images/execs/gautham.jpeg"
import erosImg from "../assets/images/execs/eros.png"
import naomiImg from "../assets/images/execs/naomi.png"
import vallerieImg from "../assets/images/execs/vallerie.jpeg"
import sophieImg from "../assets/images/execs/sophie.jpeg"
import nathanielImg from "../assets/images/execs/nathaniel.png"

const firstRow = [
    {
        img: vichedaImg,
        name: "Vicheda Narith",
        role: "Co-President",
        year: "Senior, Computer Science",
    },
    {
        img: darrelImg,
        name: "Darrel Zhao",
        role: "Co-President",
        year: "Junior, Computer Engineering",
    },
    {
        img: satvikiImg,
        name: "Satviki Madaan",
        role: "Co-Technical Director",
        year: "Junior, Computer Engineering",
    },
    {
        img: gauthamImg,
        name: "Gautham Anne",
        role: "Co-Technical Director",
        year: "Junior, Mechanical Engineering & Electrical Engineering",
    },
]

const secondRow = [
    {
        img: erosImg,
        name: "Eros Sotelo",
        role: "Treasurer",
        year: "Junior, Computer Engineering",
    },
    {
        img: naomiImg,
        name: "Naomi Li",
        role: "Programming Chair",
        year: "Junior, Computer Science & Economics",
    },
    {
        img: vallerieImg,
        name: "Vallerie Pangaribuan",
        role: "Outreach Chair",
        year: "Junior, Electrical Engineering",
    },
    {
        img: sophieImg,
        name: "Sophie Fong",
        role: "Publicity Chair",
        year: "Sophomore, Computer Engineering & Physics",
    },
    {
        img: nathanielImg,
        name: "Nathaniel Potter",
        role: "Secretary",
        year: "Sophomore, Computer Engineering & Mathematics",
    },
]

type Member = {
    img: string
    name: string
    role: string
    year: string
}

const MemberCard = ({ member, className }: { member: Member; className: string }) => (
    <div className={`flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-4 ${className}`}>
        <img
            className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover"
            src={member.img}
            alt={member.name}
        />
        <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">{member.name}</h3>
        <p className="text-purple-400 font-medium mb-1 text-center">{member.role}</p>
        <p className="text-neutral-400 text-sm text-center">{member.year}</p>
    </div>
)

const Team = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide">
                Meet our {" "}
                <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Executive Board</span>
            </h2>
            <p className="text-md text-center text-neutral-400 max-w-3xl mx-auto mt-4 lg:text-lg">
                Meet the passionate leaders dedicated to fostering technical growth, building community, and creating positive impact.
            </p>

            <div className="mt-8 lg:mx-10">
                <div className="flex flex-wrap justify-center xl:max-w-5xl xl:mx-auto">
                    {firstRow.map((member) => (
                        <MemberCard key={member.name} member={member} className="xl:w-1/4" />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center xl:max-w-7xl xl:mx-auto">
                    {secondRow.map((member) => (
                        <MemberCard key={member.name} member={member} className="xl:w-1/5" />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Team

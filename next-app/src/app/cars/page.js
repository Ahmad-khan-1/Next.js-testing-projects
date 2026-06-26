import Image from "next/image";
const teamMembers = [
  {
    initials: "TT",
    name: "Thapa Technical",
    title: "Frontend Developer",
    description: "React & TypeScript",
  },
  {
    initials: "VT",
    name: "Vinod Thapa",
    title: "Full Stack Developer",
    description: "Node.js & React",
  },
  {
    initials: "MJ",
    name: "Mike Johnson",
    title: "Backend Developer",
    description: "Node.js & Python",
  },
  {
    initials: "EW",
    name: "Emily Wilson",
    title: "Product Manager",
    description: "Strategy & Analytics",
  },
  {
    initials: "DL",
    name: "David Lee",
    title: "DevOps Engineer",
    description: "AWS & Docker",
  },
  {
    initials: "AB",
    name: "Anna Brown",
    title: "QA Engineer",
    description: "Testing & Automation",
  },
];

export default function Cars() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.initials}
              className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-black/30"
            >
              <Image
                src="/car.jpg"
                width={200}
                height={200}
                alt="cars-image"
                className="w-full h-full rounded-full"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                {member.name}
              </h3>
              <p className="mt-3 text-center text-sm text-slate-300">
                {member.title}
              </p>
              <p className="mt-2 text-center text-xs text-slate-400">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

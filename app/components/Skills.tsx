"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const skills = [
  { name: "React Native", level: 80 },
  { name: "React.js", level: 76 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 75 },
  { name: "Git", level: 73 },
  { name: "Next.js", level: 70 },
  { name: "Expo", level: 68 },
  { name: "Firebase", level: 65 },
  { name: "Node.js", level: 60 },
];

const technologies = [
  { category: "📱 Mobile", items: ["React Native", "Expo", "Android", "iOS"] },
  {
    category: "🌐 Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "⚙️ Backend",
    items: ["Node.js", "Express", "REST APIs", "Firebase"],
  },
  { category: "🛠️ Tools", items: ["Git", "GitHub", "Figma", "AI"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            What I bring to the table
          </p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left - Bar Chart */}
          <div className="bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-700">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Proficiency Levels
            </h3>
            <p className="text-gray-500 text-xs mb-4 sm:mb-6">
              Based on hands-on project experience
            </p>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={skills}
                layout="vertical"
                margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  width={95}
                />
                <Tooltip
                  formatter={(value) => [`${value}%`, "Proficiency"]}
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                    color: "#f1f5f9",
                    fontSize: "13px",
                  }}
                />
                <Bar dataKey="level" fill="#9333ea" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Right - Tech Stack Grid */}
          <div className="space-y-4 sm:space-y-5">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Tech Stack
              </h3>
              <p className="text-gray-500 text-xs">
                Technologies I work with daily
              </p>
            </div>
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-slate-800 rounded-xl p-4 sm:p-5 border border-slate-700 hover:border-purple-500 transition-all"
              >
                <h4 className="text-purple-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  {tech.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-700 hover:bg-purple-600 text-gray-300 hover:text-white px-2.5 py-1 rounded-full text-xs sm:text-sm transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

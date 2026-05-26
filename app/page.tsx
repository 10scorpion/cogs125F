import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex max-w-6xl flex-col px-6 py-16">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-start gap-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            UI / UX Designer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Hi, I’m Henry Khauv.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Cognitive Science: Design and Interaction student at UC San Diego
            passionate about creating intuitive, accessible, and user-centered
            digital experiences through research, prototyping, and usability
            testing.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://henrykhauv.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-6 py-3 text-white transition hover:scale-105 dark:bg-white dark:text-black"
            >
              View Portfolio
            </a>

            <a
              href="https://www.linkedin.com/in/henry-khauv"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="grid gap-12 border-t border-zinc-200 py-20 dark:border-zinc-800 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">About Me</h2>
          </div>

          <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I am currently pursuing a Bachelor’s degree in Cognitive Science:
              Design and Interaction at the University of California, San Diego,
              expected graduation in 2027.
            </p>

            <p>
              My focus is on designing accessible and user-centered digital
              experiences through research, wireframing, prototyping, and
              usability testing.
            </p>

            <p>
              I enjoy collaborating with teams, gathering user feedback, and
              turning research insights into practical design improvements.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="border-t border-zinc-200 py-20 dark:border-zinc-800">
          <h2 className="mb-10 text-3xl font-semibold">Skills</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Figma",
              "Wireframing",
              "Prototyping",
              "User Flows",
              "Usability Testing",
              "Accessibility Design",
              "Heuristic Evaluation",
              "Communication",
              "Team Collaboration",
              "Problem Solving",
              "Time Management",
              "Adaptability",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="border-t border-zinc-200 py-20 dark:border-zinc-800">
          <h2 className="mb-10 text-3xl font-semibold">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Project 1 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-4 text-2xl font-semibold">
                Provident Eye Specialist Website Redesign
              </h3>

              <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
                Redesigned a medical eye care website to improve usability,
                accessibility, organization, and navigation using user-centered
                design principles and Figma wireframes.
              </p>

              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Accessibility-focused redesign</li>
                <li>• Wireframing and layout concepts</li>
                <li>• Iterative feedback and revisions</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-4 text-2xl font-semibold">
                Supporting Human Artists on Instagram
              </h3>

              <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
                Collaborated with a team to design a reporting and appeals
                feature prototype addressing concerns around AI-generated
                artwork on social media platforms.
              </p>

              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• User interviews and research</li>
                <li>• Low-fidelity sketches and user flows</li>
                <li>• Interactive Figma prototype</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-4 text-2xl font-semibold">
                UCSD Heuristics Analysis Class
              </h3>

              <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
                Conducted usability and heuristic evaluations on websites to
                identify issues affecting discoverability, intuitiveness, and
                learnability.
              </p>

              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Heuristic evaluations</li>
                <li>• In-person usability testing</li>
                <li>• UX improvement recommendations</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-4 text-2xl font-semibold">
                Leadership & Team Experience
              </h3>

              <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
                Developed leadership, teamwork, adaptability, and communication
                skills through collaborative environments including the U.S.
                Navy Sea Cadets and customer-facing work experience.
              </p>

              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Leadership development</li>
                <li>• Time management</li>
                <li>• Team collaboration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="border-t border-zinc-200 py-20 dark:border-zinc-800">
          <h2 className="mb-6 text-3xl font-semibold">Contact</h2>

          <div className="space-y-3 text-lg text-zinc-600 dark:text-zinc-400">
            <p>Email: henrykhauv26@gmail.com</p>
            <p>Phone: 915-888-5626</p>

            <a
              href="https://www.linkedin.com/in/henry-khauv"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              linkedin.com/in/henry-khauv
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
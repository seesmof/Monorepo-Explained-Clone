import Image from "next/image";
import Paragraph from "../small/Paragraph";

interface Pro {
  category: "monorepo" | "polyrepo";
  title: string;
  description: string;
}

const prosData: Pro[] = [
  {
    category: "polyrepo",
    title: "Cumbersome code sharing",
    description:
      "Sharing code across repos means setting up a dedicated repository, CI, package publishing, and version management. Consumers must reconcile incompatible versions of shared dependencies. The overhead discourages sharing in the first place.",
  },
  {
    category: "monorepo",
    title: "Share code without publishing overhead",
    description:
      "No versioned packages needed when all consumers are in the same repo. Sharing a new library is as simple as creating a folder. Existing CI handles everything.",
  },
  {
    category: "polyrepo",
    title: "Significant code duplication",
    description:
      "When sharing is too costly, teams reimplement common services and components in each repo. This multiplies maintenance, security patching, and quality control across every copy.",
  },
  {
    category: "monorepo",
    title: "Single source of truth",
    description:
      "Common services and components live in one place. Fix a bug once, every consumer gets the fix. No copies to track down.",
  },
  {
    category: "polyrepo",
    title: "Costly cross-repo changes",
    description:
      "A bug in a shared library means multiple PRs across disconnected histories, sequenced merges, and compatibility gymnastics: beta releases, consumer upgrades, stable releases, repeat.",
  },
  {
    category: "monorepo",
    title: "Atomic commits across projects",
    description:
      "Everything works together at every commit. A breaking change in a shared library and the fix in every consumer land in the same PR. No sequenced merges, no compatibility dance.",
  },
  {
    category: "polyrepo",
    title: "Hard to enforce conventions",
    description:
      "Each repo makes its own choices about tooling, dependencies, code structure, and documentation. Enforcing organizational standards means maintaining separate configs and review processes per repo. Drift is the default.",
  },
  {
    category: "monorepo",
    title: "Enforceable conventions at scale",
    description:
      "Organizational rules live in one place and apply everywhere: code style, dependency policies, repo structure, documentation standards. Tooling can enforce constraints automatically. Consistency is the default.",
  },
];

const Pro = ({ category, title, description }: Pro) => {
  return (
    <div className="flex flex-row gap-4">
      {/* Pulsing Circle */}
      <div
        className={`rounded-full p-1 mt-1 h-min animate-pulse ${category === "polyrepo" ? "bg-red-400" : "bg-green-400"}`}
      ></div>

      <div className="flex flex-col group">
        <p
          className={`${category === "polyrepo" ? "text-red-400" : "text-green-400"} font-semibold uppercase tracking-tighter text-sm`}
        >
          {category}
        </p>
        <strong className="font-semibold text-slate-700">{title}</strong>

        <div className="group-hover:block hidden -ml-8 mt-3 p-3 bg-white rounded-md outline outline-slate-200">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function PolyrepoSection() {
  return (
    <div className="px-4 mt-24">
      <header>
        <h2 className="font-extrabold text-4xl text-center">
          <em>#</em> The Polyrepo Tax
        </h2>
        <p className="text-lg text-center mt-2 text-stone-700">
          Isolation buys autonomy. But autonomy has a compounding cost.
        </p>
      </header>

      <article className="px-20 py-12">
        <h3 className="text-3xl text-slate-700 font-semibold">A “Polyrepo”</h3>
        <Paragraph className="mt-5">
          The opposite of a monorepo is often called a “polyrepo”: each team or
          application lives in <strong>its own repository</strong>, with its own
          dependencies, tooling, build artifact, and CI pipeline.
        </Paragraph>
        <Paragraph className="mt-3">
          Organizations adopt polyrepos to give teams <strong>autonomy</strong>:
          independent choices about libraries, release cadence, and contribution
          rules. But this autonomy comes through <strong>isolation</strong>, and
          isolation doesn&apos;t eliminate the need for integration.{" "}
          <strong>It just delays it.</strong> Shared contracts still need to
          align. Breaking changes still need coordinating. The feedback just
          arrives <strong>later in the development cycle</strong>, when
          it&apos;s harder and more expensive to act on.
        </Paragraph>
        <Image
          src={"/polyrepo-practice.svg"}
          width={980}
          height={768}
          alt="An image showing a diagram where 'Binary Repository' is at the center, and floating around it is circles with texts: 'App 1 Repo', 'App 2 Repo', 'Library 1 Repo', 'Library 2 Repo', and 'Library 3 Repo'"
          className="my-12"
        />

        <div className="gap-8 flex flex-col">
          {prosData.map((pro, index) => (
            <Pro {...pro} key={index} />
          ))}
        </div>

        <div className="bg-slate-100 rounded-lg shadow-xl text-center pt-14 pb-10 px-12 mt-12">
          <h3 className="font-extrabold text-3xl">
            The Polyrepo Tax gets worse with AI
          </h3>
          <Paragraph className="mt-4">
            Repo boundaries act as walls for both humans and AI assistants. An
            AI agent cannot see beyond the repo boundary and has to rely on
            specs and docs rather than the actual implementation.
          </Paragraph>
        </div>
      </article>
    </div>
  );
}

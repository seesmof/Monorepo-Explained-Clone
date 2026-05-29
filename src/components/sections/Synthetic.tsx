import Image from "next/image";
import Paragraph from "../small/Paragraph";
import EmphasisedText from "../small/EmphasisedText";
import Link from "next/link";

export default function SyntheticSection() {
  return (
    <div className="px-4 mt-24">
      <header>
        <h2 id="poly" className="font-extrabold text-4xl text-center">
          <em>#</em> Synthetic Monorepos
        </h2>
        <p className="text-lg text-center mt-2 text-stone-700">
          Consolidating all your repos into one isn’t always feasible. Synthetic
          monorepos give you monorepo-level intelligence across existing
          repositories without moving code.
        </p>
      </header>

      <article className="px-20 py-12">
        <Paragraph>
          A synthetic monorepo{" "}
          <EmphasisedText>
            connects separate repositories into a unified dependency graph
          </EmphasisedText>{" "}
          without moving any code. Which repo depends on which, what a change
          affects downstream, how projects relate across teams: all of that
          becomes visible automatically.
        </Paragraph>
        <Paragraph className="mt-3">
          <strong>Platform engineers</strong> get conformance checking and
          impact analysis across boundaries. <strong>AI agents</strong> get a
          map of how repos relate, so they can reason and coordinate changes
          across the whole org instead of one repo at a time.
        </Paragraph>
        <Link
          className="mt-3 block underline underline-offset-4 decoration-yellow-500 hover:bg-yellow-500 hover:rounded w-fit duration-150 transition-all"
          href={"/synthetic-monorepos"}
        >
          Read the deep dive
        </Link>
      </article>
      <blockquote className="font-bold italic border-l-4 border-yellow-500 pl-5 text-lg">
        A synthetic monorepo doesn’t tear down the walls between repos. It
        creates tunnels through them, giving humans and AI agents the visibility
        to effectively work across boundaries.
      </blockquote>
    </div>
  );
}

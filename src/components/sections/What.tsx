import Image from "next/image";
import EmphasisedText from "../small/EmphasisedText";
import Paragraph from "../small/Paragraph";

export default function WhatSection() {
  return (
    <div className="px-4 mt-24">
      <header>
        <h2 className="font-extrabold text-4xl text-center">
          <em>#</em> What is a Monorepo?
        </h2>
        <p className="text-lg text-center mt-2 text-stone-700">
          Let&apos;s define what we and others typically mean when we talk about
          Monorepos.
        </p>
      </header>

      <article className="mt-8">
        <h3 className="font-bold text-2xl">
          A monorepo is a single repository containing{" "}
          <EmphasisedText>multiple distinct projects</EmphasisedText>, with{" "}
          <EmphasisedText>well-defined relationships</EmphasisedText>.
        </h3>
        <Paragraph className="mt-5">
          We at Nx think this is the most consistent and accurate statement of
          what a monorepo is among all the established monorepo tools.
        </Paragraph>
        <Image
          className="mx-auto mt-8"
          src={"/monorepo-polyrepo.svg"}
          width={490}
          height={490}
          alt="An image with two diagrams: one showing the pieces of Monorepo, the other showing pieces of Polyrepo."
        />
      </article>

      <article>
        <h3 className="font-bold text-2xl mt-12">Not just “code colocation”</h3>
        <Paragraph className="mt-5">
          Consider a repository with several projects in it. We definitely have
          “code colocation”, but if there are no well defined relationships
          among them, we would not call it a monorepo.
        </Paragraph>
        <Paragraph className="mt-3">
          Likewise, if a repository contains a massive application without
          division and encapsulation of discrete parts, it&apos;s just a big
          repo. You can give it a fancy name like &quot;garganturepo,&quot; but
          we&apos;re sorry to say, it&apos;s not a monorepo.
        </Paragraph>
        <Image
          src={"/monolith-modular.svg"}
          alt="An image showing two diagrams: one with a monolith app repo, the other with modular app repo."
          width={490}
          height={490}
          className="mx-auto"
        />
      </article>
    </div>
  );
}

import { notFound } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import CaseStudyClient from "./CaseStudyClient";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return {};
  return {
    title: `${project.title} — Youssef Sayed`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return <CaseStudyClient project={project} />;
}

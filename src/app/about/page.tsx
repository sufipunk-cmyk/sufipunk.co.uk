import { StrandStub } from "@/components/site/StrandStub";

export const metadata = {
  title: "About",
  description:
    "A soul that prepares the ground. The holding. The place you are cherished.",
};

export default function AboutPage() {
  return (
    <StrandStub
      kicker="About"
      title="A soul that prepares the ground."
      intro="The holding. The place you are cherished."
      upNext="The next push will bring the confirmed orienting bio line and the full About copy from the brief, in the correct voice — a lineage statement, not a personal résumé."
    />
  );
}
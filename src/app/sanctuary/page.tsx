import { StrandStub } from "@/components/site/StrandStub";

export const metadata = {
  title: "Sanctuary First",
  description:
    "Witness writing — twelve posts of arrival, threshold, and practice. Forming.",
};

export default function SanctuaryPage() {
  return (
    <StrandStub
      kicker="Witness Writing"
      title="Sanctuary First"
      intro="A library of twelve posts that move through arrival, threshold, and practice. The intro text, the post index, and the filtered reading view are being prepared as the next milestone of this build."
      upNext="The next push will bring the sanctuary intro, the post list, and the experience / theme / tradition / arc filters described in the brief — followed by the twelve posts themselves with previous and next navigation."
    />
  );
}
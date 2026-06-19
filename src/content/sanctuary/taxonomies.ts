/**
 * Sanctuary First taxonomies — drawn verbatim from the master brief
 * ("Post index with filters" under SANCTUARY FIRST). The `id` is what's
 * stored in each post's frontmatter; the `label` is what readers see.
 *
 * These are intentionally typed as `as const` so adding a new tag in
 * a post that is not in this list will be caught by TypeScript.
 */

export const EXPERIENCE_TAGS = [
  { id: "spiritual-homelessness", label: "Spiritual homelessness" },
  { id: "burnout-and-survival", label: "Burnout and survival" },
  { id: "send-system-tribunals", label: "SEND system and tribunals" },
  { id: "grief-and-loss", label: "Grief and loss" },
  { id: "late-diagnosis", label: "Late diagnosis" },
  { id: "parenting-pda-child", label: "Parenting a PDA child" },
  { id: "faith-without-belonging", label: "Faith without belonging" },
  { id: "recovery-and-after", label: "Recovery and what comes after" },
  {
    id: "spiritual-crisis-finding-way-back",
    label: "Spiritual crisis and finding your way back",
  },
] as const;

export const THEME_TAGS = [
  { id: "low-demand-faith", label: "Low demand faith" },
  {
    id: "neurodivergence-and-spirituality",
    label: "Neurodivergence and spirituality",
  },
  { id: "safety-and-nervous-system", label: "Safety and nervous system" },
  { id: "multi-faith-and-heritage", label: "Multi-faith and heritage" },
  { id: "stewardship-and-parenting", label: "Stewardship and parenting" },
  { id: "identity-and-unmasking", label: "Identity and unmasking" },
  { id: "resistance-and-refusal", label: "Resistance and refusal" },
  { id: "inner-life-and-practice", label: "Inner life and practice" },
] as const;

export const TRADITION_TAGS = [
  { id: "islamic-and-sufi", label: "Islamic and Sufi" },
  { id: "christian-contemplative", label: "Christian contemplative" },
  { id: "hindu-and-sikh", label: "Hindu and Sikh" },
  { id: "jewish", label: "Jewish" },
  { id: "secular-cross-tradition", label: "Secular and cross-tradition" },
] as const;

/**
 * Arcs intentionally omit numerical post counts — the collection is
 * open-ended. The arc names themselves carry the brief's three movements.
 */
export const ARC_TAGS = [
  { id: "arrival", label: "Arrival" },
  { id: "threshold", label: "Threshold" },
  { id: "practice", label: "Practice" },
] as const;

export type ExperienceTag = (typeof EXPERIENCE_TAGS)[number]["id"];
export type ThemeTag = (typeof THEME_TAGS)[number]["id"];
export type TraditionTag = (typeof TRADITION_TAGS)[number]["id"];
export type ArcTag = (typeof ARC_TAGS)[number]["id"];

export type FilterGroup = {
  key: "experience" | "theme" | "tradition" | "arc";
  label: string;
  options: ReadonlyArray<{ id: string; label: string }>;
};

export const FILTER_GROUPS: FilterGroup[] = [
  { key: "experience", label: "By experience", options: EXPERIENCE_TAGS },
  { key: "theme", label: "By theme", options: THEME_TAGS },
  { key: "tradition", label: "By tradition", options: TRADITION_TAGS },
  { key: "arc", label: "By arc", options: ARC_TAGS },
];

export function labelFor(
  group: FilterGroup["key"],
  id: string
): string | undefined {
  const groupDef = FILTER_GROUPS.find((g) => g.key === group);
  return groupDef?.options.find((o) => o.id === id)?.label;
}
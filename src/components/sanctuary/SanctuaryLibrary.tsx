"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { FilterBar } from "./FilterBar";
import { PostList, type PostListEntry } from "./PostList";

function parseList(v: string | null): string[] {
  return v ? v.split(",").filter(Boolean) : [];
}

/**
 * Combines the FilterBar (URL-state controlled) with the PostList
 * so the bar can show an accurate "N posts" count for the current
 * filter combination.
 */
export function SanctuaryLibrary({ posts }: { posts: PostListEntry[] }) {
  const params = useSearchParams();

  const visibleCount = useMemo(() => {
    const f = {
      experience: parseList(params.get("experience")),
      theme: parseList(params.get("theme")),
      tradition: parseList(params.get("tradition")),
      arc: parseList(params.get("arc")),
    };
    return posts.filter((p) => {
      if (
        f.experience.length &&
        !f.experience.some((id) => p.experience.includes(id))
      )
        return false;
      if (f.theme.length && !f.theme.some((id) => p.theme.includes(id)))
        return false;
      if (
        f.tradition.length &&
        !f.tradition.some((id) => p.tradition.includes(id))
      )
        return false;
      if (f.arc.length && !f.arc.includes(p.arc)) return false;
      return true;
    }).length;
  }, [posts, params]);

  return (
    <>
      <FilterBar resultsCount={visibleCount} />
      <PostList posts={posts} />
    </>
  );
}
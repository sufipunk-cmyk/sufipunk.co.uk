import { FlowerDivider, ZawiyaBadge } from "@/components/site/Ornaments";
import Image from "next/image";

/**
 * Spiritual Underground intro — the strand whose home on the
 * overview map is The Devotional Corner.
 *
 * Voice / sourcing notes
 *
 *  - The two confirmed concepts are reproduced from the master brief
 *    (SufiPunk_Master_Brief.md, "SPIRITUAL UNDERGROUND" section).
 *
 *  - The Low-Demand Faith definition is given in Naz's own voice in
 *    the master brief, in quotation marks. It is reproduced here
 *    verbatim and presented as a quotation, attributed to her.
 *
 *  - The Spiritual Parallel Play definition is given in the master
 *    brief as a third-person summary, not in quotation marks. It is
 *    reproduced here verbatim per the brief's instruction "Use them
 *    exactly as given," but rendered as plain page copy rather than
 *    a quotation, because the wording is the brief's summary rather
 *    than Naz's first-person words. (The Inspiring the Sufi brief
 *    carries a longer first-person version of this same definition
 *    if a switch is preferred later.)
 *
 *  - "Inspiring the Sufi" is named as the demonstrated example, with
 *    the exact link text the brief specifies: "This is where it
 *    started. Come and see."
 *
 *  - The expressions-of-interest invitation is described in the
 *    brief but no exact wording is given. The wording used here is
 *    the spec's authorised bridging copy ("exact wording for
 *    expressions-of-interest block can be composed around the
 *    confirmed definitions during implementation"), kept short and
 *    in the same voice as the rest of the site.
 *
 *  - The closing flower divider names the place this strand lives
 *    at on the overview map: The Devotional Corner.
 */

const SUBSTACK = "https://sufipunksanctuaryfirst.substack.com/subscribe";
const ITS_URL = "https://inspiringthesufi.com";
const CONTACT_EMAIL = "sufipunk@icloud.com";

export function SpiritualUndergroundIntro() {
  return (
    <section
      className="relative bg-parchment py-16 sm:py-20"
      aria-labelledby="underground-intro"
    >
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            Parallel Play
          </p>
          <h1
            id="underground-intro"
            className="mt-3 font-display text-4xl text-green sm:text-6xl"
          >
            Spiritual Underground
          </h1>
        </div>

        {/* Before you enter — threshold framing in the site's voice. */}
        <div className="mt-14">
          {/* M16 — bold-badge stamp above the threshold heading. */}
          <ZawiyaBadge className="mb-6" />
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before you enter
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              The Spiritual Underground is the art, culture, and creative
              practice strand of this work — the place for people whose faith,
              attention, and making live a little outside the standard rooms.
            </p>
            <p>
              It is built around two ideas that arrived slowly and deliberately,
              in conversation, over years of trying to find language for a way
              of being with God that didn’t require performance, certainty, or
              fluency in inherited forms.
            </p>
            <p className="font-display italic text-green-soft">
              You do not join this. You recognise yourself in it.
            </p>
          </div>
        </div>

        {/* Low-demand faith — quoted, Naz's exact words. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Low-demand faith
          </h2>
          <figure className="prose-zawiya sanctuary-prose mt-6">
            <blockquote className="border-l-2 border-amber/60 pl-5 font-display text-[1.15rem] italic leading-snug text-green sm:text-[1.25rem]">
              “Low-demand faith is the recognition that faith can be practised
              outside ritual, standardised religious practices, and cultural
              norms. It is the understanding that our relationship with the
              Divine is often alive in the ordinary moments of our lives, not
              only within formal acts of worship.”
            </blockquote>
            <figcaption className="mt-3 font-serif text-sm not-italic text-ink-soft">
              — Sufi Punk
            </figcaption>
          </figure>
        </div>

        {/* Spiritual Parallel Play — M15 fuller definition.
            Replaces the earlier short summary with the author's
            settled four-paragraph version. The hidden-treasure
            footnote sits at the bottom of this section, marked with
            the same ★ pattern used on the About page in M13. */}
        <div className="mt-14">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Spiritual Parallel Play
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              Spiritual Parallel Play is following your own curiosity into
              something with monotropic depth — going all the way down into one
              thing — and discovering God already there, beside you. Not
              directing the search. Not correcting it. Just present, the way one
              child is present beside another in parallel play: each absorbed in
              their own thing, recognised simply by being near.
            </p>
            <p>
              The world calls this kind of depth a deficiency. God made it. A
              hidden treasure
              <sup className="ml-1 align-super font-serif text-[0.7em] not-italic text-amber">
                <a
                  href="#footnote-hidden-treasure"
                  aria-label="See footnote on the hidden-treasure saying"
                  className="no-underline hover:text-green"
                >
                  ★
                </a>
              </sup>{" "}
              who created the whole world to be found knows exactly what the joy
              of finding feels like — better than a world that never built the
              hiding place. The recognition this work deserves was never the
              world’s to withhold. It belongs to the One who designed the
              capacity for it, and who delights in what gets excavated and
              carried back into the light.
            </p>
            <p>
              At first, this is simply lived — immersed in the fascination, not
              yet named as devotion at all. The growth is in the noticing:
              learning to recognise, inside the depth, that the relationship was
              there the whole time. And once that noticing is learned in one
              place, it doesn’t stay there. It permeates outward, until
              attention itself becomes a way of finding God anywhere, not only
              in the original interest.
            </p>
            <p>
              This is not the opposite of ritual. Ritual repeats the same form
              many times until awareness of God becomes constant. Spiritual
              Parallel Play goes deep into one thing until that same awareness
              is reached by a different road. Both are trying to arrive at the
              same place. The world built infrastructure for one of these roads,
              and forgot the other one existed.
            </p>
          </div>

          {/* Footnote on the hidden-treasure saying. Same pattern as
              the systems-generated-trauma footnote on About: a small
              ★-anchored aside set off with a hairline above. */}
          <aside
            id="footnote-hidden-treasure"
            className="mt-10 border-t border-hairline/60 pt-5"
            aria-label="Footnote on the hidden-treasure saying"
          >
            <p className="font-serif text-xs leading-relaxed text-ink-soft">
              <span aria-hidden className="mr-1 text-amber">
                ★
              </span>
              The hidden-treasure saying is held within Sufi tradition,
              particularly through Ibn Arabi’s lineage; its standing as an
              authenticated hadith is debated among scholars, but I hold it as
              spiritually true regardless of its formal chain.
            </p>
          </aside>
        </div>

        {/* Before it had a name — M21 lineage section.

            Four projects (2008–2010) from Naz's decade as an
            artistic director, placed BEFORE the demonstrated example
            so Inspiring the Sufi reads as the culmination of this
            practice rather than an aside. Locked facts (names,
            dates, partners, quotations) per before-it-had-a-name.md
            and build-instruction-brief.md (M21). Phrasing flexed to
            match the page's essayistic register; the reference
            documents are not pasted verbatim.

            SAFEGUARDING — firm rule: The Mysteries (2009) involved
            over 200 young people aged 9+. No image showing an
            identifiable child from this project is reproduced here,
            regardless of copyright. The programme cover and
            welcome-note text are the only Mysteries materials used.

            Closing tercet uses explicit <br /> line breaks so the
            three lines render as three lines, not collapse into one
            paragraph (per the brief's rendering note). */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before it had a name
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              Looking back, I can see one thread running quietly through
              everything I have made.
            </p>
            <p>
              For more than a decade before any of this had language, I worked
              as an artistic director — designing projects, commissioning
              artists, and bringing people, traditions and forms together. I was
              already working under the name Sufi Punk the whole time. It didn’t
              arrive afterwards; it was there from the start.
            </p>
            <p>
              As a young Muslim woman, I longed to know God in ways that felt
              true to the person I was becoming. Questions carried me further
              than certainty ever could. Each project began with a curiosity
              that refused to let me go — some I had to follow, others arrived
              as invitations from people who recognised something unfolding
              before I fully understood it myself.
            </p>
            <p className="font-display italic text-green-soft">
              Each became another treasure hunt.
            </p>
          </div>

          {/* Card 1 — Too Punk to Pray? (2008) */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
              2008 · Public art
            </p>
            <h3 className="mt-2 font-display text-xl italic text-green sm:text-2xl">
              Too Punk to Pray?
            </h3>
            <div className="prose-zawiya sanctuary-prose mt-5">
              <p className="font-display italic text-green-soft">
                What makes prayer recognisable?
              </p>
              <p>
                Listening to hundreds of people describe moments that felt like
                prayer, the answer kept arriving in the same shape — letting go.
                A sigh, a silence, a piece of music, a wave of longing or
                gratitude. Prayer was already happening in places no one had
                named as prayer. The piece was later picked up by{" "}
                <span className="whitespace-nowrap">RE Today</span> as a
                classroom resource for ages 11 to 16, opening the same question
                for a new generation. The original magazine billed it plainly:
                an art installation performance piece, made with
                Birmingham-based arts and faith social enterprise Ulfah Arts,
                inspired by the notion of prayer.
              </p>
            </div>
            <figure className="mt-6">
              <Image
                src="/images/underground/m21/too-punk-to-pray-spread.webp"
                alt="REtoday magazine, Spring 2009 — a two-page spread headed ‘Too Punk to Pray? What is praying anyway?’, with photographs of Sufi Punk performing and three reflective questions for classroom discussion."
                width={1024}
                height={768}
                sizes="(min-width: 768px) 36rem, 100vw"
                className="h-auto w-full border border-hairline"
              />
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                RE Today, Spring 2009 — classroom spread, ages 11–16.
              </figcaption>
            </figure>
          </article>

          {/* Card 2 — The Mysteries: In Our Own Words (2009).
              Safeguarding: programme cover only. No photographs of
              the 200+ young people in the production are reproduced. */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
              2009 · Community festival
            </p>
            <h3 className="mt-2 font-display text-xl italic text-green sm:text-2xl">
              The Mysteries: In Our Own Words
            </h3>
            <div className="prose-zawiya sanctuary-prose mt-5">
              <p className="font-display italic text-green-soft">
                What happens when two scriptures are allowed to sit side by
                side?
              </p>
              <p>
                Belgrade Theatre Coventry’s second community festival (27 July –
                1 August 2009) paired stories from the Qur’an with stories from
                the Bible for the first time — scripted plays, spoken word, film
                and dance, performed by community members and more than two
                hundred young people. The Guardian’s theatre blog called it “an
                admirably ambitious project.” Working alongside the Belgrade as
                Director of Ulfah Arts, I helped bring the Qur’an stories into a
                shared stage with the Bible’s — not as comparison, but as a
                shared inheritance, retold in people’s own words.
              </p>
            </div>
            <figure className="mt-6 max-w-md">
              <Image
                src="/images/underground/m21/cover-for-mysteries.webp"
                alt="Souvenir programme cover for ‘The Mysteries: In Our Own Words — Unravelling the Mystery: Stories inspired by the Bible and the Qur’an’, Belgrade Theatre Coventry, 27 July – 1 August 2009. A silhouetted figure on a parchment-textured ground layered with Arabic calligraphy and ink-splatter graphics."
                width={1463}
                height={1800}
                sizes="(min-width: 768px) 28rem, 100vw"
                className="h-auto w-full border border-hairline"
              />
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                Souvenir programme cover — Belgrade Theatre Coventry, 2009.
              </figcaption>
            </figure>
          </article>

          {/* Card 3 — Sacred Qur'an (2009) */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
              2009 · National Trust commission
            </p>
            <h3 className="mt-2 font-display text-xl italic text-green sm:text-2xl">
              Sacred Qur’an
            </h3>
            <div className="prose-zawiya sanctuary-prose mt-5">
              <p className="font-display italic text-green-soft">
                Can scripture be a way of noticing what is already here?
              </p>
              <p>
                Working with the National Trust at Wightwick Manor, I invited
                people to pair rooms inside the house with verses from the
                Qur’an that echoed what each space already carried — the
                library’s long pleasure-in-learning, the gardens’ careful
                tending, the contentment of remembrance. The foreword to the
                published guide was co-written with the Trust’s Regional
                Director: a partnership, not simply a commission. The work
                became an act of noticing. Scripture became another way of
                recognising what was already there before any of us arrived.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <figure>
                <Image
                  src="/images/underground/m21/sacred-quran-cover.webp"
                  alt="Booklet cover: ‘Wightwick Manor and Gardens — Sacred Quran’, with a circular illustration of intertwined leaves and Qur’anic verses, beneath the line ‘Enjoy Wightwick Manor and Gardens through the verses of the Quran.’ National Trust / Whose Story? imprint."
                  width={1024}
                  height={768}
                  sizes="(min-width: 768px) 17rem, 100vw"
                  className="h-auto w-full border border-hairline"
                />
                <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                  Booklet cover — National Trust / Whose Story?, 2009.
                </figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/underground/m21/sacred-quran-library-spread.webp"
                  alt="Interior spread headed ‘THE LIBRARY’, with a contributor’s reflection on remembrance and a Qur’anic verse from Surah Ra’ad — ‘Verily, in the remembrance of God do hearts find contentment’ — set facing a photograph of the Manor’s leather-armchaired library with floor-to-ceiling shelves."
                  width={1024}
                  height={768}
                  sizes="(min-width: 768px) 17rem, 100vw"
                  className="h-auto w-full border border-hairline"
                />
                <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                  Interior spread — The Library, paired with Surah Ra’ad.
                </figcaption>
              </figure>
            </div>
          </article>

          {/* Card 4 — Hakawatiyyah — The Storyteller (2010).
              Includes three programme images, the trailer video, and
              the full 24-page souvenir programme as a downloadable
              archive document (PDF, presented as printed). */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
              2010 · Ulfah Arts UK × DAM Festival Kosovo
            </p>
            <h3 className="mt-2 font-display text-xl italic text-green sm:text-2xl">
              Hakawatiyyah — The Storyteller
            </h3>
            <div className="prose-zawiya sanctuary-prose mt-5">
              <p className="font-display italic text-green-soft">
                Where can a story from the Qur’an meet music from somewhere
                else, and remain itself?
              </p>
              <p>
                Through Ulfah Arts — the organisation I founded and directed —
                and supported by the British Council’s Creative Collaboration
                programme, I led a year-long partnership with the DAM Festival
                in Kosovo. Stories from the Qur’an, drawn from conversations
                with Muslim women across Britain, travelled into music composed
                in Kosovo and performed across two countries. The world premiere
                took place at the DAM Festival on 31 March 2010, and the work
                then toured five UK cities, carried by storyteller Alia Al
                Zougbi alongside Kosovan composers and pianist Rosalind Parker.
              </p>
              <p>
                Three stories rose to the surface — Asiya, who walked away from
                a palace to keep her faith intact; Maryam, alone in the desert
                with a newborn; Fatima, a child who would not let her father be
                humiliated.
              </p>
              <p>
                The stories remained the same. The form changed. The meeting
                with the Divine remained.
              </p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <figure>
                <Image
                  src="/images/underground/m21/hakawatiyyah-cover.webp"
                  alt="Programme cover for ‘Hakawatiyyah — The Storyteller’, presented by Ulfah Arts UK and Dam Festival Kosovo: a deep magenta field with the Arabic word حكواتية in teal above the English title in white, and a silhouette of an upraised hand emerging from drapery printed with Arabic calligraphy."
                  width={1283}
                  height={1771}
                  sizes="(min-width: 768px) 17rem, 100vw"
                  className="h-auto w-full border border-hairline"
                />
                <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                  Programme cover — Ulfah Arts UK & DAM Festival Kosovo, 2010.
                </figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/underground/m21/hakawatiyyah-foreword.webp"
                  alt="Programme page headed ‘FOREWORD — from Naz Koser, Artistic Director Ulfah Arts’, with a portrait photograph of Naz Koser alongside the welcome note describing the project as a union of two distinct artistic genres, a collaboration between tradition and culture, made to unite contradictions, break stereotypes and nurture harmony."
                  width={1283}
                  height={1771}
                  sizes="(min-width: 768px) 17rem, 100vw"
                  className="h-auto w-full border border-hairline"
                />
                <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                  Foreword by Naz Koser, Artistic Director of Ulfah Arts.
                </figcaption>
              </figure>
            </div>

            <figure className="mt-6">
              <Image
                src="/images/underground/m21/hakawatiyyah-artistic-team.webp"
                alt="Programme page headed ‘ULFAH ARTS UK & DAM FESTIVAL KOSOVO — THE ARTISTIC TEAM’, with portrait photographs and biographies of Naz Koser (UK Tour Artistic Director and Founder of Ulfah Arts) and Alia Al Zougbi (Storyteller and Original Writer for the UK Tour in 2010). The bio notes that Naz also works as an artist under the name Sufi Punk."
                width={1283}
                height={1771}
                sizes="(min-width: 768px) 36rem, 100vw"
                className="h-auto w-full border border-hairline"
              />
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                The artistic team — Naz Koser and Alia Al Zougbi. Naz is named
                in the bio as already working under the name Sufi Punk at this
                time.
              </figcaption>
            </figure>

            {/* Trailer — Naz's own Ulfah Arts file, kept lazy.
                preload="metadata" so it doesn't pull the whole 12MB
                until the user actually presses play.

                useMediaCaption is suppressed below: this is a 2010
                archival trailer with no caption file produced at
                the time. A transcript / VTT pass is flagged as a
                follow-up. */}
            <figure className="mt-8">
              {/* biome-ignore lint/a11y/useMediaCaption: archival 2010 trailer; transcript/VTT to follow in a later pass */}
              <video
                controls
                preload="metadata"
                playsInline
                poster="/images/underground/m21/hakawatiyyah-cover.webp"
                className="block h-auto w-full border border-hairline bg-ink"
              >
                <source
                  src="/media/underground/m21/Hakawatiyyah_-_The_Storyteller.mp4"
                  type="video/mp4"
                />
                Your browser does not support embedded video. You can download
                the file directly at{" "}
                <a href="/media/underground/m21/Hakawatiyyah_-_The_Storyteller.mp4">
                  Hakawatiyyah — The Storyteller (MP4)
                </a>
                .
              </video>
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                Trailer — Ulfah Arts, 2010 (3:46, h.264 / aac).
              </figcaption>
            </figure>

            {/* Full programme as archival document.
                Presented exactly as printed — full scan, unedited.
                Sits alongside (not instead of) the three extracted
                images above. */}
            <aside className="mt-8 border border-hairline bg-parchment-deep/30 px-6 py-6 sm:px-8 sm:py-7">
              <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
                Archive document
              </p>
              <p className="mt-2 font-display text-lg italic text-green sm:text-xl">
                <a
                  href="/media/underground/m21/ULFAH_HAKA_24PP_PROG_AW.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  Read the full souvenir programme (PDF, 2010)
                </a>
              </p>
              <p className="mt-2 font-serif text-xs leading-relaxed text-ink-soft">
                24 pages · 12.5 MB · presented exactly as printed — full scan,
                unedited, advertisements and all — as a historical archive
                document.
              </p>
            </aside>
          </article>

          {/* Closing tercet — explicit <br /> per brief: three
              lines, not one paragraph. */}
          <div className="prose-zawiya sanctuary-prose mt-14">
            <p>
              Looking back now, I see one practice unfolding through many
              different forms.
            </p>
            <p className="font-display italic text-green-soft">
              The projects changed.
              <br />
              The search remained beautifully constant.
              <br />
              Spiritual Parallel Play simply gave that lifelong practice a name.
            </p>
          </div>
        </div>

        {/* Inspiring the Sufi — the demonstrated example.
            M13: promoted from a buried in-paragraph link to a proper
            portal block, since this is a decade-plus body of work and
            should not read as an afterthought. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            The demonstrated example
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              <em>
                Inspiring the Sufi: A Neurodivergent Practice in Parallel Play
              </em>{" "}
              is the named, public example of this work — fifty Names of Allah,
              surrounded by songs from around the world, each held alongside a
              written reflection (one entry pairs two Names under a single
              reflection). One practice, fully documented, freely available to
              wander.
            </p>
          </div>

          <aside className="mt-8 border border-hairline bg-parchment-deep/30 px-6 py-7 sm:px-8 sm:py-8">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
              A portal · Ten years of practice
            </p>
            <p className="mt-2 font-display text-2xl leading-snug text-green sm:text-3xl">
              Inspiring the Sufi
            </p>
            <p className="mt-2 font-display text-[1rem] italic leading-snug text-green-soft sm:text-[1.1rem]">
              Fifty Names of Allah, surrounded by songs. Written reflections.
            </p>
            <p className="mt-4 font-serif text-[0.95rem] leading-relaxed text-ink">
              Spiritual Parallel Play, fully documented and freely available to
              wander — the demonstrated form this strand points back to.
            </p>
            <div className="mt-6">
              <a
                href={ITS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-green bg-green px-6 py-3 font-serif text-sm uppercase tracking-[0.18em] text-parchment transition hover:bg-green-soft"
              >
                Visit Inspiring the Sufi
                <span aria-hidden>→</span>
              </a>
              <p className="mt-3 font-display text-[1rem] italic text-green-soft">
                This is where it started. Come and see.
              </p>
            </div>
          </aside>
        </div>

        {/* Invitation — expressions of interest, kept restrained. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            An invitation
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              If you work in faith, the arts, or culture — and any of this meets
              something you are already trying to make room for — I am open to
              expressions of interest. Programming, residencies, collaborations,
              conversation. No pitch deck, no form. A short, plain note is
              enough.
            </p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Spiritual Underground — expression of interest",
                )}`}
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              For quieter contact — reflections, occasional letters, news about
              the book —{" "}
              <a
                href={SUBSTACK}
                target="_blank"
                rel="noreferrer"
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                Sanctuary First on Substack
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <FlowerDivider label="From the Devotional Corner" />
    </section>
  );
}

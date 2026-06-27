import { FlowerDivider, ZawiyaBadge } from "@/components/site/Ornaments";
import { ZoomableImage } from "@/components/site/ZoomableImage";

/**
 * Spiritual Underground intro — the strand whose home on the
 * overview map is The Devotional Corner.
 *
 * M22 — Full page copy replaced from
 * spiritual-underground-FINAL-agent-ready.md (source of truth for the
 * text). Notable structural changes in this pass:
 *
 *  - "Before you enter", "Spiritual Parallel Play", "Before it had a
 *    name" (and its four project cards), and "An invitation" are all
 *    rewritten to the FINAL copy. "Low-demand faith" keeps the same
 *    quotation it already carried (unchanged in the FINAL file).
 *
 *  - The "Inspiring the Sufi" portal is renamed "Come and see" and
 *    MOVED to sit BEFORE "Before it had a name" (FINAL ordering),
 *    rather than after the lineage section.
 *
 *  - Hakawatiyyah (2010) card now shows the PROGRAMME COVER ONLY.
 *    The foreword-spread image and artistic-team-spread image are
 *    removed, and the 2010 archival trailer <video> embed is removed
 *    entirely, per the M22 media notes. The full-programme PDF archive
 *    link is kept.
 *
 *  - A new video embed is added near the end of "Before it had a
 *    name" — the Sufi Punk show reel, embedded from YouTube
 *    (https://youtu.be/oX8m6UikQ98), where the FINAL file marks it.
 *
 *  - All other project images (Too Punk to Pray, The Mysteries,
 *    Sacred Qur'an) are kept exactly as they were — same files, alt
 *    text, and captions.
 *
 *  - The closing flower divider names the place this strand lives
 *    at on the overview map: The Devotional Corner.
 */

const SUBSTACK = "https://sufipunksanctuaryfirst.substack.com/subscribe";
const ITS_URL = "https://inspiringthesufi.com";
const CONTACT_EMAIL = "sufipunk@icloud.com";
const SHOWREEL_YOUTUBE_ID = "oX8m6UikQ98";

export function SpiritualUndergroundIntro() {
  return (
    <section
      className="relative bg-parchment py-16 sm:py-20"
      aria-labelledby="underground-intro"
    >
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
            Parallel Play
          </p>
          <h1
            id="underground-intro"
            className="mt-3 font-display text-4xl text-green sm:text-6xl"
          >
            Spiritual Underground
          </h1>
        </div>

        {/* Before you enter — FINAL copy. */}
        <div className="mt-14">
          {/* M16 — bold-badge stamp above the threshold heading. */}
          <ZawiyaBadge className="mb-6" />
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before you enter
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              The Spiritual Underground is the art, culture, and creative
              practice strand of this work — a place for people whose faith,
              attention, and making live a little outside the standard rooms.
            </p>
            <p>
              It grew slowly, over many years, as I searched for language to
              describe a way of being with God that felt spacious, honest and
              deeply alive. Long before these ideas had names, they were
              already shaping the way I moved through the world.
            </p>
            <p className="font-display italic text-green-soft">
              You do not join this.
              <br />
              You recognise yourself in it.
            </p>
          </div>
        </div>

        {/* Low-demand faith — quoted, Naz's exact words (unchanged). */}
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

        {/* Spiritual Parallel Play — FINAL copy. The hidden-treasure
            footnote sits at the bottom of this section, marked with
            the same ★ pattern used on the About page. */}
        <div className="mt-14">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Spiritual Parallel Play
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              Spiritual Parallel Play is following your own curiosity with
              monotropic depth — allowing yourself to go all the way into one
              thing and discovering that God is already there, beside you.
            </p>
            <p>
              Like children absorbed in parallel play, there is no need to
              direct or control the encounter. Each remains fully themselves,
              sharing presence rather than performance.
            </p>
            <p>
              Within Sufi tradition there is a saying that God is a Hidden
              Treasure who created the universe to be found.
              <sup className="ml-1 align-super font-serif text-[0.7em] not-italic text-amber-text">
                <a
                  href="#footnote-hidden-treasure"
                  aria-label="See footnote on the hidden-treasure saying"
                  className="no-underline hover:text-green"
                >
                  ★
                </a>
              </sup>{" "}
              Whether or not its chain of transmission is accepted by every
              scholar, that image has shaped my devotional life.
            </p>
            <p>The child in me heard that invitation literally.</p>
            <p className="font-display italic text-green-soft">
              A treasure invites searching.
            </p>
            <p>So I searched.</p>
            <p className="font-display italic text-green-soft">
              In music.
              <br />
              In scripture.
              <br />
              In stories.
              <br />
              In gardens.
              <br />
              In art.
              <br />
              In places.
              <br />
              In conversations.
              <br />
              In people.
            </p>
            <p>
              Each fascination became another landscape to wander. Each
              question became another doorway through which I hoped to glimpse
              the Divine.
            </p>
            <p>Over time, something beautiful revealed itself.</p>
            <p className="font-display italic text-green-soft">
              The searching became the practice.
              <br />
              The curiosity became the prayer.
              <br />
              The attention became the place of meeting.
            </p>
            <p>
              Years later, after my autism diagnosis, I recognised this
              movement as monotropic attention — the capacity to remain with
              one question, one beauty, one thread until it opens into
              something larger. Spiritual Parallel Play is the name I
              eventually gave to that way of seeking.
            </p>
            <p>
              Ritual follows a well-worn path towards continual awareness of
              God.
            </p>
            <p>
              Spiritual Parallel Play follows deep curiosity until that same
              awareness begins to bloom.
            </p>
            <p className="font-display italic text-green-soft">
              The destination is shared.
              <br />
              The paths are different.
            </p>
          </div>

          {/* Footnote on the hidden-treasure saying. */}
          <aside
            id="footnote-hidden-treasure"
            className="mt-10 border-t border-hairline/60 pt-5"
            aria-label="Footnote on the hidden-treasure saying"
          >
            <p className="font-serif text-xs leading-relaxed text-ink-soft">
              <span aria-hidden className="mr-1 text-amber-text">
                ★
              </span>
              The hidden-treasure saying is held within Sufi tradition,
              particularly through Ibn Arabi’s lineage; its standing as an
              authenticated hadith is debated among scholars, but I hold it as
              spiritually true regardless of its formal chain.
            </p>
          </aside>
        </div>

        {/* Come and see — the demonstrated example. FINAL ordering puts
            this BEFORE "Before it had a name", so Inspiring the Sufi
            reads as the open, living practice the lineage points toward. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Come and see
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              <em>
                Inspiring the Sufi: A Neurodivergent Practice in Parallel Play
              </em>{" "}
              is where this practice lives in the open.
            </p>
            <p>Fifty Names of Allah, surrounded by songs. Written reflections.</p>
            <p>Ten years of practice, freely shared, freely wandered.</p>
          </div>

          <aside className="mt-8 border border-hairline bg-parchment-deep/30 px-6 py-7 sm:px-8 sm:py-8">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber-text">
              A portal · Ten years of practice
            </p>
            {/* M-A11y (Phase 1, Section B) — this card title was a styled
                <p> at h2 size; WAVE flagged it as a "possible heading".
                It genuinely titles the Inspiring-the-Sufi portal card, so
                it is now a real <h3> (correctly nested under the "Come and
                see" <h2> above). Visual styling unchanged via className. */}
            <h3 className="mt-2 font-display text-2xl leading-snug text-green sm:text-3xl">
              Inspiring the Sufi
            </h3>
            <p className="mt-2 font-display text-[1rem] italic leading-snug text-green-soft sm:text-[1.1rem]">
              Fifty Names of Allah, surrounded by songs. Written reflections.
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
                This is where it started. Come and see for yourself.
              </p>
            </div>
          </aside>
        </div>

        {/* Before it had a name — lineage section, FINAL copy.

            Four projects (2008–2010) from Naz's decade as an artistic
            director.

            SAFEGUARDING — firm rule: The Mysteries (2009) involved
            over 200 young people aged 9+. No image showing an
            identifiable child from this project is reproduced here.
            The programme cover is the only Mysteries image used.

            M22 media notes applied within the Hakawatiyyah card below. */}
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

          {/* Card 1 — Too Punk to Pray? (2008). Image kept as is. */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber-text">
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
                named as prayer.
              </p>
            </div>
            <figure className="mt-6">
              <ZoomableImage
                src="/images/underground/m21/too-punk-to-pray-spread.webp"
                alt="REtoday magazine, Spring 2009 — a two-page spread headed ‘Too Punk to Pray? What is praying anyway?’, with photographs of Sufi Punk performing and three reflective questions for classroom discussion."
                width={1024}
                height={768}
                sizes="(min-width: 768px) 36rem, 100vw"
                className="border border-hairline"
                zoomLabel="Zoom the RE Today spread"
                downloadName="sufipunk-re-today-too-punk-to-pray-2009.webp"
                caption="RE Today, Spring 2009 — classroom spread, ages 11–16."
              />
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                RE Today, Spring 2009 — classroom spread, ages 11–16.
              </figcaption>
            </figure>
          </article>

          {/* Card 2 — The Mysteries: In Our Own Words (2009).
              Safeguarding: programme cover only. Image kept as is. */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber-text">
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
                Belgrade Theatre Coventry’s community festival paired stories
                from the Qur’an with stories from the Bible for the first
                time — scripted plays, spoken word, film and dance, performed
                by community members and more than two hundred young people.
              </p>
            </div>
            <figure className="mt-6 max-w-md">
              <ZoomableImage
                src="/images/underground/m21/cover-for-mysteries.webp"
                alt="Souvenir programme cover for ‘The Mysteries: In Our Own Words — Unravelling the Mystery: Stories inspired by the Bible and the Qur’an’, Belgrade Theatre Coventry, 27 July – 1 August 2009. A silhouetted figure on a parchment-textured ground layered with Arabic calligraphy and ink-splatter graphics."
                width={1463}
                height={1800}
                sizes="(min-width: 768px) 28rem, 100vw"
                className="border border-hairline"
                zoomLabel="Zoom the Mysteries programme cover"
                downloadName="sufipunk-the-mysteries-programme-cover-2009.webp"
                caption="Souvenir programme cover — Belgrade Theatre Coventry, 2009."
              />
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                Souvenir programme cover — Belgrade Theatre Coventry, 2009.
              </figcaption>
            </figure>
          </article>

          {/* Card 3 — Sacred Qur'an (2009). Both images kept as is. */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber-text">
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
                Qur’an that echoed what each space already carried. The work
                became an act of noticing.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <figure>
                <ZoomableImage
                  src="/images/underground/m21/sacred-quran-cover.webp"
                  alt="Booklet cover: ‘Wightwick Manor and Gardens — Sacred Quran’, with a circular illustration of intertwined leaves and Qur’anic verses, beneath the line ‘Enjoy Wightwick Manor and Gardens through the verses of the Quran.’ National Trust / Whose Story? imprint."
                  width={1024}
                  height={768}
                  sizes="(min-width: 768px) 17rem, 100vw"
                  className="border border-hairline"
                  zoomLabel="Zoom the Sacred Qur’an booklet cover"
                  downloadName="sufipunk-sacred-quran-booklet-cover-2009.webp"
                  caption="Booklet cover — National Trust / Whose Story?, 2009."
                />
                <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                  Booklet cover — National Trust / Whose Story?, 2009.
                </figcaption>
              </figure>
              <figure>
                <ZoomableImage
                  src="/images/underground/m21/sacred-quran-library-spread.webp"
                  alt="Interior spread headed ‘THE LIBRARY’, with a contributor’s reflection on remembrance and a Qur’anic verse from Surah Ra’ad — ‘Verily, in the remembrance of God do hearts find contentment’ — set facing a photograph of the Manor’s leather-armchaired library with floor-to-ceiling shelves."
                  width={1024}
                  height={768}
                  sizes="(min-width: 768px) 17rem, 100vw"
                  className="border border-hairline"
                  zoomLabel="Zoom the Sacred Qur’an library spread"
                  downloadName="sufipunk-sacred-quran-library-spread-2009.webp"
                  caption="Interior spread — The Library, paired with Surah Ra’ad."
                />
                <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                  Interior spread — The Library, paired with Surah Ra’ad.
                </figcaption>
              </figure>
            </div>
          </article>

          {/* Card 4 — Hakawatiyyah — The Storyteller (2010).
              M22: PROGRAMME COVER ONLY. The foreword-spread image and
              artistic-team-spread image are removed, and the 2010
              archival trailer <video> embed is removed entirely. The
              full 24-page souvenir programme PDF archive link is kept. */}
          <article className="mt-14 border-t border-hairline/60 pt-10">
            <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber-text">
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
                Stories from the Qur’an, drawn from conversations with Muslim
                women across Britain, travelled into music composed in Kosovo
                and performed across two countries.
              </p>
              <p>
                The stories remained the same. The form changed. The meeting
                with the Divine remained.
              </p>
            </div>

            {/* Programme cover only. */}
            <figure className="mt-6 max-w-md">
              <ZoomableImage
                src="/images/underground/m21/hakawatiyyah-cover.webp"
                alt="Programme cover for ‘Hakawatiyyah — The Storyteller’, presented by Ulfah Arts UK and Dam Festival Kosovo: a deep magenta field with the Arabic word حكواتية in teal above the English title in white, and a silhouette of an upraised hand emerging from drapery printed with Arabic calligraphy."
                width={1283}
                height={1771}
                sizes="(min-width: 768px) 28rem, 100vw"
                className="border border-hairline"
                zoomLabel="Zoom the Hakawatiyyah programme cover"
                downloadName="sufipunk-hakawatiyyah-programme-cover-2010.webp"
                caption="Programme cover — Ulfah Arts UK & DAM Festival Kosovo, 2010."
              />
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                Programme cover — Ulfah Arts UK & DAM Festival Kosovo, 2010.
              </figcaption>
            </figure>

            {/* Full programme as archival document — kept. */}
            <aside className="mt-8 border border-hairline bg-parchment-deep/30 px-6 py-6 sm:px-8 sm:py-7">
              <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber-text">
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

          {/* Sufi Punk show reel — M22 new video embed, placed near the
              end of "Before it had a name" where the FINAL file marks
              it. Embedded from YouTube (privacy-enhanced domain). */}
          <div className="mt-14 border-t border-hairline/60 pt-10">
            <div className="prose-zawiya sanctuary-prose">
              <p>
                To see this throughline in motion, across more projects than
                any single page could hold, here’s the Sufi Punk show reel:
              </p>
            </div>
            <figure className="mt-6">
              <div
                className="relative w-full overflow-hidden border border-hairline bg-ink"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${SHOWREEL_YOUTUBE_ID}`}
                  title="Sufi Punk show reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="mt-3 font-serif text-xs leading-relaxed text-ink-soft">
                <a
                  href={`https://youtu.be/${SHOWREEL_YOUTUBE_ID}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  Watch the Sufi Punk show reel →
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Closing tercet — explicit <br /> so three lines render as
              three lines. */}
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

        {/* An invitation — FINAL copy. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            An invitation
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              Most of this work has grown through conversation, shared
              curiosity and quiet recognition — the same way the treasure was
              always there, waiting for the searching that would know how to
              find it.
            </p>
            <p>
              If you are a neurodivergent person finding your own way to the
              divine — or a parent or carer wanting that same space for
              yourself or your child — you are welcome to write. This is simply
              an open door.
            </p>
            <p>
              If you work in faith, the arts, or culture, and something here
              meets work you are already doing — or simply opens a question you
              have been carrying yourself — I would be delighted to hear from
              you.
            </p>
            <p className="font-display italic text-green-soft">
              Programming.
              <br />
              Residencies.
              <br />
              Collaborations.
              <br />
              Conversation.
            </p>
            <p>A short, plain note, in your own words, is enough.</p>
            <p>Wherever the path begins is enough.</p>
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
              For quieter companionship, reflections and news about the book,
              you are warmly invited to join{" "}
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
import Image from "next/image";
const text = `Get inspired by this revived W.H. Auden’s Hymn to the United Nations.
        "Let music for peace Be the paradigm, For peace means to change At the
        right time, As the World-Clock, Goes Tick and Tock.So may the story Of
        our human city Presently move Get inspired by this revived W.H. Auden’s
        Hymn to the United Nations. "Let music for peace Be the paradigm, For
        peace means to change At the right time, As the World-Clock, Goes Tick
        and Tock.So may the story Of our human city Presently move Get inspired
        by this revived W.H. Auden’s Hymn to the United Nations. "Let music for
        peace Be the paradigm, For peace means to change At the right time, As
        the World-Clock, Goes Tick and Tock.So may the story Of our human city
        Presently move Get inspired by this revived W.H. Auden’s Hymn to the
        United Nations. "Let music for peace Be the paradigm, For peace means to
        change At the right time, As the World-Clock, Goes Tick and Tock.So may
        the story Of our human city Presently move Get inspired by this revived
        W.H. Auden’s Hymn to the United Nations. "Let music for peace Be the
        paradigm, For peace means to change At the right time, As the
        World-Clock, Goes Tick and Tock.So may the story Of our human city
        Presently move Get inspired by this revived W.H. Auden’s Hymn to the
        United Nations. "Let music for peace Be the paradigm, For peace means to
        change At the right time, As the World-Clock, Goes Tick and Tock.So may
        the story Of our human city Presently move`;
export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return (
    <div>
      <Image
        src="https://placehold.co/112x112.png"
        alt="news"
        width={1055}
        height={282}
        className="rounded-[1.25rem] object-cover w-263.75 h-70.5 mb-6"
      />

      {text.split(".").map((p, idx) => (
        <p key={idx} className="text-4 text-[#888] leading-7">
          {p}
        </p>
      ))}
    </div>
  );
}

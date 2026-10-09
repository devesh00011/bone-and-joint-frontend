// Server component: renders one or more JSON-LD blocks into the HTML.
export default function JsonLd({ data }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

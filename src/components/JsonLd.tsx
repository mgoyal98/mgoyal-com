export default function JsonLd({ id, data }: { id: string; data: unknown }) {
  // Escape `</` so a content value can never close the script tag early.
  const html = JSON.stringify(data).replace(/<\//g, '<\\/');
  return (
    <script
      id={id}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

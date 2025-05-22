export default function RenderConditional({
  condition,
  children,
}: {
  condition: boolean;
  children: React.ReactNode;
}) {
  if (condition) {
    return children;
  }
  return null;
}

export default function Chip({ text }: { text: string }) {
  return (
    <div className='rounded-full bg-primary/10 text-primary border border-primary/50 px-2.5 py-0.5 text-xs md:text-sm'>
      {text}
    </div>
  );
}

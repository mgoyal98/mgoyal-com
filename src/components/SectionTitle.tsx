export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-4xl md:text-5xl relative after:content-[" "] mb-5 after:absolute after:w-1/2 after:h-[1px] after:bg-primary after:mx-auto after:-bottom-4 after:left-1/2 after:-translate-x-1/2'>
        {title}
      </h2>
    </div>
  );
}

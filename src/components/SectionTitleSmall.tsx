export default function SectionTitleSmall({ title }: { title: string }) {
  return (
    <div className='flex'>
      <h3 className='text-xl md:text-2xl w-content relative after:content-[" "] mb-5 after:absolute after:w-1/2 after:h-[1px] after:bg-primary after:-bottom-4 after:left-0'>
        {title}
      </h3>
    </div>
  );
}

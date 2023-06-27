export function LoadingPulseModule() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex w-full group items-center gap-3 bg-zinc-800 p-4 animate-pulse"
        >
          <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs animate-pulse" />
          <div className="flex flex-col gap-1 text-left">
            <div className="w-20 h-2 bg-zinc-500 animate-pulse rounded" />
            <div className="w-10 h-2 bg-zinc-600 animate-pulse rounded" />
          </div>

          <div className="w-5 h-5 ml-auto text-zinc-400 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 transition-transform" />
        </div>
      ))}
    </>
  );
}

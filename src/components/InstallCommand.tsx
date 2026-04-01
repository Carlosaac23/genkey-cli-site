import { useCopy } from '@/hooks/useCopy';

export function InstallCommand() {
  const { isCopied, handleCopy } = useCopy();

  return (
    <div className='mx-auto w-full max-w-xl'>
      <div className='flex items-center gap-3 border border-b-0 border-zinc-700 px-4 py-2'>
        <div className='flex gap-1.5'>
          <span className='block size-2.5 rounded-full border border-zinc-500' />
          <span className='block size-2.5 rounded-full border border-zinc-500' />
          <span className='block size-2.5 rounded-full border border-zinc-500' />
        </div>
        <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>terminal</span>
      </div>

      <button
        type='button'
        onClick={handleCopy}
        aria-label='Copy install command'
        className='group flex w-full cursor-pointer flex-col items-start gap-3 border border-zinc-700 px-4 py-4 text-left transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5'
      >
        <div className='flex min-w-0 items-center gap-3'>
          <span className='shrink-0 text-zinc-300 select-none'>$</span>
          <code className='block overflow-x-auto text-sm tracking-wide text-zinc-200'>
            pnpm add -g genkey-cli
          </code>
        </div>
        <span className='shrink-0 text-[10px] tracking-widest text-zinc-400 uppercase transition-colors group-hover:text-zinc-200'>
          {isCopied ? 'copied' : 'copy'}
        </span>
      </button>

      <p className='mt-3 text-center text-[10px] tracking-widest text-zinc-400 uppercase'>
        also available via <code className='text-zinc-300'>npm i -g genkey-cli</code>
      </p>
    </div>
  );
}

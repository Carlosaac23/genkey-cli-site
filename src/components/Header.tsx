export function Header() {
  return (
    <header className='w-full border-b border-zinc-700 px-6 py-4'>
      <div className='mx-auto flex max-w-5xl items-center justify-between'>
        <div className='flex items-center gap-3'>
          <span className='text-sm font-bold tracking-widest text-zinc-200 uppercase'>
            genkey-cli
          </span>
          <span className='border border-zinc-700 px-2 py-0.5 text-[10px] tracking-widest text-zinc-400 uppercase'>
            v1.1.4
          </span>
        </div>
        <nav className='flex items-center gap-6'>
          <a
            href='https://github.com/Carlosaac23/genkey-cli'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-200'
          >
            GitHub
          </a>
          <a
            href='https://npmx.dev/package/genkey-cli'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-200'
          >
            npm
          </a>
        </nav>
      </div>
    </header>
  );
}

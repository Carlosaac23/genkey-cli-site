export function Footer() {
  return (
    <footer className='mt-24 w-full border-t border-zinc-700 px-6 py-6'>
      <div className='flex w-full flex-col items-center justify-between gap-4 md:flex-row'>
        <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>
          MIT License — Carlos Acosta
        </span>
        <div className='flex items-center gap-6'>
          <a
            href='https://github.com/Carlosaac23/genkey-cli'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-200'
          >
            Source
          </a>
          <a
            href='https://github.com/Carlosaac23/genkey-cli/blob/main/CHANGELOG.md'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-200'
          >
            Changelog
          </a>
          <a
            href='https://npmx.dev/package/genkey-cli'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-200'
          >
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}

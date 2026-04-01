import { commands, flags } from '@/helpers/arrays';

export function CommandsTable() {
  return (
    <div className='mx-auto flex w-full max-w-3xl flex-col gap-8'>
      <div>
        <p className='mb-3 text-[10px] tracking-widest text-zinc-400 uppercase'>Commands</p>
        <div className='border border-zinc-700'>
          {commands.map((row, i) => (
            <div
              key={i}
              className='grid grid-cols-1 gap-2 border-b border-zinc-700 px-4 py-3 transition-colors last:border-b-0 hover:bg-zinc-900 sm:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-5'
            >
              <code className='text-xs break-all text-zinc-200 sm:truncate'>{row.cmd}</code>
              <span className='shrink-0 text-left text-[10px] tracking-widest text-zinc-300 uppercase sm:text-center'>
                {row.alias ? `alias: ${row.alias}` : '—'}
              </span>
              <span className='text-left text-xs text-zinc-400 sm:text-right'>{row.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flags */}
      <div>
        <p className='mb-3 text-[10px] tracking-widest text-zinc-400 uppercase'>Options</p>
        <div className='border border-zinc-700'>
          {flags.map((row, i) => (
            <div
              key={i}
              className='grid grid-cols-1 gap-2 border-b border-zinc-700 px-4 py-3 transition-colors last:border-b-0 hover:bg-zinc-900 sm:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-5'
            >
              <code className='text-xs break-all text-zinc-200 sm:truncate'>{row.flag}</code>
              <span className='shrink-0 text-left text-[10px] tracking-widest text-zinc-300 uppercase sm:text-center'>
                {row.short ?? '—'}
              </span>
              <span className='text-left text-xs text-zinc-400 sm:text-right'>{row.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

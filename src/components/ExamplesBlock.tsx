import { useState } from 'react';

import { examples } from '@/helpers/arrays';

export function ExamplesBlock() {
  const [active, setActive] = useState(0);
  const current = examples[active];

  return (
    <div className='mx-auto w-full max-w-3xl'>
      <p className='mb-3 text-[10px] tracking-widest text-zinc-400 uppercase'>Examples</p>

      <div className='flex flex-wrap border border-b-0 border-zinc-700'>
        {examples.map((ex, i) => (
          <button
            key={i}
            type='button'
            onClick={() => setActive(i)}
            className={`basis-1/2 border-r border-b border-zinc-700 px-3 py-2 text-[10px] tracking-widest uppercase transition-colors last:border-r-0 even:border-r-0 sm:flex-1 sm:basis-auto sm:border-b-0 sm:even:border-r ${
              active === i
                ? 'bg-zinc-950 text-zinc-200'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
            }`}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className='border border-zinc-700'>
        <div className='flex items-center gap-3 border-b border-zinc-700 bg-zinc-950 px-5 py-3'>
          <span className='text-xs text-zinc-400 select-none'>$</span>
          <code className='text-xs break-all text-zinc-200'>{current?.cmd}</code>
        </div>

        <div className='min-h-20 px-5 py-4'>
          <pre className='text-xs leading-relaxed whitespace-pre-wrap text-zinc-400'>
            {current?.output}
          </pre>
        </div>
      </div>
    </div>
  );
}

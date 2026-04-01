import { CommandsTable } from '@/components/CommandsTable';
import { ExamplesBlock } from '@/components/ExamplesBlock';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { InstallCommand } from '@/components/InstallCommand';
import { characteristics, features } from '@/helpers/arrays';
import { useVersion } from '@/hooks/useVersion';

export default function Home() {
  const { version } = useVersion();

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='mx-auto flex w-full max-w-5xl flex-1 flex-col gap-24 px-6 py-20'>
        <section className='flex flex-col items-center gap-10 text-center'>
          <div className='flex items-center gap-2 border border-zinc-700 px-4 py-1.5'>
            <span className='block size-1.5 animate-pulse rounded-full bg-zinc-200' />
            <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>
              Status: Active — v{version}
            </span>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl leading-none font-bold tracking-tight text-balance text-zinc-200 uppercase md:text-5xl lg:text-6xl'>
              genkey-cli
            </h1>
            <p className='mx-auto max-w-lg text-sm leading-relaxed text-balance text-zinc-400 md:text-base'>
              Generate secret keys and UUIDs directly from your terminal. No browser. No scripts.
              One command.
            </p>
          </div>

          <div className='flex w-full max-w-xl items-center gap-4'>
            <div className='h-px flex-1 bg-zinc-700' />
            <span className='shrink-0 text-[10px] tracking-widest text-zinc-400 uppercase'>
              Install
            </span>
            <div className='h-px flex-1 bg-zinc-700' />
          </div>

          <InstallCommand />

          <div className='grid w-full max-w-xl grid-cols-3 border border-zinc-700'>
            {characteristics.map(item => (
              <div
                key={item.label}
                className='flex flex-col items-center justify-center gap-1 border-r border-zinc-700 px-3 py-4 last:border-r-0'
              >
                <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>
                  {item.label}
                </span>
                <span className='text-xs tracking-wide text-zinc-200 uppercase'>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>Why</span>
            <div className='h-px flex-1 bg-zinc-700' />
          </div>
          <p className='max-w-2xl text-sm leading-relaxed text-zinc-400'>
            Every developer at some point needs a quick secret key for a JWT, or a UUID for a
            database record. Instead of opening a browser, writing a script, or digging through docs
            — just run one command and get what you need instantly.
          </p>
          <div className='mt-2 grid grid-cols-1 gap-4 md:grid-cols-3'>
            {features.map(card => (
              <div
                key={card.title}
                className='flex flex-col gap-2 border border-zinc-700 px-5 py-5 transition-colors hover:bg-zinc-900'
              >
                <span className='text-xs tracking-widest text-zinc-200 uppercase'>
                  {card.title}
                </span>
                <span className='text-xs leading-relaxed text-zinc-400'>{card.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>Reference</span>
            <div className='h-px flex-1 bg-zinc-700' />
          </div>
          <CommandsTable />
        </section>

        <section className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <span className='text-[10px] tracking-widest text-zinc-400 uppercase'>Usage</span>
            <div className='h-px flex-1 bg-zinc-700' />
          </div>
          <ExamplesBlock />
        </section>

        <section className='flex flex-col items-center gap-6 border border-zinc-700 px-6 py-14 text-center'>
          <p className='text-[10px] tracking-widest text-zinc-400 uppercase'>Ready to use</p>
          <h2 className='text-2xl font-bold tracking-tight text-balance text-zinc-200 uppercase md:text-3xl'>
            Start generating keys
          </h2>
          <div className='mt-2 flex flex-col items-center gap-3 sm:flex-row'>
            <a
              href='https://github.com/Carlosaac23/genkey-cli'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-zinc-700 px-6 py-2.5 text-[10px] tracking-widest text-zinc-200 uppercase transition-colors hover:bg-zinc-900 hover:text-zinc-200'
            >
              View on GitHub
            </a>
            <a
              href='https://www.npmjs.com/package/genkey-cli'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-zinc-700 px-6 py-2.5 text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:border-zinc-500 hover:text-zinc-200'
            >
              View on npm
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

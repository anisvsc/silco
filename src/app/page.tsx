import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center border">
      <div className="flex flex-col items-center justify-center gap-4 rounded-4xl border bg-primary-foreground/50 pb-4">
        <Image
          alt="silco"
          className="rounded-3xl"
          height={300}
          src={'/silco.jpg'}
          width={300}
        />
        <p className="inline-block font-bold font-mono text-4xl">SILCO</p>
      </div>
    </div>
  );
}

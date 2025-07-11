// app/page.tsx

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { personalities } from '@/lib/personalities';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState('');

  const handleStartCall = () => {
    if (selected) router.push(`/call?personality=${selected}`);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-4xl font-bold text-center">AI Funtime</h1>
      <p className="text-lg text-center max-w-md">Choose a personality to start your AI voice call.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {personalities.map((p) => (
          <Button
            key={p.id}
            onClick={() => setSelected(p.id)}
            variant={selected === p.id ? 'default' : 'outline'}
            className="text-sm py-6 px-4"
          >
            {p.name}
          </Button>
        ))}
      </div>

      <Button
        onClick={handleStartCall}
        disabled={!selected}
        className="mt-6 px-6 py-3 text-lg bg-green-600 hover:bg-green-700"
      >
        Start Call
      </Button>
    </main>
  );
}

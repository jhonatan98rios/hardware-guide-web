import { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useHomeViewModel() {
  const router = useRouter();
  const [sample, setSample] = useState<string>('');
  const [active, setActive] = useState(false);

  function handleSampleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setSample(value);

    if (value.replace(/[0-9]| /g, '').length >= 3) {
      setActive(true);

      //@ts-ignore
      if (e.key === 'Enter') {
        handleSubmit();
      }
    } else {
      setActive(false);
    }
  }

  function handleSubmit() {
    setActive(false);
    router.push(`/result?sample=${sample}`);
  }

  useEffect(() => {
    setSample('');
  }, []);

  return {
    sample,
    active,
    handleSampleChange,
    handleSubmit,
  };
}
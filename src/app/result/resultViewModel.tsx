import { useState, useEffect } from 'react';
import { fetchRecommendations, Recommendation } from './resultModel';
import { useRouter, useSearchParams } from 'next/navigation';

export function useResultViewModel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [content, setContent] = useState<Recommendation[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sample = searchParams.get('sample');

    if (!sample) {
      router.push("/");
      return;
    }

    fetchRecommendations(sample)
      .then(data => setContent(data))
      .catch(err => setError(err.message));
  }, [searchParams, router]);

  return {
    content,
    error,
  };
}
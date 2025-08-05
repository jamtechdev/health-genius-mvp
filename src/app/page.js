'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${routing.defaultLocale}`);
  }, []);

  return null;
}
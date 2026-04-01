import { useState, useEffect } from 'react';

import { getCurrentVersion } from '@/lib/getCurrentVersion';

export function useVersion() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    async function getVersion() {
      try {
        const currentVersion = await getCurrentVersion();
        setVersion(currentVersion);
      } catch (error: any) {
        console.error(error.message);
      }
    }

    getVersion();
  }, []);

  return { version };
}

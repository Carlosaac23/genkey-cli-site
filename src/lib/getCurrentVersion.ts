export async function getCurrentVersion() {
  const URL = 'https://registry.npmjs.org/genkey-cli/latest';
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error('Failed to fetch package version');
  }

  const { version } = await res.json();
  return version;
}

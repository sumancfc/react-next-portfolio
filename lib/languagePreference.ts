// Persisted client-side only (page <title> stays static/German so every
// route can still be statically generated — see app/layout.tsx). This
// just lets a returning visitor's language choice survive a page reload
// instead of resetting to the default every time.
export function persistLanguagePreference(lng: string): void {
  document.cookie = `lang=${lng}; path=/; max-age=31536000`;
}

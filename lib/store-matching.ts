import { STORES, StoreRef } from "./stores";

// Benny's map does not currently support a unique URL for an individual store.
// Ignore any relative store path or URL supplied by the API and always send the
// "View on Map" button to the map homepage instead. Keep the argument so the
// webhook and nightly sync can continue calling this helper without other changes.
const BENNY_MAP_HOME_URL = "https://collectify-beta.vercel.app";

export function resolveBennyUrl(
  _url: string | null | undefined
): string {
  return BENNY_MAP_HOME_URL;
}

// Shared by the map-reports webhook (Line Forming) and the nightly guide
// sync (write-ups/predictions) - both need to match an address coming from
// Benny's system against our 171 stores, since exact string equality across
// two independently-formatted addresses is unlikely.

export function normalizeAddress(addr: string): string {
  let a = addr
    .toLowerCase()
    .replace(/[.,#]/g, "")
    .replace(/\bsuite\b|\bste\b|\bunit\b/g, "");
  // Directional words vs abbreviations (e.g. "North" vs "N") caused real
  // false-negative matches against known stores - normalize both to the
  // short form before comparing.
  a = a.replace(/\bnorth\b/g, "n");
  a = a.replace(/\bsouth\b/g, "s");
  a = a.replace(/\beast\b/g, "e");
  a = a.replace(/\bwest\b/g, "w");
  return a.replace(/\s+/g, " ").trim();
}

export function matchStoreByAddress(rawAddress: string): StoreRef | null {
  if (!rawAddress) return null;
  const target = normalizeAddress(rawAddress);
  const targetNumber = target.match(/^\d+/)?.[0];

  for (const store of STORES) {
    if (!store.address) continue;
    const candidate = normalizeAddress(store.address);
    const candidateNumber = candidate.match(/^\d+/)?.[0];
    if (targetNumber && candidateNumber && targetNumber === candidateNumber) {
      // Loosened from a single 3-word block to checking any 2 consecutive
      // words within the next few - the old fixed window was too strict
      // and missed real matches when word order/count varied slightly.
      const tWords = target.split(" ").slice(1, 6);
      const cWordsStr = candidate.split(" ").slice(1, 6).join(" ");
      for (let i = 0; i < tWords.length - 1; i++) {
        const pair = `${tWords[i]} ${tWords[i + 1]}`;
        if (cWordsStr.includes(pair)) {
          return store;
        }
      }
    }
  }
  return null;
}

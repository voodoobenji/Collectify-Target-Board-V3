import { STORES, StoreRef } from "./stores";

// Shared by the map-reports webhook (Line Forming) and the nightly guide
// sync (write-ups/predictions) - both need to match an address coming from
// Benny's system against our 171 stores, since exact string equality across
// two independently-formatted addresses is unlikely.

export function normalizeAddress(addr: string): string {
  return addr
    .toLowerCase()
    .replace(/[.,#]/g, "")
    .replace(/\bsuite\b|\bste\b|\bunit\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
      const targetWords = target.split(" ").slice(1, 4).join(" ");
      if (candidate.includes(targetWords) || target.includes(candidate.split(" ").slice(1, 4).join(" "))) {
        return store;
      }
    }
  }
  return null;
}

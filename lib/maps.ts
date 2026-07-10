import type { StoreRef } from "./stores";

export function appleMapsUrl(store: StoreRef): string {
  if (store.lat != null && store.lng != null) {
    const label = encodeURIComponent(store.address ?? store.name);
    return `https://maps.apple.com/?ll=${store.lat},${store.lng}&q=${label}`;
  }
  // No coordinates yet - use the real street address if we have one rather
  // than a generic "Target {name}, CA" search, which can be ambiguous or
  // wrong for stores named after a street rather than a neighborhood.
  const query = encodeURIComponent(store.address ?? `Target ${store.name}, CA`);
  return `https://maps.apple.com/?q=${query}`;
}

export function googleMapsUrl(store: StoreRef): string {
  if (store.lat != null && store.lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${store.lat},${store.lng}`;
  }
  const query = encodeURIComponent(store.address ?? `Target ${store.name}, CA`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

import type { StoreRef } from "./stores";

export function appleMapsUrl(store: StoreRef): string {
  if (store.lat != null && store.lng != null) {
    const label = encodeURIComponent(store.address ?? store.name);
    return `https://maps.apple.com/?ll=${store.lat},${store.lng}&q=${label}`;
  }
  const query = encodeURIComponent(`Target ${store.name}, CA`);
  return `https://maps.apple.com/?q=${query}`;
}

export function googleMapsUrl(store: StoreRef): string {
  if (store.lat != null && store.lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${store.lat},${store.lng}`;
  }
  const query = encodeURIComponent(`Target ${store.name}, CA`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

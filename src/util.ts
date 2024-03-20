import type { Readable, Writable } from "svelte/store";

export type ReadableCluster<T> = {
	[P in keyof T]: Readable<T[P]>
};

export type WritableCluster<T> = {
	[P in keyof T]: Writable<T[P]>
};

export type PickStoreValues<T> = {
  [P in keyof T as T[P] extends Readable<unknown> ? P : never]: T[P] extends Readable<infer X> ? X : never;
}


export function asReadable<T>(store: WritableCluster<T>) {
  const readable = {} as ReadableCluster<T>;
  let key: keyof T

  for (const k of Object.keys(store)) {
    key = k as keyof T;
    const prop = store[key];

    readable[key] = {
      subscribe: prop.subscribe
    }
  }

  return readable;
}
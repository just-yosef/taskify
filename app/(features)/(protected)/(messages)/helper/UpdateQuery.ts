import type { QueryClient } from "@tanstack/react-query";

export function updateQueryCache<T>(
    qc: QueryClient,
    key: (string | number)[],
    updater: (oldData: T | undefined) => T
) {
    qc.setQueryData<T>(key, (old) => updater(old));
}
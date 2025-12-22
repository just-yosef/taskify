import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
export type Params = {
    query: string;
    searchParams: ReadonlyURLSearchParams;
    router: AppRouterInstance;
    queryKey: string
}
export const handleAddingSearch = ({ queryKey, query, router, searchParams }: Params) => {
    const params = new URLSearchParams((searchParams).toString());
    params.set(queryKey, query);
    router.push(`?${params.toString()}`);
};
"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useCallback, useState } from "react";
import { categories } from "../constants";
import { useRouter, useSearchParams } from "next/navigation";
import { handleAddingSearch } from "@/app/(shared)/helpers/setSearchParams";
import { type Params } from "@/app/(shared)/helpers/setSearchParams";
const FilterProjects = () => {
  const router = useRouter();
  const sp = useSearchParams();
  return (
    <div className="p-5 bg-teal-soft rounded-lg sticky top-[90px] ">
      <h3 className="font-semibold">Filter Projects</h3>
      <section className="mt-5">
        <SearchField router={router} searchParams={sp} />
      </section>
      <section className="mt-5">
        <Categories router={router} searchParams={sp} />
      </section>
    </div>
  );
};

export default FilterProjects;
type P = Pick<Params, "searchParams" | "router">;

function SearchField({ router, searchParams: sp }: P) {
  const [searchValue, setSearchValue] = useState("");
  const addSearchParams = useCallback(handleAddingSearch, [searchValue]);
  const handelSearching = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        addSearchParams({
          query: e.currentTarget.value,
          queryKey: "search",
          router,
          searchParams: sp,
        });
      } else {
        setSearchValue(e.currentTarget.value);
      }
    },
    [searchValue]
  );
  return (
    <>
      <Label htmlFor="search-project">Search</Label>
      <Input id="search-project" onKeyDown={handelSearching} className="mt-2" />
    </>
  );
}

function Categories({ router, searchParams: sp }: P) {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>();
  const addSearchParams = useCallback(handleAddingSearch, [selectedCategories]);

  return (
    <>
      <h3>Categories</h3>
      {categories.map((el) => (
        <Label
          onClick={(e) => {
            const val = (e.currentTarget.children[0] as HTMLInputElement)
              ?.value;
            setSelectedCategories((prev) => {
              const updatedSet = new Set(prev);
              if (updatedSet?.has(val)) updatedSet.delete(val);
              else updatedSet.add(val);
              addSearchParams({
                query: updatedSet?.values().toArray().join(", "),
                queryKey: "categories",
                router,
                searchParams: sp,
              });
              return updatedSet;
            });
          }}
          htmlFor={el.id}
          className="mb-3"
        >
          <Checkbox id={el.id} value={el.id} />
          {el.title.split(", ")[0]}
        </Label>
      ))}
    </>
  );
}

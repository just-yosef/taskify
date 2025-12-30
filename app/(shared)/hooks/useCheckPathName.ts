"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
export function useRedirectRoute(currentPath: string,) {
    const pathName = usePathname();
    const [isNeedRedirect, setIsNeedRedirect] = useState(false);
    useEffect(() => {
        if (pathName === `/${currentPath}`) setIsNeedRedirect(true)
    }, [pathName])
    return { isNeedRedirect }
}
import { ReactNode, FC } from "react";
import { $path, navigate } from "../states/routes";
import useRXjs from "../hooks/useRXjx";

type Props ={
    children: ReactNode,
    path: string,
    hasAccess?: boolean
}

export const Route: FC<Props> = ({children, path, hasAccess = true}) => {
    const currentPath = useRXjs($path)
    if (path !== currentPath) return null
    if (!hasAccess) {
        setTimeout(()=>navigate('/'), 0)
        return null
    }
    return <>{children}</>
}
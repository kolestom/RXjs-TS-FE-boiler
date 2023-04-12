import { ReactNode, FC } from "react";
import { $path } from "../states/routes";
import useRXjs from "../hooks/useRXjx";

type Props ={
    children: ReactNode,
    path: string
}

export const Route: FC<Props> = ({children, path}) => {
    const currentPath = useRXjs($path)
    if (path !== currentPath) return null
    
    return <>{children}</>
}
import {useEffect} from "react";

type func = (input: KeyboardEvent) => any

export default function useKeyBoardEvent(onKey: func) {
    useEffect(() => {
        window.addEventListener("keyup", onKey, false);
        return () => {
            window.addEventListener("keyup", onKey, false);
        };
    }, [onKey]);
}
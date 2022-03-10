export function replaceAt(str: string, index: number, replacement: string): string {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export function charAt(str: string, index: number): string {
    return str.slice(index, index + 1)
}

export function occurences(str: string, letter: string): number {
    return str
        .split("")
        .reduce((prev: number,curr: string) => curr === letter ? prev + 1 : prev, 0)
}
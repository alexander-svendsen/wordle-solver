export function replaceAt(str: string, index: number, replacement: string): string {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export function charAt(str: string, index: number): string {
    return str.slice(index, index + 1)
}
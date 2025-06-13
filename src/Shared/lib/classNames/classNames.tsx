type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {}, additionally: string[] = []): string {
    return [
        cls,
        ...additionally.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}
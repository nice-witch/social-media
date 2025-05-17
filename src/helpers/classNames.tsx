type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods, additionally: string[]): string {
    return [
        cls,
        ...additionally,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}

// { active: true, focus: false }
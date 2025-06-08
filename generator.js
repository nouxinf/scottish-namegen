export function generate(prefixes, suffixes, streets) {
    let part1 = prefixes[Math.floor(Math.random() * prefixes.length)];
    let part2 = suffixes[Math.floor(Math.random() * suffixes.length)];
    if (streets != null) {
        let part3 = streets[Math.floor(Math.random() * streets.length)];
        return `${part1}${part2} ${part3}`;
    } else {
        return `${part1}${part2}`
    }
}
function findFirstRepeated(gifts: number[]): number {
    const seenIds: { [key: number]: boolean } = {};

    for (let i = 0; i < gifts.length; i++) {
        if (seenIds[gifts[i]]) {
            return gifts[i];
        }
        seenIds[gifts[i]] = true;
    }

    return -1;
}
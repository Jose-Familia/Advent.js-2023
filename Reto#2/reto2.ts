function manufacture(gifts: string[], materials: string): string[] {
    return gifts.filter(gift => {
        for (let i = 0; i < gift.length; i++) {
            if (!materials.includes(gift[i])) {
                return false;
            }
        }
        return true;
    });
}
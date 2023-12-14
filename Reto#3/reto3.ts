function findNaughtyStep(original: string, modified: string): string {
    const minLength = Math.min(original.length, modified.length);

    for (let i = 0; i < minLength; i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i];
        }
    }

    if (original.length !== modified.length) {
        return original.length > modified.length ? original[minLength] : modified[minLength];
    }

    return '';
}
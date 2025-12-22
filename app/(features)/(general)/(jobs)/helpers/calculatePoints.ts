export function calculcatePoints(min: number, max: number): number {
    if (max <= 50) return 5
    if (min > 50 && max <= 99) return 10
    else if (min >= 100 && max <= 400) return 20;
    else if (min >= 400 && max <= 900) return 40
    if (max > 500) return 80
    return 1
};

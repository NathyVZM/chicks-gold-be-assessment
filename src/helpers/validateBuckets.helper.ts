export const validateBuckets = (x: number, y: number, z: number) => {
    if (z > x && z > y) return 'No solution - Amount wanted greater than buckets capacity'
    if (x < 0 || y < 0 || z < 0) return 'No solution - Negative numbers'
    if (x === y) return 'No solution - Buckets capacities are the same'

    return true
}
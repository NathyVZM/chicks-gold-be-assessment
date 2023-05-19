export class Bucket {
    capacity = 0
    current = 0

    constructor(capacity: number) {
        this.capacity = capacity
    }

    fill() {
        this.current = this.capacity
    }

    empty() {
        this.current = 0
    }

    transfer(amount: number) {
        if (this.current + amount <= this.capacity) {
            this.current += amount
            return this.current
        }

        const overflow = this.capacity - this.current
        this.current = this.capacity
        return overflow
    }

    isFull() {
        if (this.current === this.capacity) return true
        else return false
    }

    isEmpty() {
        if (this.current === 0) return true
        else return false
    }
}
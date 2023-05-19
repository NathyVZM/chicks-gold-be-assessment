export class Bucket {
    private capacity = 0
    private current = 0

    constructor(capacity: number) {
        this.capacity = capacity
    }

    get getCurrent() {
        return this.current
    }

    set setCurrent(current: number) {
        this.current = current
    }

    get getCapacity() {
        return this.capacity
    }

    set setCapacity(capacity: number) {
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
            return amount
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
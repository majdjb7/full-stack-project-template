// Season enums can be grouped as static members of a class
class Status {
    // Create new instances of the same class as static attributes
    static Applied = new Status("Applied")
    static Active = new Status("Active")
    static Rejected = new Status("Rejected")
    static Accepted = new Status("Accepted")
    static noReply = new Status("noReply")

    constructor(name) {
        this.name = name
    }
}

module.exports = Status
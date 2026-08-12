// Classe Topic
export class Subopic {
    private _id: string
    private _name: string
    private _createdAt: Date
    private _updatedAt: Date

    // Construtor da classe

    constructor(props: {
        id: string
        name: string
        createdAt: Date
        updatedAt: Date
    })
    {
        this._id = props.id
        this._name = props.name
        this._createdAt = props.createdAt
        this._updatedAt = props.updatedAt

        this.validate()
    }

    // Getters

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get createdAt() {
        return this._createdAt
    }

    get updatedAt() {
        return this._updatedAt
    }

    // Regras internas

    private validate() {
        if (!this._name || this._name.length < 5) {
            throw new Error('Name lenght must have more than 5 characters')
        }
    }

        private touch() {
        this._updatedAt = new Date
    }
}
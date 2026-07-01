// Enums do author
export type AuthorStatus = 'research' | 'complete'

// Classe Author
export class Author {
    private _id: string
    private _name: string
    private _birthDate: Date
    private _deathDate?: Date
    private _biography: string
    private _status: AuthorStatus
    private _createdAt: Date
    private _updatedAt: Date

    // Construtor da classe

    constructor(props: {
        id: string
        name: string
        birthDate: Date
        deathDate: Date
        biography: string
        status?: AuthorStatus
        createdAt?: Date
        updatedAt?: Date
    })
    {
        this._id = props.id
        this._name = props.name
        this._birthDate = props.birthDate
        this._deathDate = props.deathDate
        this._biography = props.biography
        this._status = props.status ?? 'research'
        this._createdAt = props.createdAt ?? new Date()
        this._updatedAt = props.updatedAt ?? new Date()

        this.validate()
    }
    
    // Getters

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get birthDate() {
        return this._birthDate
    }

    get deathDate() {
        return this._deathDate
    }

    get biography() {
        return this._biography
    }

    get status() {
        return this._status
    }

    get createdAt() {
        return this._createdAt
    }

    get updatedAt() {
        return this._updatedAt
    }

    // Regras de negócio (state machine)
    approve() {
        if (this._status !== 'research') {
            throw new Error('Only research authors can be approved')
        }

        this._status = 'complete'
        this.touch()
    }

    updateContent(author: string, biography: string) {
        if (this._status === 'research') {
            throw new Error('Authors not completed cannot be updated')
        }

        this._name = author
        this._biography = biography
        this.touch()
    }

    // Regras internas
    private validate() {
        if (this._name || this._name.length < 5) {
            throw new Error('Name length must have at least 5 letters')
        }

        if (!this._birthDate) {
            throw new Error('Birth date is required')
        }

        if (this._deathDate && this._birthDate > this._deathDate) {
            throw new Error('Birth date cannot be after death date')
        }
    }

    private touch() {
        this._updatedAt = new Date
    }
}
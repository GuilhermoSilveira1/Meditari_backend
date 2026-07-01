// Enums do author
export type AuthorStatus = 'research' | 'complete'

// Classe Author
export class Author {
    private _id: string
    private _name: string
    private _birthDate: Date
    private _deathDate: Date
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
        this._createdAt = props.createdAt ?? new Date
        this._updatedAt = props.updatedAt ?? new Date

        this.validate
    }
    
    // Getters
}
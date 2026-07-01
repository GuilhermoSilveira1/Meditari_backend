// Enum dos quote status
export type QuoteStatus = 'draft' | 'approved' | 'delivered'

// Classe quote
export class Quote {
    private _id: string
    private _quote: string
    private _context: string
    private _authorId: string
    private _themeId: string
    private _status: QuoteStatus
    private _createdAt: Date
    private _updatedAt: Date

    // Construtor da classe
    // Parâmetros
    constructor(props: {
        id: string
        quote: string
        context: string
        authorId: string
        themeId: string
        status?: QuoteStatus
        createdAt?: Date
        updatedAt?: Date
    }) 
    // Passando os parâmetros recebidos para os valores internos do objeto 
    {
        this._id = props.id
        this._quote = props.quote
        this._context = props.context
        this._authorId = props.authorId
        this._themeId = props.themeId
        this._status = props.status ?? 'draft'
        this._createdAt = props.createdAt ?? new Date
        this._updatedAt = props.updatedAt ?? new Date

        this.validate()
    }

    // Getters
    get id() {
        return this.id
    }

    get quote() {
        return this.quote
    }

    get context() {
        return this.context
    }

    get authorId() {
        return this.authorId
    }

    get themeId() {
        return this.themeId
    }

    get status() {
        return this.status
    }

    get createdAt() {
        return this.createdAt
    }

    get updatedAt() {
        return this.updatedAt
    }

    // Regras de negócio (state machine)
    approve() {
        if (this._status !== 'draft') {
            throw new Error('Only draf quotes can be approved')
        }

        this._status = 'approved'
        this.touch()
    }
    
    markAsDelivered() {
        if (this._status !== 'approved') {
            throw new Error('Only approved quotes can be delivered')
        }

        this._status = 'delivered'
        this.touch()
    }

    // Regras de modificação
    updateContent(quote: string, context: string) {
        if (this._status === 'delivered') {
            throw new Error('Delivered quotes cannot be edited')
        }

        this._quote = quote
        this._context = context
        this.touch()
    }

    // Regras Internas
    private validate() {
        if (!this._quote || this.quote.length < 5) {
            throw new Error('Quote text must have at least 5 characters')
        }

        if (!this.authorId) {
            throw new Error('Quote must have an author')
        }

        if (!this.themeId) {
            throw new Error('Quote must have a topic')
        }
    }

    private touch() {
        this._updatedAt = new Date
    }
}
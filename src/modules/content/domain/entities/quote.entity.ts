// Enum dos quote status
export type QuoteStatus = 'draft' | 'approved' | 'delivered'

// Classe quote
export class Quote {
    private _id: string
    private _quote: string
    private _context: string
    private _authorId: string
    private _topicId: string
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
        topicId: string
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
        this._topicId = props.topicId
        this._status = props.status ?? 'draft'
        this._createdAt = props.createdAt ?? new Date
        this._updatedAt = props.updatedAt ?? new Date

        this.validate()
    }

    // Getters
    get id() {
        return this._id
    }

    get quote() {
        return this._quote
    }

    get context() {
        return this._context
    }

    get authorId() {
        return this._authorId
    }

    get topicId() {
        return this._topicId
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

        if (!this.topicId) {
            throw new Error('Quote must have a topic')
        }
    }

    private touch() {
        this._updatedAt = new Date
    }
}
// Enum dos quote status
export type QuoteStatus = 'draft' | 'approved' | 'rejected'

// Classe quote
export class Quote {
    private _id: string
    private _quote: string
    private _context: string
    private _authorId: string
    private _topicId: string
    private _subtopicId: string
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
        subtopicId?: string
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
        this._subtopicId = props.subtopicId ?? 'tbd'
        this._status = props.status ?? 'draft'
        this._createdAt = props.createdAt ?? new Date
        this._updatedAt = props.updatedAt ?? new Date

        this.validate()
    }

    // Getters
    getId() {
        return this._id
    }

    getQuote() {
        return this._quote
    }

    getContext() {
        return this._context
    }

    getAuthorId() {
        return this._authorId
    }

    getTopicId() {
        return this._topicId
    }
    
    getSubtopicId() {
        return this._subtopicId
    }

    getStatus() {
        return this._status
    }

    getCreatedAt() {
        return this._createdAt
    }

    getUpdatedAt() {
        return this._updatedAt
    }

    // Regras de negócio (state machine)
    approve() {
        if (this._status !== 'draft') {
            throw new Error('Only draft quotes can be approved')
        }

        this._status = 'approved'
        this.touch()
    }

    reject() {
        if (this._status !== 'draft') {
            throw new Error('Only draft quotes can be rejected')
        }

        this._status = 'rejected'
        this.touch()
    }
 
    // Regras de modificação
    updateContent(quote: string, context: string) {
        if (this._status === 'approved') {
            throw new Error('Approved quotes cannot be edited')
        }

        this._quote = quote
        this._context = context
        this.touch()
    }

    // Regras Internas
    private validate() {
        if (!this._quote || this._quote.length < 5) {
            throw new Error('Quote text must have at least 5 characters')
        }

        if (!this._authorId) {
            throw new Error('Quote must have an author')
        }

        if (!this._topicId) {
            throw new Error('Quote must have a topic')
        }
    }

    private touch() {
        this._updatedAt = new Date
    }
}
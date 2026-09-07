// Enum dos quote status
export type QuoteDeliveryStatus = 'undelivered' | 'delivered'

// Classe quote
export class QuoteDelivery {
    private _id: string
    private _quote: string
    private _status: QuoteDeliveryStatus
    private _createdAt: Date
    private _updatedAt: Date

    // Construtor da classe
    // Parâmetros
    constructor(props: {
        id: string
        quote: string
        status?: QuoteDeliveryStatus
        createdAt?: Date
        updatedAt?: Date
    }) 

    // Passando os parâmetros recebidos para os valores internos do objeto 
    {
        this._id = props.id
        this._quote = props.quote
        this._status = props.status ?? 'undelivered'
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
        if (this._status !== 'undelivered') {
            throw new Error('Only undelivered quotes can be delivered')
        }

        this._status = 'delivered'
        this.touch()
    }
    
    markAsDelivered(quote.status) {
        if (this._quote.status !== 'approved') {
            throw new Error('Only approved quotes can be delivered')
        }

        this._status = 'delivered'
        this._quote.status = this._status
        this.touch()
    }

    // Regras de modificação
    updateContent(quote: string) {
        if (this._status === 'delivered') {
            throw new Error('Delivered quotes cannot be edited')
        }

        this._quote = quote
        this.touch()
    }

    // Regras Internas
    private validate() {
        if (!this._quote || this._quote.length < 5) {
            throw new Error('Quote text must have at least 5 characters')
        }
    }

    private touch() {
        this._updatedAt = new Date
    }
}
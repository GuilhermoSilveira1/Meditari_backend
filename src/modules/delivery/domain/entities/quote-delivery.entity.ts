// Enum dos quote status
export type QuoteDeliveryStatus = 'undelivered' | 'delivered'

// Classe quote
export class QuoteDelivery {
    private _id: string
    private _quoteId: string
    private _status: QuoteDeliveryStatus
    private _createdAt: Date
    private _deliveredAt: Date
    private _updatedAt: Date

    // Construtor da classe
    // Parâmetros
    constructor(props: {
        id: string
        quoteId: string
        status?: QuoteDeliveryStatus
        createdAt?: Date
        deliveredAt?: Date
        updatedAt?: Date
    }) 

    // Passando os parâmetros recebidos para os valores internos do objeto 
    {
        this._id = props.id
        this._quoteId = props.quoteId
        this._status = props.status ?? 'undelivered'
        this._createdAt = props.createdAt ?? new Date
        this._deliveredAt = props.deliveredAt ?? new Date
        this._updatedAt = props.updatedAt ?? new Date
    }

    // Getters
    getId() {
        return this._id
    }

    getQuoteId() {
        return this._quoteId
    }

    getStatus() {
        return this._status
    }

    getCreatedAt() {
        return this._createdAt
    }

    getDeliveredAt() {
        return this._deliveredAt
    }

    getUpdatedAt() {
        return this._updatedAt
    }

    // Regras de negócio (state machine) 
    deliver() {
        if (this._status !== 'delivered') {
            throw new Error('Only undelivered quotes can be delivered')
        }

        this._status = 'delivered'
        this._deliveredAt = new Date
        this.touch()
    }

    // Regras de modificação
    updateContent(quote: string) {
        if (this._status === 'delivered') {
            throw new Error('Delivered quotes cannot be edited')
        }

        this._quoteId = quote
        this.touch()
    }

    private touch() {
        this._updatedAt = new Date
    }
}
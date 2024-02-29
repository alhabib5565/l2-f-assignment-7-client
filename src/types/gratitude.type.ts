export interface TGratitude {
    _id: string
    text: string
    user: User
    supplyId: string
    createAt: string
}

export interface User {
    name: string
    email: string
    photo: string
}
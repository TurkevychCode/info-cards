export interface IUser{
    id: number,
    name: string,
    email: string,
    phone: number
}
export interface IPosts{
    userId: number,
    id: number,
    title: string,
    body: string
}
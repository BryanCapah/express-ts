import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table } from 'sequelize-typescript'

export interface IUser {
    id?: number | null
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
}

@Table({
    tableName: 'users',
    timestamps: true
})
export default class User extends Model implements IUser {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    first_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    last_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    phone_number!: string
}
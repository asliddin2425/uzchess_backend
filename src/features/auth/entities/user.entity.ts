import { Column, Entity } from "typeorm";
import { BaseModel } from "../../../core/base-entity.js";


@Entity("users")
export class User extends BaseModel {

    @Column({length: 64})
    fullName!: string;

    @Column({length: 64, unique: true})
    login!: string;

    @Column({length: 32})
    password!: string;
}

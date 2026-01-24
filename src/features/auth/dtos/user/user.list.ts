import { Expose } from "class-transformer";

@Expose()

export class UserList {
    id!: string;
    fullName!: string;
    login!: string;
    image?: string;
}
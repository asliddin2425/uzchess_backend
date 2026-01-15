import { Column, Entity, OneToMany } from "typeorm";

import { BaseModel } from "../../../core/base-entity";

@Entity("sections")
export class Section extends BaseModel {

    @Column({ length: 150 })
    title: string;

    @Column()
    courseId: number;

    
}
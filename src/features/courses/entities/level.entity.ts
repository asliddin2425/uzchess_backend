import { Entity, Column, ManyToMany, OneToMany, Relation} from "typeorm";
import { BaseModel } from "../../../core/base-entity";
import { Course } from "./courses.entity";


@Entity("levels")
export class Level extends BaseModel{

    @Column({length: 32})
    title: string;

    @OneToMany(() => Course, courses=>courses.levelId)
    courses: Relation<Course[]>;
}

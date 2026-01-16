import { Entity, Column, OneToMany, Relation } from "typeorm";
import { BaseModel } from "../../../core/base-entity.js";
import { Course } from "./courses.entity.js";
@Entity("category")
export class Category extends BaseModel{

    @Column({length: 32})
    title!: string;

    @OneToMany(() => Course, courses=> courses.categoryId)
    courses: Relation<Course[]>
}
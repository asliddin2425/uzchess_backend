import { Column, Entity, OneToMany, Relation } from "typeorm";

import { BaseModel } from "../../../core/base-entity.js";
import { Course } from "./courses.entity.js";

@Entity("sections")
export class Section extends BaseModel {

    @Column({ length: 150 })
    title: string;

   @OneToMany(()=> Course, courses=> courses.section)
   courses: Relation<Course[]>
    
}
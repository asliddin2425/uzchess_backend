import {
  Column,
  Entity,
  OneToMany,
  Relation
} from "typeorm";
import { BaseModel } from "../../../core/base-entity.js";
import { Course } from "./courses.entity.js";

@Entity("authors")
export class Author extends BaseModel {

  @Column({ length: 120 })
  fullName!: string;


  @OneToMany(() => Course, course => course.author)
  courses: Relation<Course[]>;
}

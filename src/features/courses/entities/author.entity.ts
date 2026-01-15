import {
  Column,
  Entity,
  OneToMany
} from "typeorm";
import { BaseModel } from "../../../core/base-entity";
import { Course } from "./courses.entity";

@Entity("authors")
export class Author extends BaseModel {

  @Column({ length: 120 })
  fullName: string;


  @OneToMany(() => Course, course => course.author)
  courses: Course[];
}

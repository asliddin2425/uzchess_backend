import {
  Column,
  Entity,
  OneToMany
} from "typeorm";
import { BaseModel } from "../../../core/base-entity";
import { CourseLike } from "./courses-like.entity";

@Entity("users")
export class User extends BaseModel {

  @Column({ length: 100 })
  fullName: string;


  @OneToMany(() => CourseLike, like => like.user)
  likes: CourseLike[];
}

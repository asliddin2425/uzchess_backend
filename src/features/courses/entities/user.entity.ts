import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"; 
import { BaseModel } from "../../../core/base-entity.js"; 
import { CourseLike } from "./courses-like.entity.js"; 
@Entity("users") export class User extends BaseModel { 
  
  @Column({ length: 100 }) 
  fullName: string; 

  @OneToMany(() => CourseLike,like => like.user) 
  courseLikes!: CourseLike[];
}
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn
} from "typeorm";
import { BaseModel } from "../../../core/base-entity";
import { Author } from "../../courses/entities/author.entity";
import {Language} from "./language.entity"
import { CourseLike } from "../../courses/entities/courses-like.entity";
import { Level } from "./level.entity";

@Entity("courses")
export class Course extends BaseModel {

    @Column({ length: 150 })
    title: string;

    @Column({ type: "text" })  
    imageUrl: string;

    @Column({ type: "int" })
    discountPrice: number;

    @Column({ type: "int" })
    price: number;

    @Column({ default: 0 })
    views: number;

    @Column({ default: 0 })
    likesCount: number;

    @Column()
    authorId: number;

    @Column()
    sectionId: number;

    @Column()
    levelId: number;

    @Column()
    languagesId: number;
    
    @ManyToOne(() => Author, author => author.courses, { onDelete: "CASCADE" })
    @JoinColumn({ name: "authorId" })
    author: Author;

    @ManyToOne(()=> Language, languages => languages.courses, {onDelete: "CASCADE"})
    @JoinColumn({name: "lenguagesId"})
    languages: Language;

    @ManyToOne(()=> Level, Level=>Level.courses, {onDelete: "CASCADE"} )
    @JoinColumn({name: "levelId"})
    level: Level;

    @OneToMany(() => CourseLike, like => like.course)
    likes: CourseLike[];
}

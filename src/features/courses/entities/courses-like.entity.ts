import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseModel } from "../../../core/base-entity";
import { User } from "../../courses/entities/user.entity";
import { Course } from "../../courses/entities/courses.entity";

@Entity("course_likes")
export class CourseLike extends BaseModel {

    @Column()
    userId: number;

    @Column()
    courseId: number;

    @Column({ default: false })
    isLiked: boolean;

    @ManyToOne(() => User, user => user.likes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user: User;

    @ManyToOne(() => Course, course => course.likes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "courseId" })
    course: Course;
}

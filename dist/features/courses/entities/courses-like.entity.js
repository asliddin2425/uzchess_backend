"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLike = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../core/base-entity");
const user_entity_1 = require("../../courses/entities/user.entity");
const courses_entity_1 = require("../../courses/entities/courses.entity");
let CourseLike = class CourseLike extends base_entity_1.BaseModel {
    userId;
    courseId;
    isLiked;
    user;
    course;
};
exports.CourseLike = CourseLike;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseLike.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseLike.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CourseLike.prototype, "isLiked", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.likes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", user_entity_1.User)
], CourseLike.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courses_entity_1.Course, course => course.likes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "courseId" }),
    __metadata("design:type", courses_entity_1.Course)
], CourseLike.prototype, "course", void 0);
exports.CourseLike = CourseLike = __decorate([
    (0, typeorm_1.Entity)("course_likes")
], CourseLike);

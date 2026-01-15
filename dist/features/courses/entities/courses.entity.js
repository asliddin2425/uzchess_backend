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
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../core/base-entity");
const author_entity_1 = require("../../courses/entities/author.entity");
const language_entity_1 = require("./language.entity");
const courses_like_entity_1 = require("../../courses/entities/courses-like.entity");
const level_entity_1 = require("./level.entity");
let Course = class Course extends base_entity_1.BaseModel {
    title;
    imageUrl;
    discountPrice;
    price;
    views;
    likesCount;
    authorId;
    sectionId;
    levelId;
    languagesId;
    author;
    languages;
    level;
    likes;
};
exports.Course = Course;
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Course.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Course.prototype, "discountPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "likesCount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "sectionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "levelId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "languagesId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_entity_1.Author, author => author.courses, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "authorId" }),
    __metadata("design:type", author_entity_1.Author)
], Course.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.Language, languages => languages.courses, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "lenguagesId" }),
    __metadata("design:type", language_entity_1.Language)
], Course.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => level_entity_1.Level, Level => Level.courses, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "levelId" }),
    __metadata("design:type", level_entity_1.Level)
], Course.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => courses_like_entity_1.CourseLike, like => like.course),
    __metadata("design:type", Array)
], Course.prototype, "likes", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)("courses")
], Course);

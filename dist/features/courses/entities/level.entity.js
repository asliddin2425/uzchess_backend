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
exports.Level = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../core/base-entity");
const courses_entity_1 = require("./courses.entity");
let Level = class Level extends base_entity_1.BaseModel {
    title;
    courses;
};
exports.Level = Level;
__decorate([
    (0, typeorm_1.Column)({ length: 32 }),
    __metadata("design:type", String)
], Level.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => courses_entity_1.Course, courses => courses.levelId),
    __metadata("design:type", Object)
], Level.prototype, "courses", void 0);
exports.Level = Level = __decorate([
    (0, typeorm_1.Entity)("levels")
], Level);

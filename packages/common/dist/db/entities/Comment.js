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
exports.Comment = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const AbstractEntity_1 = require("./AbstractEntity");
const Post_1 = require("./Post");
const User_1 = require("./User");
let Comment = class Comment extends AbstractEntity_1.AbstractEntity {
    constructor(content, post, user) {
        super();
        this.content = content;
        this.post = post;
        this.user = user;
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Post_1.Post),
    (0, typeorm_1.ManyToOne)(() => Post_1.Post, post => post.comments, { onDelete: 'CASCADE' }),
    __metadata("design:type", Post_1.Post)
], Comment.prototype, "post", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.ManyToOne)(() => User_1.User, { eager: true }),
    __metadata("design:type", User_1.User)
], Comment.prototype, "user", void 0);
Comment = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('comments'),
    __metadata("design:paramtypes", [String, Post_1.Post, User_1.User])
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map
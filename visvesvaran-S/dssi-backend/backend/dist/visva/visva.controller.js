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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisvaController = void 0;
const common_1 = require("@nestjs/common");
const visva_service_1 = require("./visva.service");
const create_visva_dto_1 = require("./dto/create-visva.dto");
const update_visva_dto_1 = require("./dto/update-visva.dto");
let VisvaController = class VisvaController {
    constructor(visvaService) {
        this.visvaService = visvaService;
    }
    create(createVisvaDto) {
        return this.visvaService.create(createVisvaDto);
    }
    findAll() {
        return this.visvaService.findAll();
    }
    findOne(id) {
        return this.visvaService.findOne(+id);
    }
    update(id, updateVisvaDto) {
        return this.visvaService.update(+id, updateVisvaDto);
    }
    remove(id) {
        return this.visvaService.remove(+id);
    }
};
exports.VisvaController = VisvaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_visva_dto_1.CreateVisvaDto]),
    __metadata("design:returntype", void 0)
], VisvaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisvaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisvaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_visva_dto_1.UpdateVisvaDto]),
    __metadata("design:returntype", void 0)
], VisvaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisvaController.prototype, "remove", null);
exports.VisvaController = VisvaController = __decorate([
    (0, common_1.Controller)('form'),
    __metadata("design:paramtypes", [visva_service_1.VisvaService])
], VisvaController);
//# sourceMappingURL=visva.controller.js.map
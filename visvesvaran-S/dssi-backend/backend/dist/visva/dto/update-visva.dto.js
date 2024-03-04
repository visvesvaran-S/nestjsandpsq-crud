"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisvaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_visva_dto_1 = require("./create-visva.dto");
class UpdateVisvaDto extends (0, mapped_types_1.PartialType)(create_visva_dto_1.CreateVisvaDto) {
}
exports.UpdateVisvaDto = UpdateVisvaDto;
//# sourceMappingURL=update-visva.dto.js.map
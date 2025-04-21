"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGradeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_grade_dto_1 = require("./create-grade.dto");
class UpdateGradeDto extends (0, swagger_1.PartialType)(create_grade_dto_1.CreateGradeDto) {
}
exports.UpdateGradeDto = UpdateGradeDto;
//# sourceMappingURL=update-grade.dto.js.map
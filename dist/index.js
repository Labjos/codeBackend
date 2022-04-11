"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./src/server/index"));
const logger_1 = require("./src/utils/logger");
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// Execute server
index_1.default.listen(port, () => {
    (0, logger_1.logSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);
});
// control Server Error
index_1.default.on('error', (error) => {
    (0, logger_1.logError)(`[SERVER ERROR]: ${error}`);
});
exports.default = index_1.default;
//# sourceMappingURL=index.js.map
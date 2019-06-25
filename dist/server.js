"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const noteController_1 = __importDefault(require("./api/controllers/noteController"));
const app = new app_1.default([
    new noteController_1.default(),
]);
app.listen();
//# sourceMappingURL=server.js.map
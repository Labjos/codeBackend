"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuration of env file
dotenv_1.default.config();
// create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// define first route of App
app.get("/", (req, res) => {
    //send Goodbye world
    res.send("App Express + TS + Swagger + Mongoose + Hola Caracola + Jest");
});
app.get("/bye", (req, res) => {
    //send Goodbye world
    res.send("Goodbye World");
});
// Execute our App in PORT
app.listen(port, () => console.log(`Express SERVER: Running at http://localhost:${port}`));
//# sourceMappingURL=index.js.map
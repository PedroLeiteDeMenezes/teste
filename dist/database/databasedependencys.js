"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.connection = void 0;
var sequelize_1 = require("sequelize");
var database_1 = __importDefault(require("../config/database"));
var connection = new sequelize_1.Sequelize(database_1.default);
exports.connection = connection;
var models = [];
exports.models = models;
models.forEach(function (model) {
    if (model.associate) {
        model.associate(models);
    }
});

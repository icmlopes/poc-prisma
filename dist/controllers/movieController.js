var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { movieSchema } from "../model/movieSchema.js";
import * as R from "../repositories/movieRepository.js";
export function postNewMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, genre, platform, error, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, title = _a.title, genre = _a.genre, platform = _a.platform;
                    error = movieSchema.validate({ title: title, genre: genre, platform: platform }).error;
                    if (error) {
                        return [2 /*return*/, res.status(400).send({
                                message: error.message
                            })];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, R.insertMovie(title, genre, platform)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4:
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
export function getMovies(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var existingMovies, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, R.getAllMovies()];
                case 1:
                    existingMovies = _a.sent();
                    return [2 /*return*/, res.status(200).send(existingMovies)];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [2 /*return*/, res.sendStatus(500)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function getMoviesById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, getByid, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, R.getMovieById(id)];
                case 2:
                    getByid = _a.sent();
                    return [2 /*return*/, res.status(200).send(getByid)];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// export async function status(req: Request, res: Response) {
//     const id = Number(req.params.id)
//     const getComment = req.body 
//     try{
//         const getMovieId = await R.getMovieById(id)
//         console.log("checking information:", getMovieId.rows)
//         console.log("Check if comment is comming:", getComment)
//         if (getMovieId.rowCount === 0){
//             return res.status(404).send("Filme não encontrado")
//         }
//         await R.updateStatus(getComment, id)
//         return res.sendStatus(200)
//     } catch(error){
//         console.log(error)
//         return res.sendStatus(500)
//     }
// }
export function deleteMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, getMovieId, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, R.getMovieById(id)];
                case 2:
                    getMovieId = _a.sent();
                    if (!getMovieId.id) {
                        return [2 /*return*/, res.status(404).send("Filme não encontrado")];
                    }
                    return [4 /*yield*/, R.deleteMovieById(id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send("Filme deletado com sucesso.")];
                case 4:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [2 /*return*/, res.sendStatus(500)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// export async function getRanking(req: Request, res: Response){
//     try{
//         const ranking = await R.platformCount()
//         if (ranking.rowCount === 0){
//             return res.sendStatus(404)
//         }
//         return res.status(200).send(ranking.rows)
//     } catch(error){
//         console.log(error)
//         return res.sendStatus(500)
//     }
// }

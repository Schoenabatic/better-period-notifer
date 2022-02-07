import fs from "fs";
import { STATE_FILE_PATH } from "../constants";

export const write = (json: string) => {
    fs.writeFileSync(STATE_FILE_PATH, json);
};
export const getState = () => {
    const data = fs.readFileSync(STATE_FILE_PATH, "utf-8");
    return JSON.parse(data);
};

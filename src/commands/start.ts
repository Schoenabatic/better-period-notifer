import { Command } from "../types";
import { getState } from "../util/json";

export const Start: Command = {
    name: "start",
    description: "starts the notifer",
    execute: async (interaction) => {
        console.log(getState());
        console.log("WHAT DO I DO NOW");
        interaction.reply("hehe");
    },
};

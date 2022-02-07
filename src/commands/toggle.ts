import { Command } from "../types";
import { setState } from "../util/json";

export const Toggle: Command = {
    name: "toggle",
    description: "toggles the notifer",
    execute: async (interaction) => {
        const state = setState((state) => ({ ...state, enabled: !state.enabled }));
        interaction.reply(`enabled: ${state.enabled}`);
    },
};

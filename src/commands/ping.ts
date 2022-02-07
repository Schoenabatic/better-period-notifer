import { CommandInteraction } from "discord.js";

export const Ping = {
    name: "ping",
    description: "Replies with Pong!",
    execute: async (interaction: CommandInteraction) => {
        await interaction.reply("Pong!");
    },
};

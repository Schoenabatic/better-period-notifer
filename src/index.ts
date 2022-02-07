import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

import commands from "./commands";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const CLIENT_ID = "940146275460980756";
const GUILD_ID = "747955932834693273";

const rest = new REST({ version: "9" }).setToken(process.env.token!);

const main = async () => {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    const commandNames = commands.map((s) => s.name);
    client.on("ready", () => {
        console.log(`Logged in as ${client.user!.tag}!`);
    });

    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) return;

        const index = commandNames.indexOf(interaction.commandName);
        if (index != -1) {
            commands[index].execute(interaction);
        }
    });

    client.login(process.env.token!);
};

main().catch((err) => console.error(err));

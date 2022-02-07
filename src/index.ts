import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

import commands from "./commands";
import { CLIENT_ID, GUILD_ID } from "./constants";
import notifer from "./notifer";
import { getState } from "./util/json";
import { keepAlive } from "./util/keepalive";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const rest = new REST({ version: "9" }).setToken(process.env.token!);

const main = async () => {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    const commandNames = commands.map((s) => s.name);
    client.on("ready", () => {
        console.log(`Logged in as ${client.user!.tag}!`);
        const state = getState();
        if (state.enabled) notifer.start(client);
    });

    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) return;

        const index = commandNames.indexOf(interaction.commandName);
        if (index != -1) {
            commands[index].execute(interaction);
        }
    });
    keepAlive();
    client.login(process.env.token!);
};

main().catch((err) => console.error(err));

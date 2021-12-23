const { MessageEmbed, Interaction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

async function getData(){
    const promise = axios.get('https://watasalim.vercel.app/api/quotes/random');
    const dataPromise = promise.then((respone) => respone.data);
    return dataPromise;

}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('salim')
        .setDescription("ไอกิตเป็นสลิ่ม"),
    async execute(interaction) {
        getData().then(data => {interaction.reply(data.quote.body)})
    }
}
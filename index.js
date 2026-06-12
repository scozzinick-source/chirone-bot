client.on("guildMemberAdd", member => {
const channel = member.guild.channels.cache.find(c => c.name === "benvenuto");
if (channel) {
channel.send("Benvenuto " + member.user.username + "!");
}
});

8 hours ago

2 messages & 7 actions

Checkpoint made
8 hours ago

Worked for 27 seconds
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers
]
});

client.once("ready", () => {
console.log("Chirone is online and listening");
});

client.on("guildMemberAdd", member => {
const channel = member.guild.channels.cache.find(
c => c.name === "benvenuto"
);

if (!channel) return;

channel.send(
`🏛️ Un nuovo semidio è giunto al Campo Mezzosangue.

Salve, ${member.user.username}.

Io sono Chirone, direttore delle attività del Campo Mezzosangue e, a quanto pare, la persona incaricata di accoglierti.

Non preoccuparti se molte delle cose che vedrai qui ti sembreranno strane. La maggior parte dei nuovi arrivati reagisce allo stesso modo quando scopre che miti e leggende sono più reali di quanto abbia mai immaginato.

Prima di iniziare il tuo addestramento, ti invito a leggere attentamente i canali informativi del Campo e a compilare la tua scheda personaggio.

Una volta fatto, gli dei non tarderanno a riconoscere il loro sangue.

⚔️ Leggi il regolamento.
📖 Consulta l'ambientazione.
🎭 Crea la tua scheda personaggio.
🏛️ Attendi il riconoscimento del tuo genitore divino.

Ti auguro buona fortuna, giovane semidio.

Ne avrai bisogno.`
);
});

client.login(process.env.TOKEN);

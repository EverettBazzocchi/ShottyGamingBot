exports.run = (client, message, args) => {
    if(message.member.permissions.has(client.Permissions.ADMINISTRATOR)) {
        message.channel.send("Working")
    } else return;
}
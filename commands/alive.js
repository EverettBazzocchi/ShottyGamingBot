exports.run = (client, message, args) => {
    if(message.member.permissions.has(permissions.ADMINISTRATOR)) {
        message.channel.send("Working")
    } else return;
}
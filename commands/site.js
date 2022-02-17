exports.run = (client, message, args) => {
    console.log('!site bio ')

  function content(subCommand) {
    var content;
    switch (subCommand.toLowerCase()) {
      case "favserver":
        content = message.content.substring(16);
        break;
      case "bio":
        content = message.content.substring(10);
        break;
    }
    console.log(content);
    return content;
  }
 
  var user;
  switch (message.author.username.toLowerCase()) {
    case "pearlrebel":
      user = "pearlrebel";
      break;
    case "domino":
      user = "dopey_02";
      break;
    case "darklordbazz":
      user = "darklordbazz_";
      break;
    case "workedgolem":
      user = "workedgolem";
      break;
    default:
      user = "ERR";
      break;
  }
  if (user === "ERR") return;

  var sql;
  switch (args[0].toLowerCase()) {
    case "bio":
      sql = `UPDATE staffPage SET about = '${content(
        "bio"
      )}' WHERE username = ${`'` + user + `'`};`;
      break;

    case "favserver":
      sql = `UPDATE staffPage SET favserver = '${content(
        "favserver"
      )}' WHERE username = ${`'` + user + `'`};`;
      break;
  }
  if (sql) {
    client.db.query(sql, function (err, result) {
      console.log(err);
      message.delete;
    });
  } else {
    message.delete;
    message.channel.send("Please define your sub command (favserver / bio)");
  }
};

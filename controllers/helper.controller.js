/** packages */
const cryptojs = require("crypto-js");
const config = require("config");

exports.EncryptPassword = (plainTextPassword) => {
    let secretKey = config.get("secretkey-cryptojs");
    var newPassword = cryptojs.AES.encrypt(plainTextPassword, secretKey).toString();
    return newPassword;
}

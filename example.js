// This is the solver for the WhiteHat Granpix 2015 CTF problem.

e2enode = require('e2enode');
e2enode.require('e2e.openpgp.ContextImpl');

function solver () {
  var msg1 = "x/8AAAB7BAAAAAASCCqGSM49AwEHAgMEDiY29MSRPT/Z6iRGg7wkfS/Im/eWph8ZJSAxSIMaHrhvmMKB7Nm6oiBj7VwbK81YrL2buAHyArDTXTCOtJGRYQMBCAcAAQC8lGG4x5FhWiY7riVLQb1p17L0R5SurG50Y20j/ZQUXQ/swv8AAABtBBgTCAAf/wAAAAWCVfdIvv8AAAAJkOwWzs1HvZmR/wAAAAKbDAAAON4BAImgP8+WjfL4xCZoAihUK5DdjD+1STx8ldCybpJ9WHG0AP9E1OAAqqpK6vUKgbbQ3n4EJcZQRZpaMvWS+v4IRkBNmw==";
  var msg2 = "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";

  var bmsg1 = e2e.openpgp.asciiArmor.decodeRadix64_(msg1);
  var bmsg2 = e2e.openpgp.asciiArmor.decodeRadix64_(msg2);
  var packets = e2e.openpgp.block.factory.byteArrayToPackets(bmsg1);
  var block = e2e.openpgp.block.factory.parseByteArray(bmsg2);

  var d = block.decrypt(function(id, algo) {
    packets[0].cipher.unlockKey();
    return e2e.async.Result.toResult(null).addCallback(function() {
      return packets[0].cipher.getWrappedCipher();
    },this);
  }, {}).addCallback(function(dec) {
    // after decrypt, we got a symmetrically encrypted message.
    var com = dec.getMessage().literalData_.data;
    packets = e2e.openpgp.block.factory.byteArrayToPackets(com);
    var sessKey = packets[0];
    var symmetricEnc = packets[1];
    sessKey.decryptSessionKey({'passphrase': e2e.stringToByteArray("luck")}).addCallback(function(res) {
      // success decrypt the session key.
      if (res) {
        // this print the first part of the FLAG.
        console.log(e2e.byteArrayToString(sessKey.sessionKey.key));
        symmetricEnc.decrypt(sessKey.algorithm, sessKey.sessionKey);
        compressed = e2e.openpgp.block.factory.parseByteArray(symmetricEnc.data);
        // Here is another trick, if they use other apps it will fail because too many layer of compression.
        compressed.MAX_COMPRESSION_NESTING_LEVEL = 40;
        // This print the second half of the FLAG.
        console.log(e2e.byteArrayToString(compressed.getLiteralMessage().literalData_.data));
      }});
  });
}

solver();

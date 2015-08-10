var express = require('express');
var router = express.Router();
var shell = require('shelljs');

var ir = {
  set_transmitter: function (transmitters) {
    shell.exec("irsend set_transmitter " + transmitters);
  },
  send_once: function (remote, command) {
    shell.exec("irsend send_once " + remote + " " + command);
  }
}

var transmitter433 = {
  send: function(device, command) {
    shell.exec("433send " + device + " " + command);
  }
}

var remotes = {
  led1: function (command) {
    ir.set_transmitter("2");
    ir.send_once("led1", command);
  },
  power: function (command) {
    transmitter433.send(command.device, command.command);
  },
  special: function(command) {
    switch(command) {
      case 'random':
        console.log('random');
        break;
      case 'alloff':
        console.log('alloff');
        break;
    }
  }
}

router.post('/execute', function (req, res) {
  if (req.body.remote in remotes) {
    remotes[req.body.remote](req.body.command);
    res.end();
  }
  else {
    res.end(404);
  }
  
});

module.exports = router;
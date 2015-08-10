var express = require('express');
var router = express.Router();
var shell = require('shelljs');

var LED_MAX_IT = 5;
var RECEIVER_A_LOT = 5;
var RANDOM_COLORS = ['key_a', 'key_b', 'key_c', 'key_d', 'key_e', 'key_f', 'key_g', 'key_h', 'key_i', 'key_j', 'key_k', 'key_l', 'key_m', 'key_n', 'key_o', 'key_p'];

var random_color = function( ) {
  return RANDOM_COLORS[Math.floor(Math.random()*RANDOM_COLORS.length)];
}


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

var led_command = function(device, command) {
  switch(command) {
    case 'key_volumeupmax':
      for(var i=0; i<LED_MAX_IT; i++) {
        ir.send_once(device, 'key_volumeup')
      }
      break;
    case 'key_volumemin':
      for(var i=0; i<LED_MAX_IT; i++) {
        ir.send_once(device, 'key_volumedown')
      }
      break;
    default:
      ir.send_once(device, command);
      break;
  }
  
}

var remotes = {
  led1: function (command) {
    ir.set_transmitter("2");
    led_command("led2", command);
  },

  led2: function (command) {
    ir.set_transmitter("3");
    led_command("led2", command);
  },

  led3: function(command) {
    ir.set_transmitter("3");
    led_command("led2", command);
  },

  ledall: function(command) {
    remotes.led1(command);
    remotes.led2(command);
    remotes.led3(command);
  },

  receiver: function(command) {
    ir.set_transmitter("2");
    switch(command)
    {
      case "key_volumeupalot":
        for(var i=0; i<RECEIVER_A_LOT; i++) {
          ir.send_once('receiver', 'key_volumeup')
        }      
        break;
      case "key_volumedownalot":
        for(var i=0; i<RECEIVER_A_LOT; i++) {
          ir.send_once('receiver', 'key_volumedown')
        }      
        break;
      default:
        ir.send_once('receiver', command);
        break;
    }
  },

  beamer: function(command) {
    ir.set_transmitter("3");
    switch(command) {
      case "key_poweroff":
        ir.send_once('beamer', 'key_power');
        ir.send_once('beamer', 'key_power');
        break;
      default:
        ir.send_once('beamer', command);
        break;
    }
  },

  power: function (command) {
    transmitter433.send(command.device, command.command);
  },

  special: function(command) {
    switch(command) {
      case 'random':
        remotes.led1('key_power');
        remotes.led1(random_color());
        remotes.led2('key_power');
        remotes.led2(random_color());
        remotes.led3('key_power');
        remotes.led3(random_color());
        break;
      case 'alloff':
        remotes.ledall('key_power2');
        remotes.beamer('key_poweroff');
        remotes.receiver('key_power');
        remotes.power({device: 'all', command: 'off'})
        break;
      case 'maxlight':
        remotes.ledall('key_power');
        remotes.ledall('key_p');
        remotes.ledall('key_volumeupmax');
        remotes.power({device: 'all', command: 'on'});
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
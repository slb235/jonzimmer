(function() {
  window.data = [
    {
      title: "Licht",
      remotes: [
        {
          title: "LED 1",
          icon: "ion-ios-lightbulb-outline",
          remote: "led1",
          categories: [
            {
              title: "Power",
              commands: [
                {
                  title: "Ein",
                  icon: "ion-power",
                  execute: "key_power"
                }, {
                  title: "Aus",
                  icon: "ion-power",
                  execute: "key_power2"
                }
              ]
            }, {
              title: "Helligkeit",
              commands: [
                {
                  title: "Max Helligkeit",
                  icon: "ion-ios-medical",
                  execute: "key_volumeupmax"
                }, {
                  title: "Heller",
                  icon: "ion-ios-medical",
                  execute: "key_volumeup"
                }, {
                  title: "Dunkler",
                  icon: "ion-ios-medical-outline",
                  execute: "key_volumedown"
                }, {
                  title: "Min Helligkeit",
                  icon: "ion-ios-medical-outline",
                  execute: "key_volumedownmax"
                }
              ]
            }, {
              title: "Programme",
              commands: [
                {
                  title: "Flash",
                  icon: "ion-flash",
                  execute: "key_q"
                }, {
                  title: "Strobe",
                  icon: "ion-ios-barcode-outline",
                  execute: "key_r"
                }, {
                  title: "Fade",
                  icon: "ion-ios-analytics",
                  execute: "key_s"
                }, {
                  title: "Smooth",
                  icon: "ion-ios-analytics-outline",
                  execute: "key_t"
                }
              ]
            }, {
              title: "Farben",
              commands: [
                {
                  title: "Crimson",
                  icon: "ion-android-sunny",
                  color: "#d91626",
                  execute: "key_a"
                }, {
                  title: "Tomato",
                  icon: "ion-android-sunny",
                  color: "#e4322e",
                  execute: "key_b"
                }, {
                  title: "Trinidad",
                  icon: "ion-android-sunny",
                  color: "#e76a4a",
                  execute: "key_c"
                }, {
                  title: "Hit pink",
                  icon: "ion-android-sunny",
                  color: "#e99861",
                  execute: "key_d"
                }, {
                  title: "Chamois",
                  icon: "ion-android-sunny",
                  color: "#e7cb99",
                  execute: "key_e"
                }, {
                  title: "Evening sea",
                  icon: "ion-android-sunny",
                  color: "#005741",
                  execute: "key_f"
                }, {
                  title: "Observatory",
                  icon: "ion-android-sunny",
                  color: "#0c8e72",
                  execute: "key_g"
                }, {
                  title: "Blue chill",
                  icon: "ion-android-sunny",
                  color: "#1d828a",
                  execute: "key_h"
                }, {
                  title: "Eastern Blue",
                  icon: "ion-android-sunny",
                  color: "#0c7f9a",
                  execute: "key_i"
                }, {
                  title: "Boston Blue",
                  icon: "ion-android-sunny",
                  color: "#1486aa",
                  execute: "key_j"
                }, {
                  title: "Governor bay",
                  icon: "ion-android-sunny",
                  color: "#042a75",
                  execute: "key_k"
                }, {
                  title: "Cornflower",
                  icon: "ion-android-sunny",
                  color: "#00469d",
                  execute: "key_l"
                }, {
                  title: "Lucky point",
                  icon: "ion-android-sunny",
                  color: "#2d3252",
                  execute: "key_m"
                }, {
                  title: "Affair",
                  icon: "ion-android-sunny",
                  color: "#69447a",
                  execute: "key_n"
                }, {
                  title: "Hopbush",
                  icon: "ion-android-sunny",
                  color: "#bc558c",
                  execute: "key_o"
                }, {
                  title: "Silver",
                  icon: "ion-android-sunny",
                  color: "#c5c6c8",
                  execute: "key_p"
                }
              ]
            }
          ]
        }, {
          title: "LED 2",
          icon: "ion-ios-lightbulb-outline"
        }, {
          title: "LED (alle)",
          icon: "ion-ios-lightbulb-outline"
        }, {
          title: "Steckdosen",
          icon: "ion-outlet",
          categories: [
            {
              title: "Globus",
              commands: [
                {
                  title: "Ein",
                  icon: "ion-social-dribbble",
                  execute: {
                    remote: "power",
                    command: {
                      device: "1",
                      command: "on"
                    }
                  }
                }, {
                  title: "Aus",
                  icon: "ion-social-dribbble-outline",
                  execute: {
                    remote: "power",
                    command: {
                      device: "1",
                      command: "off"
                    }
                  }
                }
              ]
            }, {
              title: "Zylinderlampe",
              commands: [
                {
                  title: "Ein",
                  icon: "ion-ios-cog",
                  execute: {
                    remote: "power",
                    command: {
                      device: "2",
                      command: "on"
                    }
                  }
                }, {
                  title: "Aus",
                  icon: "ion-ios-cog-outline",
                  execute: {
                    remote: "power",
                    command: {
                      device: "2",
                      command: "off"
                    }
                  }
                }
              ]
            }, {
              title: "Fensterlampe",
              commands: [
                {
                  title: "Ein",
                  icon: "ion-social-twitch",
                  execute: {
                    remote: "power",
                    command: {
                      device: "3",
                      command: "on"
                    }
                  }
                }, {
                  title: "Aus",
                  icon: "ion-social-twitch-outline",
                  execute: {
                    remote: "power",
                    command: {
                      device: "3",
                      command: "off"
                    }
                  }
                }
              ]
            }, {
              title: "Alles",
              commands: [
                {
                  title: "Ein",
                  icon: "ion-ios-circle-filled",
                  execute: {
                    remote: "power",
                    command: {
                      device: "all",
                      command: "on"
                    }
                  }
                }, {
                  title: "Aus",
                  icon: "ion-ios-circle-outline",
                  execute: {
                    remote: "power",
                    command: {
                      device: "all",
                      command: "off"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }, {
      title: "Geräte",
      icon: "ion-soup-can-outline",
      remotes: [
        {
          title: "Verstärker",
          icon: "ion-volume-high",
          categories: [
            {
              title: "Power",
              commands: [
                {
                  title: "Ein",
                  icon: "ion-power",
                  execute: {
                    remote: "receiver",
                    command: "key_power"
                  }
                }, {
                  title: "Aus",
                  icon: "ion-power",
                  execute: {
                    remote: "receiver",
                    command: "key_power"
                  }
                }
              ]
            }, {
              title: "Lautstärke",
              commands: [
                {
                  title: "Viel lauter",
                  icon: "ion-volume-high",
                  execute: {
                    remote: "receiver",
                    command: "key_volumeupx5"
                  }
                }, {
                  title: "Lauter",
                  icon: "ion-volume-high",
                  execute: {
                    remote: "receiver",
                    command: "key_volumeup"
                  }
                }, {
                  title: "Leiser",
                  icon: "ion-volume-low",
                  execute: {
                    remote: "receiver",
                    command: "key_volumedown"
                  }
                }, {
                  title: "Viel leiser",
                  icon: "ion-volume-low",
                  execute: {
                    remote: "receiver",
                    command: "key_volumedownx5"
                  }
                }, {
                  title: "Mute",
                  icon: "ion-volume-mute",
                  execute: {
                    remote: "receiver",
                    command: "key_volumedown"
                  }
                }
              ]
            }, {
              title: "Eingang"
            }
          ]
        }, {
          title: "Beamer",
          icon: "ion-easel"
        }
      ]
    }, {
      title: "Spezial",
      remotes: [
        {
          title: "Combos",
          icon: "ion-erlenmeyer-flask",
          categories: [
            {
              title: "Combos",
              commands: [
                {
                  title: "Alles aus",
                  icon: "ion-power"
                }, {
                  title: "Max Helligkeit",
                  icon: "ion-ios-lightbulb-outline"
                }, {
                  title: "Zufallslicht",
                  icon: "ion-ios-color-wand"
                }
              ]
            }
          ]
        }
      ]
    }
  ];

}).call(this);

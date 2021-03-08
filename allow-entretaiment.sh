#!/bin/bash
sudo /home/sonido/services/pihole/remove_from_txt.sh /home/sonido/services/pihole/url-lists/entretaiment.list
/usr/local/bin/pihole -g

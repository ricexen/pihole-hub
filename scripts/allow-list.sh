#!/bin/bash
sudo /scripts/log.sh INFO "allowing entretaiment"
sudo /scripts/remove_from_txt.sh "$1"
sudo /scripts/rc.sh
sudo /scripts/log.sh INFO "entretaiment allowed"

#!/bin/bash
sudo /scripts/log.sh INFO "blocking entretaiment"
sudo /scripts/add_from_txt.sh "$1"
sudo /scripts/rc.sh
sudo /scripts/log.sh INFO "entretaiment bloked"

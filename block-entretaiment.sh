#!/bin/bash
/app/log.sh INFO "blocking entretaiment"
sudo /app/add_from_txt.sh /app/url-lists/entretaiment.list
sudo /app/rc.sh
/app/log.sh INFO "entretaiment bloked"

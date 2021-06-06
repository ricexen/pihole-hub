#!/bin/bash
sudo /app/log.sh INFO "allowing entretaiment"
sudo /app/remove_from_txt.sh /app/url-lists/entretaiment.list
sudo /app/rc.sh
sudo /app/log.sh INFO "entretaiment allowed"

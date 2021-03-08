#!/bin/sh
pihole_action_file=".pihole/actions/$1.sql"

if [ -e $pihole_action_file ]
then
    addresses=$2 pihole_action_query=$(cat $pihole_action_file)
    echo $pihole_action_query
    addresses=$2 sqlite3 .pihole/gravity.db "$pihole_action_query"
else
    echo "action '$1' not found"
fi
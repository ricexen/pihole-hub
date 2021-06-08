#!/bin/bash

NETWORK_INTERFACE=$1
echo ServerIPv6=$(ip -6 addr show dev $NETWORK_INTERFACE | grep inet6 | awk -F '[ \t]+|/' '{print $3}' | grep -v ^::1 | grep -v ^fe80 | head -n 1) > .env
echo ServerIPv4=$(ip -4 addr show dev $NETWORK_INTERFACE | grep inet | awk -F '[ \t]+|/' '{print $3}') >> .env

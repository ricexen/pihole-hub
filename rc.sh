alias pihole=/usr/local/bin/pihole
function refreshPihole() {
    pihole -g
    pihole restartdns
    pihole restartdns reload-lists
}

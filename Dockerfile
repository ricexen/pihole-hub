FROM pihole/pihole:latest

RUN apt-get update
RUN apt-get install -y openssh-server

ENTRYPOINT [ "/bin/execlineb", "-S0", "/s6-init" ]
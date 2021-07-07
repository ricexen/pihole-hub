# pihole-hub (anti-procrastinator)
pihole hub 2021

## how to setup


### 1. clone the repository
unsing linux or mac
``` shell
git clone https://github.com/ricexen/pihole-hub.git pihole
```

### 2.generate env
unsing linux or mac
``` shell
./generate-env.sh <network-interface>
```

### 3.get up the container
``` shell
docker-compose up -d
```

### 4. setup crontabs
``` shell
docker exec pihole pihole -a -p <new-password>
```

### 5. setup crontabs
``` shell
docker exec pihole /app/setup-crontab.sh
```

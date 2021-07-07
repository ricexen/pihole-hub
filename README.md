# pihole-hub (anti-procrastinator)
pihole hub 2021

## how to setup

### 1. generate env
unsing linux or mac
``` shell
./generate-env.sh <network-interface>
```

### 2. get up the container
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

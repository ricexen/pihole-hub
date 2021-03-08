query=$(cat <<EOF 
CREATE TEMP TABLE i(txt);
.separator ~
.import $1 i
INSERT OR IGNORE INTO adlist (address) SELECT txt FROM i;
DROP TABLE i";
EOF
)
sqlite /etc/pihole/gravity.db "$query"

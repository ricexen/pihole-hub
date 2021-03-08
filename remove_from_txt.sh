sqlite3 /etc/pihole/gravity.db <<EOS 
CREATE TEMP TABLE i(txt);
.separator ~
.import $1 i
DELETE FROM adlist WHERE address in (SELECT txt FROM i);
DROP TABLE i;
EOS

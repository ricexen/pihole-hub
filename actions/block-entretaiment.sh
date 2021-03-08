pihole_workspace="$HOME/.dotfiles/.pihole"
pihole_format_list_to_sql="$pihole_workspace/actions/format-list-to-sql.sh"

pihole_entretaiment_list="$pihole_workspace/url-lists/entretaiment.list"
pihole_addresses="$(sh $pihole_format_list_to_sql $pihole_entretaiment_list)"
sh $pihole_workspace/actions/execute.sh block-entretaiment $pihole_addresses

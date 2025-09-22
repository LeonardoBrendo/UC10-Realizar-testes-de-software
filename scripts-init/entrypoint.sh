#!/bin/sh

echo "⏳ Aguardando 5s para o banco ficar pronto..."
sleep 5 

echo "🚀 Executando script(s) SQL de criação e inserts..."

for sql_file in /scripts-init/*.sql; do
  if [ -f "$sql_file" ]; then
    echo "▶️ Rodando $sql_file"
    psql "postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$DB_HOST:$DB_PORT/$POSTGRES_DB" -f "$sql_file"
  fi
done

echo "✅ Script(s) SQL executado(s) com sucesso!"

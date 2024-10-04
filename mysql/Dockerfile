FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

# Adicionando os scripts SQL para serem executados na criação do banco
COPY setup.sql /docker-entrypoint-initdb.d/
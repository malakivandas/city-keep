#! /bin/bash

# Prerequisites
psql -V
service postgresql status

# Postgres commands
psql -U postgres -c 'CREATE DATABASE citizenapp;' -c '\c citizenapp' -c '\i ./database.sql'

echo END database_init.sh
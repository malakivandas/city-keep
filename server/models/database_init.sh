#! /bin/bash

# Prerequisites
psql -V
pg_isready

# Postgres commands
psql -U postgres -c 'CREATE DATABASE citizenapp;' -c '\c citizenapp' -c '\i ./database.sql'

echo END database_init.sh
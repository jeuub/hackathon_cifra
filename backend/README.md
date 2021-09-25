# Clone for developing
## Requirements
 - [Python 3](https://www.python.org/)
 - [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Installation
1. Clone project by
```bash
git clone https://github.com/d1zero/hackaton-backend.git
```
2. Create virtual environment and activate it
```bash
py -m venv `env_name`
venv/scripts/activate
```
3. Install requirements
```bash
pip install -r requirements.txt
```
4. Create and run docker container
```bash
docker pull postgres
docker run --name `container_name` -e POSTGRES_PASSWORD='`postgres_password`' -p `your_port`:5432 -d
docker container ls
docker exec -it `container_id` bash
```
5. Create user & database
```bash
psql
CREATE USER `db_username` WITH PASSWORD '`db_password`';
CREATE DATABASE `db_name`;
GRANT ALL PRIVILEGES ON DATABASE `db_name` TO `db_username`;
```
6. Rename `.env.example` to `.env`
7. Fill `.env` lines db_name, db_user, db_user_pass, db_pass with data from steps 4 and 5. Also set db_host value to `'localhost'`
8. Generate secret key
```bash
py manage.py shell
from django.core.management.utils import get_random_secret_key
get_random_secret_key()
```
Copy result of `get_random_secret_key` function and paste it into `.env` instead of '1' on line `SECRET_KEY`
9. Run development server
```bash
py manage.py runserver
```
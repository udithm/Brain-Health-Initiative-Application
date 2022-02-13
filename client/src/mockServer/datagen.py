# pip3 install Faker --user
from faker import Faker
from faker.providers import person, misc, company, address
import random
import datetime
import json

if __name__ == '__main__':
    role = ["PHC", "SECONDARY", "TERTIARY", "ADMIN"]
    NUM_USERS = 100

    from faker import Faker
    from faker.providers import person, misc, company, address
    import random
    import datetime

    random.seed(72)
    fake = Faker()
    Faker.send(72)

    users = []
    for id in range(1, NUM_USERS + 1):
        first = fake.first_name()
        last = fake.last_name()
        users.append({
            "userId": id,
            "name": first + " " + last,
            "userName": first.lower() + "@" + fake.domain_name(),
            "orgName": fake.company(),
            "role": random.choice(role),
            "password": first + "123"
        })
    data = {
        "users": users
    }

    with open("src/mockServer/data.json", 'w') as f:
        json.dump(data, f, indent=4, sort_keys=True)
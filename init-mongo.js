db.create(
    {
        user: "mongodb",
        pwd: "mongodb",
        roles: [
            role: "readWrite",
            db: "testdb"
        ]
    }
)

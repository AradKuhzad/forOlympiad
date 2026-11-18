import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

    user: process.env.DB_USER,
});

export { pool };
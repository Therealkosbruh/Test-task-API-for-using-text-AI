import { MigrationInterface, QueryRunner } from "typeorm";
// creation of users and their balances tables
export class Users1735042766099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(20) DEFAULT 'client',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `);
    
        await queryRunner.query(`
          CREATE TABLE balances (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            balance INT DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
          );
        `);
      }
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS balances;`);
        await queryRunner.query(`DROP TABLE IF EXISTS users;`);
      }
}

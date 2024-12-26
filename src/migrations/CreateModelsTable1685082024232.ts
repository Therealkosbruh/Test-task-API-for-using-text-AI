import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateModelsTable1685082024232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Создание таблицы models
        await queryRunner.query(`
            CREATE TABLE models (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                api_key VARCHAR(255) NOT NULL,
                model_type VARCHAR(255) NOT NULL,
                tokens_per_request INT DEFAULT 100,
                price_per_100_tokens INT DEFAULT 20,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Удаление таблицы models
        await queryRunner.query(`DROP TABLE IF EXISTS models;`);
    }
}

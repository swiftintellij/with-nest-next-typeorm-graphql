import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProduct1588420200043 implements MigrationInterface {
    name = 'CreateProduct1588420200043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "title" character varying(30) NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`, undefined);
    }

}

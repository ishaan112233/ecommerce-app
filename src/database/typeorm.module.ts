import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: configService.getOrThrow('MYSQL_HOST'),
        port: configService.getOrThrow('MYSQL_PORT'),
        username: configService.getOrThrow('MYSQL_USER'),
        password: configService.getOrThrow('MYSQL_PASSWORD'),
        autoLoadEntities: configService.getOrThrow('MYSQL_AUTOLOAD_ENTITIES'),
        database: configService.getOrThrow('MYSQL_DATABASE_NAME'),
        synchronize: configService.getOrThrow('MYSQL_DB_SYNC'),
        logging: configService.getOrThrow('MYSQL_LOGGING'),
      }),
      inject: [ConfigService],
    }),
  ],
  // exports: [TypeOrmModule],
})
export class typeOrmModule {}

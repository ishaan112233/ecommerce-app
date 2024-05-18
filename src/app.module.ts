import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mainAppModule } from './mainApp/mainApp.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmModule } from './database/typeorm.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './auth/auth.guard';
import { AccessTokenStrategy } from './auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ProductsModule } from './products/products.module';

const currentEnv = process.env.NODE_ENV;
console.log('currentEnv: ', currentEnv);
@Module({
  imports: [
    JwtModule.register({ global: true, secret: process.env.JWT_SECRET }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !currentEnv ? 'env/.env' : `env/.env.${currentEnv}`,
    }),
    typeOrmModule,
    mainAppModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthenticationGuard,
    // },
    // AccessTokenStrategy,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guards';

@Module({
  imports: [PrismaModule,JwtModule.register({
    global: true,
    secret: process.env.SECRET,
    signOptions: { expiresIn: '24h' },
  })],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/prisma/base.service';
import { UserModel } from 'src/prisma/generated/models';

@Injectable()
export class UsersService extends BaseService<UserModel, CreateUserDto, UpdateUserDto> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, { name: 'user' });
  }

}

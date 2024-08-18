import { Resolver } from '@nestjs/graphql';
import { UsersService } from './user.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
}

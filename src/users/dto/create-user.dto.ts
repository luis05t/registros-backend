import { Role } from "src/prisma/generated/enums";

export class CreateUserDto {
    email: string;
    name?: string
    role: Role;
}

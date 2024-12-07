import { Injectable } from '@nestjs/common';
import { BaseRepository } from './baseRepository';
import { IUser } from '../model/IUser';
import db from '../db';

@Injectable()
class UserRepository extends BaseRepository<IUser> {
    constructor() {
        super('User', 'UserId', db);
    }

    async findByEmail(email: String): Promise<IUser> {
        return this.db(this.tableName).where('Email', email).first();
    }
    async login(email: String, password: String): Promise<IUser> {
        return this.db(this.tableName).where('Email', email).andWhere('Password', password).first();
    }
}

export default UserRepository;

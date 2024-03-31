import { NIC_REGEX } from "../../constants/common/regex";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  Validate,
  BeforeValidate,
  Unique,
} from "sequelize-typescript";
import { IRegistration } from "./auth.interface";
import * as uuid from 'uuidv4';
@Table({
  tableName: "auth",
  initialAutoIncrement: "00000"
 })
export class AuthModel extends Model<IRegistration> {
  @BeforeValidate
  static generateUUID(instance: AuthModel) {
      if (!instance.userId) {
          instance.userId = uuid.uuid();
      }
  }

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Unique
  @Column
  userId!: string;

  @Column
  fullName!: string;

  @Validate({ isEmail: true })
  @Column(DataType.TEXT)
  email!: string;

  @Validate({ is: [NIC_REGEX] })
  @Column(DataType.TEXT)
  nic!: string;

  @Column(DataType.TEXT)
  password!: string;

  @Column
  createdAt!: Date;

  @Column
  updatedAt!: Date;
}

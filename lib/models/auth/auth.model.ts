import { NIC_REGEX } from "../../constants/common/regex";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  DataType,
  AutoIncrement,
  Unique,
  Validate,
} from "sequelize-typescript";
import { IRegistration } from "./auth.interface";

@Table({
  tableName: "auth",
  initialAutoIncrement: "0000",
})
export class AuthModel extends Model<IRegistration> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  // @PrimaryKey
  // @Default(DataType.UUIDV4)
  // @Unique
  // @Column(DataType.UUIDV4)
  // id!: any;

  @Column
  fullName!: string;

  @Validate({isEmail: true})
  @Column(DataType.TEXT)
  email!: string;

  @Validate({is:[NIC_REGEX]})
  @Column(DataType.TEXT)
  nic!: string;

  @Column
  createdAt!: Date;

  @Column
  updatedAt!: Date;
}

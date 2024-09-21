import { NIC_REGEX } from "../../constants/common/regex";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  Validate,
} from "sequelize-typescript";
import { IRegistrationRequest } from "./auth.interface";

@Table({
  tableName: "auth",
  initialAutoIncrement: "0000",
})
export class AuthModel extends Model<IRegistrationRequest> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Column
  fullName!: string;

  @Validate({ isEmail: true })
  @Column(DataType.TEXT)
  email!: string;

  @Validate({ is: [NIC_REGEX] })
  @Column(DataType.TEXT)
  nic!: string;

  @Column
  createdAt!: Date;

  @Column
  updatedAt!: Date;
}

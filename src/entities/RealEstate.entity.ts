import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./Address.entity";
import Category from "./Category.entity";
import Schedule from "./Schedule.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 0,
  })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address)
  @JoinColumn()
  Address: Address;

  @ManyToOne(() => Category,(c)=>c.real_estates)
  Category: Category;

  @OneToMany(()=>Schedule,(sh)=>sh.real_estate)
  schedules: Array<Schedule>
}

export default RealEstate;

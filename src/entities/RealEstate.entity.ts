import {
  Column,
  CreateDateColumn,
   Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./Address.entity";
import Category from "./Category.entity";

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
  value: number|string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(()=> Address)
  @JoinColumn()
  Address:Address

  @ManyToOne(()=>Category)
  Category:Category
}

export default RealEstate;

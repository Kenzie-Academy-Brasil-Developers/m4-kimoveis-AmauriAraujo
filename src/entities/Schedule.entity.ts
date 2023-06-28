import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./RealEstate.entity";
import User from "./User.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(()=>RealEstate,(re)=>re.schedules)
  real_estate:RealEstate
  
  @ManyToOne(()=>User,(u)=>u.schedules)
  user:User
}


export default Schedule;

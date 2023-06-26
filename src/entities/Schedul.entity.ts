import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("schedules")
class Schedul {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "timestamp" })
  hour: string;
}

export default Schedul;

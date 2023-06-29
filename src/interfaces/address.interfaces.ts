import { Repository } from "typeorm";
import { Address } from "../entities";

type addressRepo = Repository<Address>;

export { addressRepo };

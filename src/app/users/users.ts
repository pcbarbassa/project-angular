import { Address } from './address';
import { Company } from './company';

export interface Users {

    id: number;
    name: number;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

}

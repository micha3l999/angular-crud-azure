import { Users } from "./users.model";

export interface WorkDevices {
    deviceId: number;
    brand: string;
    status: number;
    description: string;
    userId: number;
    user: Users;
}
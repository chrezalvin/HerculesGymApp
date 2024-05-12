import { Storage } from "@ionic/storage";
import challengeDefaultData, {type Workout} from "../assets/challenges";

export class WorkoutRepository {
    private storage: Storage = new Storage();
  
    constructor(storage: Storage) {
        this.storage = storage;
    }

    public async getWorkouts(): Promise<Workout[] | undefined> {
        const workout = await this.storage.get("workout") as unknown;
    
        if (workout)
            return workout as Workout[];
        else
            return undefined;
    }

    public async setWorkouts(workout: Workout[]): Promise<void> {
        await this.storage.set("workout", workout);
    }

    public async setDefaultData(): Promise<void> {
        await this.storage.set("workout", challengeDefaultData.workout);
    }
}
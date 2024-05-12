import { Storage } from "@ionic/storage";
import challengeDefaultData, {type Challenge} from "../assets/challenges";

export class ChallengesRepository {
    private storage: Storage = new Storage();
  
    constructor(storage: Storage) {
        this.storage = storage;
    }

    public async getChallenges(): Promise<Challenge[] | undefined> {
        const challenges = await this.storage.get("challenges") as unknown;
    
        if (challenges)
            return challenges as Challenge[];
        else
            return undefined;
    }

    public async setChallenges(challenge: Challenge[]): Promise<void> {
        await this.storage.set("challenges", challenge);
    }

    public async setDefaultData(): Promise<void> {
        await this.storage.set("challenges", challengeDefaultData.challenges as Challenge[]);
    }
}
import { mockAsync } from "@/mocks";

class StartPurchaseService {
  public static async execute(): Promise<void> {
    await mockAsync();
  }
}

export default StartPurchaseService;

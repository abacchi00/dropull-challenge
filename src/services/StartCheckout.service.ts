import { mockAsync } from "@/mocks";

class StartCheckoutService {
  public static async execute(): Promise<void> {
    await mockAsync();
  }
}

export default StartCheckoutService;

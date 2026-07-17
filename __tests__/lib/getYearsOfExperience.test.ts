jest.mock("../../data/experience", () => ({
  __esModule: true,
  default: [],
}));

import experiences from "../../data/experience";
import getYearsOfExperience from "../../lib/getYearsOfExperience";

const mockExperiences = experiences as unknown as Array<{
  startDate: string;
  endDate: string;
}>;

describe("getYearsOfExperience", () => {
  afterEach(() => {
    mockExperiences.length = 0;
  });

  test("sums each role's duration rather than (now - earliest start)", () => {
    mockExperiences.push(
      { startDate: "01/2020", endDate: "12/2020" }, // 12 months
      { startDate: "01/2023", endDate: "12/2023" } // 12 months, with a gap in between
    );

    expect(getYearsOfExperience()).toBe(2);
  });

  test("resolves an ongoing role's 'Present' endDate against today", () => {
    // 11 months before "now" so (end - start + 1) works out to exactly
    // 12 months — a clean 1-year result regardless of which day this runs.
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 11, 1);

    mockExperiences.push({
      startDate: `${String(start.getMonth() + 1).padStart(2, "0")}/${start.getFullYear()}`,
      endDate: "Present",
    });

    expect(getYearsOfExperience()).toBe(1);
  });

  test("returns 0 for no experience entries", () => {
    expect(getYearsOfExperience()).toBe(0);
  });
});

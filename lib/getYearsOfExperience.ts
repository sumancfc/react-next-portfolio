import experiences from "../data/experience";

const monthsSinceEpoch = (value: string): number => {
  if (value === "Present") {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [month, year] = value.split("/").map(Number);
  return year * 12 + (month - 1);
};

/**
 * Sums each role's actual duration rather than (now - earliest start),
 * so unemployment gaps between roles (e.g. 08/2022 - 03/2024 here)
 * aren't counted as experience. A role still in progress uses
 * endDate: "Present", resolved against today's date.
 */
const getYearsOfExperience = (): number => {
  const totalMonths = experiences.reduce((sum, experience) => {
    const start = monthsSinceEpoch(experience.startDate);
    const end = monthsSinceEpoch(experience.endDate);
    return sum + (end - start + 1);
  }, 0);
  return Math.ceil(totalMonths / 12);
};

export default getYearsOfExperience;

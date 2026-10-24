import { describe, expect, it } from "vitest";

import { coreServices, hourly, packages } from "@/routes/index";

// The rates section is what visitors compare before contacting MacDonald, so the
// numbers and the shape of each option have to stay complete and in US dollars.
describe("Rates and packages", () => {
  it("offers three packages that can be compared side by side", () => {
    expect(packages.map(pkg => pkg.name)).toEqual(["Starter", "Regular", "Full support"]);
    expect(packages.every(pkg => /^\$\d{1,3}(,\d{3})?$/.test(pkg.price))).toBe(true);
    expect(packages.every(pkg => pkg.per === "a month")).toBe(true);
    expect(packages.every(pkg => pkg.hours.includes("hours a month"))).toBe(true);
    expect(packages.every(pkg => pkg.includes.length >= 4)).toBe(true);
  });

  it("lists an hourly option alongside the packages", () => {
    expect(hourly.rate).toBe("$25");
    expect(hourly.unit).toBe("an hour");
  });

  it("keeps the packages built around scheduling, email and everyday admin", () => {
    expect(coreServices.map(offer => offer.name)).toEqual([
      "Scheduling & Calendar",
      "Email & Inbox",
      "Everyday Admin",
    ]);
  });
});

import { test, expect } from "@playwright/test";

test.describe("Portfolio landing page", () => {
  test("renders hero, nav, and all sections with no console errors", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/");

    await expect(page.locator("h1")).toContainText("Adam");
    await expect(page.locator("h1")).toContainText("Ferguson");
    await expect(page.locator("nav a[href='#work']")).toBeVisible();
    await expect(page.locator("nav a[href='#about']")).toBeVisible();
    await expect(page.locator("nav a[href='#contact']")).toBeVisible();

    await expect(page.locator("[data-panel]")).toHaveCount(3);
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
    await expect(
      page.locator("a[href='mailto:adam@adamferguson.pro']").first()
    ).toBeVisible();

    expect(errors).toEqual([]);
  });

  test("has no horizontal overflow on mobile or desktop", async ({
    page,
  }) => {
    for (const viewport of [
      { width: 375, height: 812 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await page.waitForTimeout(300);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    }
  });

  test("shows the real Home Services screenshot and a labeled placeholder for projects without one yet", async ({
    page,
  }) => {
    await page.goto("/");
    const panels = page.locator("[data-panel]");

    const homeServicesPanel = panels.nth(1);
    await expect(homeServicesPanel.locator("img")).toHaveCount(1);

    const fabricPotsPanel = panels.nth(0);
    await expect(
      fabricPotsPanel.locator(".af-project-placeholder")
    ).toContainText("fabric-pots");
  });

  test("respects prefers-reduced-motion by keeping content visible without relying on animation", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const line = page.locator("[data-hero-line]").first();
    await expect(line).toBeVisible();
    const opacity = await line.evaluate(
      (el) => getComputedStyle(el).opacity
    );
    expect(opacity).toBe("1");
  });

  test("canvas particle field mounts and marks itself ready", async ({
    page,
  }) => {
    await page.goto("/");
    const canvas = page.locator("canvas");
    await expect(canvas).toHaveAttribute("data-ready", "true");
  });
});

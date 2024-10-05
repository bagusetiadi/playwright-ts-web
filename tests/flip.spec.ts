import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Fill User Information Form with Dynamic Data', async ({ page }) => {
  
  // Generate dynamic test data using faker
  const title = 'Mr.';
  const firstName = faker.name.firstName();
  const middleName = faker.name.middleName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phone = faker.string.numeric(10);  // Generates a 10-digit random phone number
  const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0];  // Generates a random birthdate
  
  // Navigate to the form page
  await page.goto('https://flip-sample-form.onrender.com');

  // Fill the form with generated dynamic data
  await page.selectOption('#title', { label: title });
  await page.fill('#firstName', firstName);
  await page.fill('#middleName', middleName);
  await page.fill('#lastName', lastName);
  await page.fill('#email', email);
  await page.fill('#phone', phone);
  await page.fill('#dob', dob);

  // Optionally, click a gender toggle if necessary
  // await page.click('#genderToggle');

  await page.selectOption('#province', { label: 'DKI Jakarta' });
  await page.selectOption('#city', { label: 'Jakarta Barat' });

  // Submit the form
  await page.click('button[type="submit"]');

  // Wait for the confirmation text to be visible
  const fullName = `${title} ${firstName} ${middleName} ${lastName}`;
  await page.waitForSelector(`text="${fullName}"`, { state: 'visible' });

  // Assert that the correct name is displayed
  await expect(page.locator(`text="${fullName}"`)).toBeVisible();
});

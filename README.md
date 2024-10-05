# E2E Testing with Playwright

This project demonstrates end-to-end (E2E) testing of a user information form using Playwright and Faker.js. The tests automatically fill out form fields with dynamically generated data and verify successful submission.

## 🚀 Features

- Automated E2E testing using Playwright
- Dynamic test data generation using Faker.js
- Form field validation
- Submission verification
- Cross-browser testing capabilities

## 📋 Prerequisites

Before running the tests, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
```

```bash
npm install @faker-js/faker
```

## 📦 Dependencies

- [@playwright/test](https://playwright.dev/): Testing framework for E2E testing
- [@faker-js/faker](https://fakerjs.dev/): Library for generating fake data

## 🏃‍♂️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode (with browser visible):
```bash
npx playwright test --headed
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

## 📝 Test Description

The test suite performs the following actions:
1. Generates random user data using Faker.js
2. Navigates to the form page
3. Fills out all required fields:
   - Title
   - First Name
   - Middle Name
   - Last Name
   - Email
   - Phone Number
   - Date of Birth
   - Province
   - City
4. Submits the form
5. Verifies successful submission by checking the displayed user information

## 🎯 Test Data Generation

The test uses Faker.js to generate realistic test data:
- Names are generated using `faker.name`
- Email is generated using `faker.internet.email`
- Phone number is generated using `faker.string.numeric`
- Date of birth is generated using `faker.date.birthdate`

## 📁 Project Structure

```
├── tests/
│   └── form.spec.ts    # Test specifications
├── playwright.config.ts # Playwright configuration
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🔍 Configuration

The test configuration can be modified in `playwright.config.ts`. Key configurations include:
- Browser selection
- Timeout settings
- Retry attempts
- Reporter settings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazingFeature'`)
4. Push to the branch (`git push origin feature/amazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please raise an issue in the GitHub repository.

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) for the amazing testing framework
- [Faker.js](https://fakerjs.dev/) for the test data generation capabilities

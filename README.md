<div align="center">
  <br />
    <a href="https://bankirru.vercel.app/" target="_blank">
      <img src="https://i.imgur.com/rD2Fywd.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Sentry-white?style=for-the-badge&logo=Sentry&logoColor=white&color=%237A4889" alt="sentry" />
    <img src="https://img.shields.io/badge/-Zod-white?style=for-the-badge&logo=Zod&logoColor=white&color=%23274D82" alt="zod" />
    <img src="https://img.shields.io/badge/Chart.js-FE777B?style=for-the-badge&logo=Chart.js&logoColor=white" alt="chartjs" />
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=shadcn%2Fui&color=000000&logo=shadcn%2Fui&logoColor=FFFFFF&label=" alt="shadcn" />
    <img src="https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="reacthookform" />
    
  </div>

  <h3 align="center">A Fintech Bank Application</h3>
    <div align="center">
      Bankirru is a comprehensive digital platform designed to provide users with a seamless and secure banking experience. It enables users to manage their finances, perform transactions, and access various banking services from the convenience of their devices.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 🖼️ [Preview Page](#preview)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 📌 [Demo Account](#demo)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, Bankirru is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether. By developing this project, i gained hands-on experience in crafting secure, seamless, and responsive SaaS bank platform using 

If you're cloned this project and need assistance or face any bugs, please contacted me.

## <a name="preview">🖼️ Preview Page</a>

<a href="https://bankirru.vercel.app/" target="_blank">
  <img src="https://i.imgur.com/UqB4Vbh.png" alt="preview-home" />
</a>

<a href="https://bankirru.vercel.app/sign-in" target="_blank">
  <img src="https://i.imgur.com/6QVWgkE.png" alt="preview-signin" />
</a>

<a href="https://bankirru.vercel.app/sign-up" target="_blank">
  <img src="https://i.imgur.com/uXqRx3z.png" alt="preview-signin" />
</a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- TailwindCSS
- Appwrite
- Sentry
- Zod
- Chart.js
- ShadCN
- React Hook Form
- Plaid
- Dwolla

## <a name="features">🔋 Features</a>

👉 **Authentication**: An ultra-secure SSR authentication with proper validations and authorization

👉 **Connect Banks**: Integrates with Plaid for multiple bank account linking

👉 **Home Page**: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc

👉 **My Banks**: Check the complete list of all connected banks with respective balances, account details

👉 **Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks

👉 **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.

👉 **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

and many more, including code architecture and reusability. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:deikairru/bankirru.git
cd banking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

## <a name="demo">📌 Demo Account</a>

**For the purpose of testing you can use this Demo Account**

### Login Account (Free Demo)
- **Username**
```
demo@bank.next  
```
- **Password**
```
demo1234  
```

### Bank Account (use whenever you want to add new bank account/card)
- **Username**
```
user_good 
```
- **Password**
```
pass_good 
```

### Creating New Account
**When creating new account, make sure the city name are valid.**
- example: New York
```
NY
```

## <a name="more">🚀 More</a>

**Find more project**

Enjoyed looking at this project? Dive deeper into my portfolio to seek more project like this.

**Best Regards, Deikairru**
#
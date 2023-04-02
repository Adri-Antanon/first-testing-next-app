# Popular Concert Venue

## An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
2. Run `cp .env.development.local_template .env.development.local`
3. Run `cp .env.local_template .env.local`
4. In _.env.local_:
   - add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`
   - command to generate a random string: `openssl rand -base64 32`

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]

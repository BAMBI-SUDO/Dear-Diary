Dear Diary is a simple single page web app that uses Next.Js

First we will start by creating our folder, open Node.js or use you visual studio terminal to execute the follow statement:
---------------------------------------------------------------------------------------------------
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter
---------------------------------------------------------------------------------------------------

Once this has been executed you should see:
---------------------------------------------------------------------------------------------------
C:\Users\Lane Managa>npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter
Need to install the following packages:
  create-next-app
Ok to proceed? (y)
---------------------------------------------------------------------------------------------------

Enter -y- to proceed and you should see:
---------------------------------------------------------------------------------------------------
Creating a new Next.js app in C:\Users\Lane Managa\nextjs-blog.

Downloading files from repo https://github.com/vercel/next-learn/tree/master/basics/learn-starter. This might take a moment.

Installing packages. This might take a couple of minutes.


added 100 packages, and audited 101 packages in 2m

6 packages are looking for funding
  run `npm fund` for details

2 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created nextjs-blog at C:\Users\Lane Managa\nextjs-blog
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd nextjs-blog
  npm run dev

  C:\Users\Lane Managa>
---------------------------------------------------------------------------------------------------

then we can proceed to execute the statement <<cd nextjs-blog>> followed by <<npm run dev>>, you should then see:
---------------------------------------------------------------------------------------------------
C:\Users\Lane Managa>cd nextjs-blog

C:\Users\Lane Managa\nextjs-blog>npm run dev

> dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 2.7s (110 modules)
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
---------------------------------------------------------------------------------------------------

once you are done you will see that when you go to url: http://localhost:3000 you are able to see a template for next.js which you can now make changes to.
also feel free to look at https://www.w3schools.com/html/ to help with style and adding features.

Edits made to code:
1. The text has been changed.
2. Two more cards have been added.
3. An avatar has been added.
4. the logo has been changed.
5. Links have been removed.
6. Last Two cards contain links to linkedIn and instagram.
7. The background has been changed.
8.  Style has been slightly edited.

Notes:
When adding images it is easier to add directly to the corresponding folder, in this case it would be the <<public>> folder.

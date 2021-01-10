# Calendar

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This was a really fun test assignment. I found that it was quite small, but still challenging.

Never one to shy away from a challenge, I chose to use two technologies I had been unfamiliar with but wanted to try out: **TypeScript** and **Tailwind**.

I found that TypeScript was quite useful, but still not as useful as something like Elm (not that I am an expert or even competent in either). Tailwind, however, proved to be extremely useful and pleasant to use, especially in this case where I did not have to achieve a pixel-perfect likeness to a design.

## How to run

Unpackage the source and run `npm install` in that directory to install the dependencies.
Then do `npm run start` to start a development build. Navigate to `localhost:3000` to check out the app!

Note that this was developed on Chrome and thus, Chrome is recommended for the optimal experience.

A production version of this app is running on `https://calendar.martpart.ee/`.

_PLEASE NOTE_ : I had some issues with PostCSS. It seems to be dependent on the node version. I recommend using node version `14.12.0` (that is the one on my development machine and I can confirm is working)

## Available Scripts

### `npm run start`

Runs the app in the development mode on port 3000.

### `npm run build`

Builds a production-ready version.

## The Task

The task was to make a calendar with the following stories:

- The user can see the calendar
- The app can used on various sizes of screen
- The user can see previous weeks and next weeks
- The user can change the day the week starts
- The user can see what public and folk holidays there are on a given day
- The holidays are queried from an API
- The API should not be queried multiple times for the same period

## My solution

I started out using Redux as it was required by the assignment, but in the end, I was left wondering if I could just use hooks instead.

Hopefully the structure is easy to follow and makes sense.

To achieve the "Don't query the API multiple times" requirement, I decided to keep track of the earliest date and the latest date that had been queried. If the user wanted to see a time period that was outside of that range, a new request would be made. Otherwise, we would conclude that there are no public/folk holidays in that period, even if there is nothing in the store.

## TO-DO

This does not have any tests! I'm sorry! I like tests though, I promise! Even though sometimes they are a pain to write, they have saved my bacon a lot of times!

## Time spent on this

This is something that frequently comes up. To beat you to the punch, I spent about 10 hours on this.

Thank you and good day!

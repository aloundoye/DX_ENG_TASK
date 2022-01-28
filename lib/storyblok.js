import StoryblokClient from "storyblok-js-client";

export const Storyblok = new StoryblokClient({
  oauthToken: process.env.NEXT_PUBLIC_STORYBLOK_OAUTH_TOKEN,
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
});

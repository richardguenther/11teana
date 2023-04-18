import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "47b995db-39b9-4a0a-9a51-0af09d0a91e8", // Get this from tina.io
  token: "3080d94050e67e86025c036dc7f71fd737c899ad", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "_source/"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "_source/assets/static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_source/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

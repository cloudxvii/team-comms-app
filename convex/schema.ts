import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  ...authTables,
  workspaces: defineTable({
    name : v.string(),
    iserId: v.id("users"),
    joinCode: v.string(),
  }),
});

export default schema;

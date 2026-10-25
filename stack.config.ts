import type { StackConfig } from "@stackframe/stack";

export const config: StackConfig = {
  apps: {
    installed: {
      authentication: {
        enabled: true,
      },
    },
  },
};
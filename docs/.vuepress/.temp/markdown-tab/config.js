import { CodeTabs } from "D:/Code/GUGUbot/GUGUbot-Docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_fwrkaqhiubvpqiaqgjj4wtj4pq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Code/GUGUbot/GUGUbot-Docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_fwrkaqhiubvpqiaqgjj4wtj4pq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Code/GUGUbot/GUGUbot-Docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_fwrkaqhiubvpqiaqgjj4wtj4pq/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import pkg from '@badeball/cypress-cucumber-preprocessor';
const { addCucumberPreprocessorPlugin } = pkg;

export async function setupNodeEvents(on, config) {
  await pkg.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        experiments: {
          topLevelAwait: true,
        },
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    projectId: "vqggtk",
    setupNodeEvents,
    retries: 0,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 50000,
    responseTimeout: 50000,
    viewportWidth: 1200,
    numTestsKeptInMemory: 1,
    videoUploadOnPasses: false,
    baseUrl: "https://staging.quotech.io/",
    experimentalStudio: true,
  },
});

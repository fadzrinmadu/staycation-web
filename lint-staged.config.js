export default {
  "**/*.(ts|tsx)": (filenames) => [
    "eslint --fix " + filenames.join(" "),
    "prettier --write " + filenames.join(" "),
  ],
  "**/*.(js|jsx)": (filenames) => [
    "eslint --fix " + filenames.join(" "),
    "prettier --write " + filenames.join(" "),
  ],
  "**/*.(css|scss)": (filenames) => "prettier --write " + filenames.join(" "),
};

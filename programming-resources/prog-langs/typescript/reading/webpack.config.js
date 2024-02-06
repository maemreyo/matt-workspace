const glob = require("glob");
const path = require("path");

module.exports = {
    mode: "development", // or 'production' or 'none'
    entry: () => {
        const entries = {};
        ["ts4_design_patterns"].forEach((folder) => {
            glob.globSync(`./${folder}/**/index.ts`).forEach((file) => {
                const entryName = path
                    .dirname(file)
                    .replace(`./${folder}/`, "")
                    .replace("/", "");
                entries[`${entryName}`] = `./${file}`;
            });
        });
        return entries;
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    cache: true,
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        // Add the following lines to create a subfolder for each entry point
        // You can modify the folder names and structure to fit your needs
        pathinfo: false,
        publicPath: "/",
        library: "[name]",
        libraryTarget: "umd",
        chunkFilename: "[name].[chunkhash].js",
        devtoolFallbackModuleFilenameTemplate:
            "webpack:///[resource-path]?[hash]",
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]",
        globalObject: "this",
        // The following lines create a separate folder for each entry point
        // The folder name is based on the entry point name
        // You can modify the folder structure to fit your needs
        path: path.join(__dirname, "dist"),
        filename: (pathData) => {
            const chapterIndex = pathData.chunk.name.indexOf("chapter");
            const folder = pathData.chunk.name.slice(0, chapterIndex);
            const name = pathData.chunk.name.slice(chapterIndex);
            return `${folder}/${name}.js`;
        },
    },
};

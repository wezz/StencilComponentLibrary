const { cp } = require("fs-extra");
const fs = require("fs-extra")

async function copyAndAdjustPackageJson() {
    try {
        let originalContent = await fs.readFile("./package.json", "utf-8");
        let adjustedContent = originalContent.replace('"dist/"', '"*"');
        adjustedContent = adjustedContent.replace(/"dist\//igm, '"./');
        await fs.writeFile("./dist/package.json", adjustedContent, { overwrite: true });
        console.log('package.json was copied to dist and adjusted for packaging')
    } catch(e) {
        console.log('package.json was NOT copied to dist and adjusted for packaging')
    }
}

console.log('\nFiles in project:');
fs.readdirSync('./').forEach(file => {
    console.log(file);
});

console.log('\n\nCopy actions');

copyAndAdjustPackageJson().then(async () => {
    try {
    await fs.copyFile("./readme.md", "./dist/readme.md");
        console.log('readme.md was copied to dist');
    } catch(e) {
        console.log('readme.md was NOT copied to dist');
    }

    try {
        await fs.copy("./umd", "./dist/umd");
        console.log('Copy over standalone scripts');
    } catch(e) {
        console.log('DID NOT Copy over standalone scripts');
    }

    try {
        await fs.copy("./storybook-static", "./dist/storybook-static");
        console.log('Copy over storybook ');
    } catch(e) {
        console.log('DID NOT Copy over storybook');
    }

    try {
        await  fs.copy("./node_modules/@webcomponents", "./dist/umd/modules/@webcomponents");
        console.log('Copy over @webcomponent shims to umd');
    } catch(e) {
        console.log('DID NOT Copy over @webcomponent shims to umd');
    }
    
    // console.log('\nFiles in dist:');
    // fs.readdirSync('./dist').forEach(file => {
    //     console.log(file);
    // });

    var pjson = require('./package.json');
    console.log(`\n\nSet current package version in files. (${pjson.version})` );
    
    const filesToWritePackageVersionTo = ['./dist/umd/init.js','./dist/umd/loader.js'];
    filesToWritePackageVersionTo.forEach((fileSrc) => {
        let fileContent = fs.readFileSync(fileSrc, "utf8");
        fileContent = fileContent.replace(/#packageversion#/gmi, pjson.version);
        fs.writeFileSync(fileSrc, fileContent, 'utf8');
        console.log(`\n\nSet version in file (${fileSrc})` );
    })

});


const path = require('path');
const { exec } = require('child_process');

class Opencode {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.plugin("emit", (compilation, cb) => {
            console.log('\n');
            for (let filename in compilation.assets) {
                const file = path.basename(filename);

                if(file.indexOf('.css') !== -1) {
                    exec(`cd opencode && opencode u css/${ file }`, (err, stdout, stderr) => {
                        if(err) return;
                        console.log(`opencode upload ./opencode/css/${ file }`);
                    });
                }
                if(file.indexOf('.js') !== -1) {
                    exec(`cd opencode && opencode u js/${ file }`, (err, stdout, stderr) => {
                        if(err) return;
                        console.log(`opencode upload ./opencode/js/${ file }`);
                    });
                }
                if(file.indexOf('sprite.html') !== -1) {
                    exec(`cd opencode && opencode u elements/${ file }`, (err, stdout, stderr) => {
                        if(err) return;
                        console.log(`opencode upload ./opencode/elements/${ file }`);
                    });
                }

            }
            
            cb();
        })
    }
}

module.exports = Opencode;
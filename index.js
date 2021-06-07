console.clear();
console.log("Starting")
const exec = require('child_process').exec;
const chalk = require('chalk');
const setTitle = require('node-bash-title');

const isRunning = (query, cb) => {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
        case 'win32' : cmd = `tasklist`; break;
        case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
        case 'linux' : cmd = `ps -A`; break;
        default: break;
    }
    exec(cmd, (err, stdout, stderr) => {
        cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
}

// Run by start
function check() {
// Run all the checks
isRunning('Photoshop.exe', (status) => {
    if(status) {
         setRPC("Photoshop")
  
  }
})
}
check();
setInterval(() => {
check();
},16500)

function setRPC(program) {
if(program==="Photoshop") {
console.log("Detected Photoshop")
    var processWindows = require("node-process-windows");

    // Focus window by process...
    var activeProcesses = processWindows.getProcesses(function(err, processes) {
        var adobeProcesses = processes.filter(p => p.processName.indexOf("Photoshop") >= 0);
        if(adobeProcesses.length > 0) {
setTitle("Adobe 2021 RPC - Attatched to Photoshop.exe")
           console.clear()
console.log(`
░█████╗░██████╗░░█████╗░██████╗░███████╗  ██████╗░░█████╗░██████╗░░░███╗░░  ██████╗░██████╗░░█████╗░
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝  ╚════██╗██╔══██╗╚════██╗░████║░░  ██╔══██╗██╔══██╗██╔══██╗
███████║██║░░██║██║░░██║██████╦╝█████╗░░  ░░███╔═╝██║░░██║░░███╔═╝██╔██║░░  ██████╔╝██████╔╝██║░░╚═╝
██╔══██║██║░░██║██║░░██║██╔══██╗██╔══╝░░  ██╔══╝░░██║░░██║██╔══╝░░╚═╝██║░░  ██╔══██╗██╔═══╝░██║░░██╗
██║░░██║██████╔╝╚█████╔╝██████╦╝███████╗  ███████╗╚█████╔╝███████╗███████╗  ██║░░██║██║░░░░░╚█████╔╝
╚═╝░░╚═╝╚═════╝░░╚════╝░╚═════╝░╚══════╝  ╚══════╝░╚════╝░╚══════╝╚══════╝  ╚═╝░░╚═╝╚═╝░░░░░░╚════╝░`)
console.log("Made by Jayy");

console.log("Attatched to: " + chalk.yellow('Photoshop.exe'))          
console.log(adobeProcesses[0].mainWindowTitle);
           let project = adobeProcesses[0].mainWindowTitle.split("@")[0]
           console.log("Project: " + chalk.blue(project))
           let layer = adobeProcesses[0].mainWindowTitle.split("(")[1].split(",")[0].replace(")","")
           console.log("layer: " + chalk.blue(layer))
           const client = require('discord-rich-presence')('851431587256991784');
 
client.updatePresence({
  state: "Layer: " + layer,
  details: 'Editing '+project+' in Photoshop',
  startTimestamp: Date.now(),
  largeImageKey: 'adobe_photoshop_2021',
  smallImageKey: 'adobe_creative_cloud',
  smallImageText: 'Created by Jayy <3',
  largeImageText: 'Adobe Photoshop 2021'
});
           // processWindows.focusWindow(adobeProcesses[0]);
        }
    });
}
}
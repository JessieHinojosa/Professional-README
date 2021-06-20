
function renderLicenseBadge(license) {
  let condition = license.toString();
  let markdownUrl;
  switch (condition) {
    case "MIT":
      markdownUrl = "![APM](https://img.shields.io/apm/l/vim-mode)";
      break;
      case "EPL-2.0":
        markdownUrl = "![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e)";
        break;
    case "Apache-2.0":
      markdownUrl = "![Hex.pm](https://img.shields.io/hexpm/l/plug)";
        break;
    case "BSD-3-Clause":
      markdownUrl = "![PyPI - License](https://img.shields.io/pypi/l/Django)";
        break;
    case "":
        break;
  }
  return markdownUrl;
}

function renderLicenseLink(license) {
  let switchCondition = license.toString();
  let licenseLink;
  switch(switchCondition) {
    case "MIT":
      licenseLink = "[MIT](https://choosealicense.com/licenses/mit/)"
      break;
    case "EPL-2.0":
      licenseLink = "[Eclipse Public License](https://www.eclipse.org/legal/epl-2.0/)"
      break;
    case "Apache-2.0":
      licenseLink = "[Apache](https://www.apache.org/licenses/LICENSE-2.0)"

      break;
    case "BSD-3-Clause":
      licenseLink = "[3-Clause BSD](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    case "":
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  let condition = license.toString();
  let licenseDescription;
  let date = new Date().getFullYear().toString();
  switch(condition) {
    case "MIT": 
          licenseDescription = date + " " + username +
            "<br/>" +
           "<br/>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to " + 
           "<br/>deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or " +
           "<br/>ell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: " +
            "<br/>" +
           "<br/>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. " +
             "<br/>" +
           "<br/>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF " + 
           "<br/>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE " +
            "<br/>FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION " 
            "<br/>WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
          break;
    case "EPL-2.0":
           licenseDescription = "* *Refer to provided link* *";

          break;
    case "Apache-2.0":
           licenseDescription = "* *Refer to provided link* *";

          break;
    case "BSD-3-Clause":
           licenseDescription =  date + " " + username + 
           "<br/>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: " +
           "<br/><br/>1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. " +
            
           "<br/><br/>2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. " +
          
           "<br/><br/>3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. " +
           
           "<br/><br/>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND " + 
           "FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES " + 
           "(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, " + 
           "STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. ";
          break;
  }
  return licenseDescription;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {title, description, installation, usage, license, contribution, test, ...contact} = data;
    return `
  # **${title}**
  -------------- 
  > ## Table of Contents
  [Description](#Description)<br/>
  [Installation](#Installation)<br/>
  [Usage](#Usage)<br/>
  [License](#License)<br/>
  [Contribution](#Contribution)<br/>
  [Test](##testing)<br/>
  [Questions](##Questions)<br/>
  --------------
  > ## Description<br/>
  ${description}<br/>
  ${renderLicenseBadge(license)}
    
  > ## Installation<br/>
  ${installation}

  > ## Usage<br/>
  ${usage}
    
  > ## License<br/>
   ### *${license}* 
  &copy;${renderLicenseSection(license, contact.github)}<br/>
  ${renderLicenseLink(license)}

  > ## Contribution<br/>
  ${contribution}

  > ## Testing<br/>
  ${test}
  
  > ## Questions<br/>
  ${contact.contactInstructions}<br/>
  [${contact.github}](https://github.com/${contact.github}/)<br/>
  ${contact.email}
`
}
module.exports = generateMarkdown;



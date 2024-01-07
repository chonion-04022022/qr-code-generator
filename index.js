import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: 'Type in your URL:',
      name: 'URL',
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile('Url.txt', url, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('File has been written successfully.');
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Error with TTY:', error);
    } else {
      console.error('Something else went wrong:', error);
    }
  });
0
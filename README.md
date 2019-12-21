# Node-Arduino-Serial-Monitor <img src="http://www.pngpix.com/wp-content/uploads/2016/11/PNGPIX-COM-Pie-Chart-PNG-Transparent-Image-500x498.png" width="100" height="100" align="right"/> 
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

<br>

<p align="center">
  <img src="dashboard.png"/>
</p>

## Working Principle
<p align="center">
  <img src="working_principle.svg"/>
</p>

## How to use

#### 0. Upload the Arduino code
Upload the code for Arduino and check the port number. Later change the port number in server.js accordingly.

#### 1. Cone the repository
```
git clone https://github.com/atick-faisal/Node-Arduino-Serial-Monitor.git
```
#### 2. Change directory into the project
```
cd Sensor-Dashboard
```
#### 3. Install backend dependencies
```
npm install
```
#### 4. Install frontend dependencies
```
npm run client-install
```
#### 5. Run the server
```
node server.js
```
#### 6. Run the client
```
cd client/
npm start
```
  
## License
[![licensebuttons by-nc-sa](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).

import React from "react";
import "./Home.css";
import {
  AiOutlineDashboard,
  AiOutlineBarChart,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import {
  BsArrowDownRightSquare,
  BsThermometerHigh,
  BsGlobeEuropeAfrica,
} from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="left-container">
          <div className="logo"></div>
          <div className="left-powred-by">
            <div className="left-body">
              <div className="dashboard">
                <AiOutlineDashboard className="dashboard-child" />
                <div className="dashboard-child">Dashboard</div>
              </div>
              <div className="graphs">
                <AiOutlineBarChart className="graphs-child" />
                <div className="graphs-child">Graphs</div>
              </div>
              <div className="analytics">
                <TbDeviceDesktopAnalytics className="analytics-child" />
                <div className="analytics-child">Analytics</div>
              </div>
              <div className="settings">
                <FiSettings className="settings-child" />
                <div className="settings-child">Settings</div>
              </div>
            </div>
            <div className="rights">
              <BsArrowDownRightSquare className="rights-child" />
              <div className="rights-child">All rights revered by</div>
            </div>
            <div className="logo"></div>
            <div className="posted">Posted by xyma analytics</div>
          </div>
        </div>
        <div className="right-container">
          <div className="dashboard-header">
            <div className="dashboard-headers">Dashboard</div>
            <div className="welcome">Welome Kartikey</div>
          </div>
          <div className="dasboard-body">
            <div className="dashboard-body-container">
              <div className="dashboard-containers1">
                <BsThermometerHigh className="dashboard-image" />
                <div className="dashboard-stats">
                  <div className="stats-h1">180°C</div>
                  <div className="stats-h2">Sensor-1</div>
                  <div className="stats-h3">Click Here To View</div>
                </div>
              </div>
              <div className="dashboard-containers1">
                <BsThermometerHigh className="dashboard-image" />
                <div className="dashboard-stats">
                  <div className="stats-h1">40°C</div>
                  <div className="stats-h2">Sensor-2</div>
                  <div className="stats-h3">Click Here To View</div>
                </div>
              </div>
              <div className="dashboard-containers1">
                <BsThermometerHigh className="dashboard-image" />
                <div className="dashboard-stats">
                  <div className="stats-h1">40°C</div>
                  <div className="stats-h2">Sensor-3</div>
                  <div className="stats-h3">Click Here To View</div>
                </div>
              </div>
              <div className="dashboard-containers1">
                <BsThermometerHigh className="dashboard-image" />
                <div className="dashboard-stats">
                  <div className="stats-h1">40°C</div>
                  <div className="stats-h2">Sensor-4</div>
                  <div className="stats-h3">Click Here To View</div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-headers">
            <div className="body-header-container">
              <div className="asset-location">Asset Location</div>
              <div className="header-offline">
                Device Stats
                <div className="offline">(Offline)</div>
              </div>
            </div>
          </div>
          <div className="maps-stats">
            <div className="maps">
              <div className="first-map">first map</div>
              <div className="second-map">
                <div className="device-stats">
                  <div className="stats1">
                    <div className="sensors">Sensors(Nos)</div>
                    <div className="sensord-visual">
                      <div className="nos-data" id="nos-data">
                        8/20
                      </div>
                    </div>
                  </div>
                  <div className="stats1">
                    <div className="sensors">Storage(MB)</div>
                    <div className="sensord-visual">
                      <div className="nos-data" id="storage">
                        20MB/1024MB
                      </div>
                    </div>
                  </div>
                  <div className="stats1">
                    <div className="sensors">Device Temperature(°C)</div>
                    <div className="sensord-visual">
                      <div className="nos-data" id="temp">
                        °C/100°C
                      </div>
                    </div>
                  </div>
                  <div className="stats4">
                    <div className="login">
                      <AiOutlineClockCircle className="login-child-first" />
                      <div className="login-child-second">
                        <div className="login-h1">Last Login</div>
                        <div className="login-time">05-03-2023 10:12:56</div>
                      </div>
                    </div>
                    <div className="mac">
                      <BsGlobeEuropeAfrica className="mac-child-first" />
                      <div className="mac-child-second">
                        <div className="mac-h1">Mac Address</div>
                        <div className="mac-time">
                          Static-50.172.97.14-Tataoidc.Co.In
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

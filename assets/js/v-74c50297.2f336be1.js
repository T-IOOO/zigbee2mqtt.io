"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42337],{71035:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-74c50297",path:"/devices/BAC-002-ALZB.html",title:"HKGK BAC-002-ALZB control via MQTT",lang:"en-US",frontmatter:{title:"HKGK BAC-002-ALZB control via MQTT",description:"Integrate your HKGK BAC-002-ALZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-03-28T13:25:07.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Stop message flooding",slug:"stop-message-flooding",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Programming_mode (composite)",slug:"programming-mode-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/BAC-002-ALZB.md",git:{updatedTime:1665155561e3}}},18581:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const d=(0,o(66252).uE)('<h1 id="hkgk-bac-002-alzb" tabindex="-1"><a class="header-anchor" href="#hkgk-bac-002-alzb" aria-hidden="true">#</a> HKGK BAC-002-ALZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>BAC-002-ALZB</td></tr><tr><td>Vendor</td><td>HKGK</td></tr><tr><td>Description</td><td>BAC series thermostat</td></tr><tr><td>Exposes</td><td>lock (state), climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, preset, sensor, fan_mode), programming_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/BAC-002-ALZB.jpg" alt="HKGK BAC-002-ALZB"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.</p><h3 id="stop-message-flooding" tabindex="-1"><a class="header-anchor" href="#stop-message-flooding" aria-hidden="true">#</a> Stop message flooding</h3><p>This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your <code>configuration.yaml</code> file:</p><p>devices: &#39;0x12345678&#39;: friendly_name: thermostat debounce: 1</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>preset</code>, <code>sensor</code>, <code>fan_mode</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>45</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>cool</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>hold</code>, <code>program</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code></li></ul><h3 id="programming-mode-composite" tabindex="-1"><a class="header-anchor" href="#programming-mode-composite" aria-hidden="true">#</a> Programming_mode (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;undefined&quot;: {&quot;week&quot;: VALUE, &quot;workdays_schedule&quot;: VALUE, &quot;holidays_schedule&quot;: VALUE}}</code></p><ul><li><code>week</code> (enum): Week format user for schedule. Allowed values: <code>5+2</code>, <code>6+1</code>, <code>7</code></li><li><code>workdays_schedule</code> (text): undefined.</li><li><code>holidays_schedule</code> (text): undefined.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),i={},a=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);
import React from 'react';
import PhoneInput from './phone';

function Signup() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [code, setCountryCode] =React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("auth", "true");
    localStorage.setItem("username", username);

    console.log({
      username,
      email,
      code,
      phone,
      password,
    });

    alert("Signup successful!");
  };

  return (
    <div className="Signup-container">
      <div className="Signup-form">
        <h2>Welcome to Renta</h2>
        <form className="Signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>
              Username:
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
<br />
            <label>
              Full Name:
              <input type="text" placeholder="Enter Name" required />
            </label>
<br />
            <label>
              Email:
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              <label>
  Country Code:
  <select
    value={code}
    onChange={(e) => setCountryCode(e.target.value)}
    required
  >
    <option value="">Select code</option>
    <option value="+93">AFG Afghanista (+93)</option>
    <option value="+355">ALB Albania (+355)</option>
    <option value="+213">DZA Algeria (+213)</option>
    <option value="+1-684">ASM American Samoa(+1-684)</option>
    <option value="+376">AND Andorra(+376)</option>
    <option value="+244">AGO Angola(+244)</option>
    <option value="+1-264">AIA Anguilla(+1-264)</option>
    <option value="+672, 64">ATA Antarctica(+672, 64)</option>
    <option value="+1-268">ATG Antigua and Barbuda(+1-268)</option>
    <option value="+54">ARG Argentina(+54)</option>
    <option value="+374">ARM Armenia(+374)</option>
    <option value="+297">ABW Aruba(+297)</option>
    <option value="+247">ASC Ascension Island(+247)</option>
    <option value="+61">🇦🇺 Australia (+61)</option>
    <option value="+43">AUT Austria(+43)</option>
    <option value="+994">AZE Azerbaijan(+994)</option>
    <option value="+1-242">BHS Bahamas(+1-242)</option>
    <option value="+973">BHR Bahrain(+973)</option>
    <option value="+880">BGD Bangladesh(+880)</option>
    <option value="+1-246">BRB Barbados(+1-246)</option>
    <option value="+375">BLR Belarus(+375)</option>
    <option value="+32">BEL Begium(+32)</option>
    <option value="+501">BLZ Belize(+501)</option>
    <option value="+229">BEN Benin(+229)</option>
    <option value="+1 441">BMU Bermuda(+1 441)</option>
    <option value="+975">BTN Bhutan(+975)</option>
    <option value="+591">BOL Bolivia(+591)</option>
    <option value="+387">BIH Bosnia and Herzegovina(+387)</option>
    <option value="+267">BWA Botswana(+267)</option>
    <option value="+55">BRA Brazil(+55)</option>
    <option value="+1-284">VGB British Virgin Islands(+1-284)</option>
    <option value="+673">BRN Brunei(+673)</option>
    <option value="+359">BGR Bulgaria(+359)</option>
    <option value="+226">BFA Burkina Faso(+226)</option>
    <option value="+95">MMR Burma(Myanmar)(+95)</option>
    <option value="+257">BDI Burundi(+257)</option>
    <option value="+855">KHM Cambodia(+855)</option>
    <option value="+237">CMR Cameroon(+237)</option>
    <option value="+1">CAN Canada(+1)</option>
    <option value="+238">CPV Cape Verde(+238)</option>
    <option value="+1-345">CYM Cayman Islands(+1-345)</option>
    <option value="+236">CAF Cantral African Republic(+236)</option>
    <option value="+235">TCD Chad(+235)</option>
    <option value="+56">CHL Chile(+56)</option>
    <option value="+86">CHN China(+86)</option>
    <option value="+61">CXR Christmas Island(+61)</option>
    <option value="+61">CC Cocos(Keeling) Islands(+61)</option>
    <option value="+57">CO Colombia(+57)</option>
    <option value="+269">KM Comoros(+269)</option>
    <option value="+682">CK Cook Islands(+682)</option>
    <option value="+506">CR Costa Rica(+506)</option>
    <option value="+385">HR croatia(+385)</option>
    <option value="+53">CU Cuba(+53)</option>
    <option value="+357">CY Cyprus(+357)</option>
    <option value="+420">CZ Czech Republic(+420)</option>
    <option value="+243">DRC Democratic Republic of Congo(+243)</option>
    <option value="+45">DK Denmark(+45)</option>
    <option value="+246">DG Diego Garcia(+246)</option>
    <option value="+253">DJ Djibouti(+253)</option>
    <option value="+1-767">DM Dominica(+1-767)</option>
    <option value="+1-809,+1-829, +1-849">DO Dominican Republic(+1-809, +1-829, +1-849)</option>
    <option value="+593">EC Ecuador(+593)</option>
    <option value="+20">EGY Egypt(+20)</option>
    <option value="+503">SLV El Salvador(+503)</option>
    <option value="+240">GQ Equatorial Guinea(+240)</option>
    <option value="+291">ER Eritrea(+291)</option>
    <option value="+372">EST Estonia(+372)</option>
    <option value="+251">ETH EThiopia(+251)</option>
    <option value="+500">FLK Falkland Islands(+500)</option>
    <option value="+298">FRO Faroe Islands(+298)</option>
    <option value="+679">FJ Fiji(+679)</option>
    <option value="+358">FIN Finland(+358)</option>
    <option value="+33">FRA France(+33)</option>
    <option value="+689">PYF French Polynesia(+689)</option>
    <option value="+241">GA Gabon(+241)</option>
    <option value="+220">GM Gambia(+220)</option>
    <option value="+995">GE Georgia(+995)</option>
    <option value="+49">🇩🇪 Germany (+49)</option>
    <option value="+233">GH Ghana(+233)</option>
    <option value="+350">GI Gibralter(+350)</option>
    <option value="+30">GR Greece(+30)</option>
    <option value="+299">GL Greenland(+299)</option>
    <option value="+1-473">GD Grenada(+1-473)</option>
    <option value="+1-671">GU Guam(+1-671)</option>
    <option value="+502">GT Guatemala(+502)</option>
    <option value="+44-1481">GG Guernsey(+44-1481)</option>
    <option value="+224">GN Guinea(+224)</option>
    <option value="+245">GNB Guinea Bissau(+245)</option>
    <option value="+592">GY Guyana(+592)</option>
    <option value="+509">HT Haiti(+509)</option>
    <option value="+504">HN Honduras(+504)</option>
    <option value="+852">HK Hong Kong(+852)</option>
    <option value="+36">HUN Hungary(+36)</option>
    <option value="+354">ISL Iceland(+354)</option>
    <option value="+91">IN India(+91)</option>
    <option value="+62">ID Indonesia(+62)</option>
    <option value="+98">IR Iran(+98)</option>
    <option value="+964">IQ Iraq(+964)</option>
    <option value="+353">IE Ireland(+353)</option>
    <option value="+44-1624">IM Isle of Man(+44-1624)</option>
    <option value="+972">IL Isreal(+972)</option>
    <option value="+39">IT Italy(+39)</option>
    <option value="+225">CIV Ivory Coast(+225)</option>
    <option value="+1-876">JAM JAmaica(+1-876)</option>
    <option value="+81">JPN Japan(+81)</option>
    <option value="+44-1534">JEY Jersey(+44-1534)</option>
    <option value="+962">JOR Jordan(+962)</option>
    <option value="+7">KZ Kazakhstan(+7)</option>
    <option value="+254">🇰🇪 Kenya (+254)</option>
    <option value="+686">KI Kiribati(+686)</option>
    <option value="+383">XK Kosovo(+383)</option>
    <option value="+965">KW Kuwait(+965)</option>
    <option value="+996">KG Kyrgyzstan(+996)</option>
    <option value="+856">LA Laos(+856)</option>
    <option value="+371">LV Latvia(+371)</option>
    <option value="+961">LB Lebanon(+961)</option>
    <option value="+266">LS Lesotho()</option>
    <option value="+231">LR Liberia(+231)</option>
    <option value="+218">LY Libya(+218)</option>
    <option value="+423">LI Liechtenstein(+423)</option>
    <option value="+370">LT Lithuania(+370)</option>
    <option value="+352">LU Luxembourg(+352)</option>
    <option value="+853">MO Macau (+853)</option>
    <option value="+389">MK Macedonia(+389)</option>
    <option value="+261">MG Madagascar(+261)</option>
    <option value="+265">MW Malawi(+265)</option>
    <option value="+60">MY Malaysia(+60)</option>
    <option value="+960">MV Maldives(+960)</option>
    <option value="+223">ML Mali(+223)</option>
    <option value="+356">MT malta(+356)</option>
    <option value="+692">MH Marshall Islands(+692)</option>
    <option value="+222">MR Mauritania(+222)</option>
    <option value="+230">MU Mauritius(+230)</option>
    <option value="+262">YT Mayotte(+262)</option>
    <option value="+52">MX Mexico(+52)</option>
    <option value="+691">FM Micronesia(+691)</option>
    <option value="+373">MD Moldova(+373)</option>
    <option value="+377">MC Monaco(+377)</option>
    <option value="+976">MN Mongolia(+976)</option>
    <option value="+382">ME Montenegro(+382)</option>
    <option value="+1-664">MS Montserrat(+1-664)</option>
    <option value="+212">MA Morocco(+212)</option>
    <option value="+258">MZ Mozambique(+258)</option>
    <option value="+95">MM Myanmar(+95)</option>
    <option value="+264">NA Namibia(+264)</option>
    <option value="+674">NR Nauru(+674)</option>
    <option value="+977">NP Nepal(+977)</option>
    <option value="+31">NL Netherlands(+31)</option>
    <option value="+599">AN Netherlands Antilles(+599)</option>
    <option value="+687">NC New Caledonia(+687)</option>
    <option value="+64">NZ New Zealand(+64)</option>
    <option value="+505">NI Nicaragua(+505)</option>
    <option value="+227">NE Niger(+227)</option>
    <option value="+234">NG Nigeria(+234)</option>
    <option value="+683">NU Niue(+683)</option>
    <option value="+850">KP North Korea(+850)</option>
    <option value="+1-670">MP Northern Mariana Islands(+1-670)</option>
    <option value="+47">NO Norway(+47)</option>
    <option value="+968">OM Oman(+968)</option>
    <option value="+92">PK Pakistan(+92)</option>
    <option value="+680">PW Palau(+680)</option>
    <option value="+970">PS Palestine(+970)</option>
    <option value="+507">PA Panama(+507)</option>
    <option value="+675">PG Papua new Guinea(+675)</option>
    <option value="+595">PY Paraguay(+595)</option>
    <option value="+51">PE Peru(+51)</option>
    <option value="+63">PH Philippines(+63)</option>
    <option value="+64">PN Pitcairn(+64)</option>
    <option value="+48">PL Poland(+48)</option>
    <option value="+351">PT Portugal(+351)</option>
    <option value="+1-787, +1-939">PR Puerto Rico(+1-787, +1-939)</option>
    <option value="+974">QA Qatar(+974)</option>
    <option value="+242">CG Republic of Congo(+242)</option>
    <option value="+262">RE Reunion(+262)</option>
    <option value="+40">RO Romania(+40)</option>
    <option value="+7">RU Russia(+7)</option>
    <option value="+250">RW Rwanda(+250)</option>
    <option value="+590">BL Saint Barthelemy(+590)</option>
    <option value="+290">SH Saint Helena(+290)</option>
    <option value="+1-869">KN Saint Kitts and Nevis(+1-869)</option>
    <option value="+1-758">LC Saint Lucia(+1-758)</option>
    <option value="+590">MF Saint Martin(+590)</option>
    <option value="+508">PM Saint Vincent and the Grenadines(+508)</option>
    <option value="+685">WS Samoa(+685)</option>
    <option value="+378">SM San Marino(+378)</option>
    <option value="+239">ST Sao Tome and Principe(+239)</option>
    <option value="+966">SA Saudi Arabia(+966)</option>
    <option value="+221">SN Senegal(+221)</option>
    <option value="+381">RS Serbia(+381)</option>
    <option value="+248">SC Seychelles(+248)</option>
    <option value="+232">SL Sierra Leone(+232)</option>
    <option value="+65">Singapore(+65)</option>
    <option value="+1-721">SX Sint Maarten(+1-721)</option>
    <option value="+421">SK Slovakia(+421)</option>
    <option value="+386">SI Slovenia(+386)</option>
    <option value="+677">SB Solomon Islands(+677)</option>
    <option value="+252">SO Somalia(+252)</option>
    <option value="+27">ZA South Africa(+27)</option>
    <option value="+82">KR South Korea(+82)</option>
    <option value="+211">South Sudan(+211)</option>
    <option value="+34">ES Spain(+34)</option>
    <option value="+94">LK Sri Lanka()</option>
    <option value="+249">SD Sudan(+249)</option>
    <option value="+597">SR Suriname(+597)</option>
    <option value="+47">SJ Svalbard and Jan mayen(+47)</option>
    <option value="+268">SZ Swaziland(+268)</option>
    <option value="+46">SE Sweden(+46)</option>
    <option value="+41">CH Switzerland(+41)</option>
    <option value="+963">SY Syria(+963)</option>
    <option value="+886">TW Taiwan(+886)</option>
    <option value="+992">TJ Tajikistan(+992)</option>
    <option value="+255">TZ Tanzania(+255)</option>
    <option value="+66">TH Thailand(+66)</option>
    <option value="+228">TG Togo(+228)</option>
    <option value="+690">TK Tokelau(+690)</option>
    <option value="+676">TO Tonga(+676)</option>
    <option value="+1-868">TT Trinidad and Tobago(+1-868)</option>
    <option value="+216">TN Tunisia(+216)</option>
    <option value="+90">TR Turkey(+90)</option>
    <option value="+993">TM Turkmenistan(+993)</option>
    <option value="+1-649">TC Turks and Caicos Islands(+1-649)</option>
    <option value="+688">TV Tuvalu(+688)</option>
    <option value="+1-340">VI U.S Virgin Islands(+1-340)</option>
    <option value="+256">🇺🇬 Uganda (+256)</option>
    <option value="+380">UA Ukraine(+380)</option>
    <option value="+971">AE United Arab Emirates(+971)</option>
    <option value="+44">🇬🇧 United Kingdom(+44)</option>
    <option value="+1">🇺🇸 USA (+1)</option>
    <option value="+598">UY Uruguay(+598)</option>
    <option value="+998">UZ Uzbekistan(+998)</option>
    <option value="+678">VU Vanuatu(+678)</option>
    <option value="+379">VA Vatican(+379)</option>  
    <option value="+58">VE Venezuela(+58)</option>
    <option value="+84">VN Vietnam(+84)</option>
    <option value="+681">WF Wallis and Futuna(+681)</option>
    <option value="+212">EH Western Sahara(+212)</option>
    <option value="+967">YE Yemen(+967)</option>
    <option value="+260">ZM Zambia(+260)</option>
    <option value="+263">🇿W Zimbabwe(+263)</option>
    {/* Add more as needed */}
  </select>
</label>
</label>
<br />
            <label>
                Phone:
                <input
                type="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                />
            </label>
<br />
            <label>
              Password:
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
<br />
            <label>
              Confirm Password:
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label><br></br>
<br />
            {/* ✅ Only one button that triggers handleSubmit */}
            <button type="submit">Sign Up</button>
          </div>

          <div className="Signup-options">
            <p className="login-Link">
              Already have an account? <a href="/login">Login</a>
            </p>
            <p className="SignUp-Links">
              Sign-up with<br></br>
              <a href="https://accounts.google.com/signin" target="_blank">
              <i className="fab fa-google"></i> Google</a><br></br>
              <a href="https://www.facebook.com/r.php" target="_blank"> 
              <i className="fab fa-facebook"></i>Facebook</a><br></br>
              <a href="https://login.yahoo.com/account/create" target="_blank">
              <i className="fab fa-yahoo"></i> Yahoo!</a><br></br>
              <a href="https://appleid.apple.com/account" target="_blank">
              <i className="fab fa-apple"></i> Apple</a><br></br>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup
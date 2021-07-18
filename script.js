const myInput = document.getElementById("input");
const myButton = document.getElementById("submit");
const colorTextOutput = document.getElementById("pOut");
const testColor = document.getElementById("test");
const broadcast = document.getElementById('preamble')
const autoUpdate = document.getElementById('autoUp')
const myTitle = document.getElementById('lotjTitle')
myInput.addEventListener("keyup", inEcho);
myButton.addEventListener("click", inReplace);
broadcast.addEventListener("click", inReplace);
autoUpdate.addEventListener("click", autoUpdateColor);


const preamble =
  "&YB&Oro&zad&Wc&wa&zst&Oin&Yg N&Oe&zt&ww&zo&Or&Yk [&wCorellia&R(&zPrivate Signal&R)&Y]&z:&w";

let intervalId;
let titleintervalId;

function autoUpdateColor(){
  clearInterval(intervalId)
  clearInterval(titleintervalId)
  if(autoUpdate.checked){
    intervalId = setInterval(inReplace, 20) //--kind of buggy, needs work
    titleintervalId = setInterval(colorTitle, 500)
}
}

function colorTitle(){
  let randR = Math.floor(Math.random() * 257)
  let randG = Math.floor(Math.random() * 257)
  let randB = Math.floor(Math.random() * 257)
  let randTitle = `rgb(${randR}, ${randG}, ${randB})`
  myTitle.style.color = randTitle
}

function inReplace() {
  Object.entries(colors).forEach(([k, v]) => {
    let colorRegex = `${[k]}`;
    let regex = new RegExp(colorRegex, "g");
    colorTextOutput.innerHTML = colorTextOutput.innerHTML.replace(
      regex,
      `<span style="color:${v}"</span>`
    );
  }); 
}

function inEcho(e) {
  if(broadcast.checked){
  colorTextOutput.textContent = preamble + this.value;
  }else{
    colorTextOutput.textContent = this.value;
  }
}





let colors = {};
colors["&amp;r"] = "rgb(128, 0, 0)";
colors["&amp;O"] = "rgb(128, 128, 0)";
colors["&amp;p"] = "rgb(128, 0, 128)";
colors["&amp;w"] = "rgb(192, 192, 192)";
colors["&amp;R"] = "rgb(255, 0, 0)";
colors["&amp;Y"] = "rgb(255, 255, 0)";
colors["&amp;P"] = "rgb(255, 0, 255)";
colors["&amp;W"] = "rgb(255, 255, 255)";
colors["&amp;x"] = "rgb(0, 0, 0)";
colors["&amp;g"] = "rgb(0, 128, 0)";
colors["&amp;b"] = "rgb(25, 25, 112)";
colors["&amp;c"] = "rgb(0, 128, 128)";
colors["&amp;z"] = "rgb(128, 128, 128)";
colors["&amp;G"] = "rgb(0, 255, 0)";
colors["&amp;B"] = "rgb(65, 105, 225)";
colors["&amp;C"] = "rgb(0, 255, 255)";
//-=========Begin stupidity
colors["&amp;255"] = "#eeeeee";
colors["&amp;254"] = "#e4e4e4";
colors["&amp;253"] = "#dadada";
colors["&amp;252"] = "#d0d0d0";
colors["&amp;251"] = "#c6c6c6";
colors["&amp;250"] = "#bcbcbc";
colors["&amp;249"] = "#b2b2b2";
colors["&amp;248"] = "#a8a8a8";
colors["&amp;247"] = "#9e9e9e";
colors["&amp;246"] = "#949494";
colors["&amp;245"] = "#8a8a8a";
colors["&amp;244"] = "#808080";
colors["&amp;243"] = "#767676";
colors["&amp;242"] = "#6c6c6c";
colors["&amp;241"] = "#626262";
colors["&amp;240"] = "#585858";
colors["&amp;239"] = "#4e4e4e";
colors["&amp;238"] = "#444444";
colors["&amp;237"] = "#3a3a3a";
colors["&amp;236"] = "#303030";
colors["&amp;235"] = "#262626";
colors["&amp;234"] = "#1c1c1c";
colors["&amp;233"] = "#121212";
colors["&amp;232"] = "#080808";
colors["&amp;231"] = "#ffffff";
colors["&amp;230"] = "#ffffd7";
colors["&amp;229"] = "#ffffaf";
colors["&amp;228"] = "#ffff87";
colors["&amp;227"] = "#ffff5f";
colors["&amp;226"] = "#ffff00";
colors["&amp;225"] = "#ffd7ff";
colors["&amp;224"] = "#ffd7d7";
colors["&amp;223"] = "#ffd7af";
colors["&amp;222"] = "#ffd787";
colors["&amp;221"] = "#ffd75f";
colors["&amp;220"] = "#ffd700";
colors["&amp;219"] = "#ffafff";
colors["&amp;218"] = "#ffafd7";
colors["&amp;217"] = "#ffafaf";
colors["&amp;216"] = "#ffaf87";
colors["&amp;215"] = "#ffaf5f";
colors["&amp;214"] = "#ffaf00";
colors["&amp;213"] = "#ff87ff";
colors["&amp;212"] = "#ff87d7";
colors["&amp;211"] = "#ff87af";
colors["&amp;210"] = "#ff8787";
colors["&amp;209"] = "#ff875f";
colors["&amp;208"] = "#ff8700";
colors["&amp;207"] = "#ff5fff";
colors["&amp;206"] = "#ff5fd7";
colors["&amp;205"] = "#ff5faf";
colors["&amp;204"] = "#ff5f87";
colors["&amp;203"] = "#ff5f5f";
colors["&amp;202"] = "#ff5f00";
colors["&amp;201"] = "#ff00ff";
colors["&amp;200"] = "#ff00d7";
colors["&amp;199"] = "#ff00af";
colors["&amp;198"] = "#ff0087";
colors["&amp;197"] = "#ff005f";
colors["&amp;196"] = "#ff0000";
colors["&amp;195"] = "#d7ffff";
colors["&amp;194"] = "#d7ffd7";
colors["&amp;193"] = "#d7ffaf";
colors["&amp;192"] = "#d7ff87";
colors["&amp;191"] = "#d7ff5f";
colors["&amp;190"] = "#d7ff00";
colors["&amp;189"] = "#d7d7ff";
colors["&amp;188"] = "#d7d7d7";
colors["&amp;187"] = "#d7d7af";
colors["&amp;186"] = "#d7d787";
colors["&amp;185"] = "#d7d75f";
colors["&amp;184"] = "#d7d700";
colors["&amp;183"] = "#d7afff";
colors["&amp;182"] = "#d7afd7";
colors["&amp;181"] = "#d7afaf";
colors["&amp;180"] = "#d7af87";
colors["&amp;179"] = "#d7af5f";
colors["&amp;178"] = "#d7af00";
colors["&amp;177"] = "#d787ff";
colors["&amp;176"] = "#d787d7";
colors["&amp;175"] = "#d787af";
colors["&amp;174"] = "#d78787";
colors["&amp;173"] = "#d7875f";
colors["&amp;172"] = "#d78700";
colors["&amp;171"] = "#d75fff";
colors["&amp;170"] = "#d75fd7";
colors["&amp;169"] = "#d75faf";
colors["&amp;168"] = "#d75f87";
colors["&amp;167"] = "#d75f5f";
colors["&amp;166"] = "#d75f00";
colors["&amp;165"] = "#d700ff";
colors["&amp;164"] = "#d700d7";
colors["&amp;163"] = "#d700af";
colors["&amp;162"] = "#d70087";
colors["&amp;161"] = "#d7005f";
colors["&amp;160"] = "#d70000";
colors["&amp;159"] = "#afffff";
colors["&amp;158"] = "#afffd7";
colors["&amp;157"] = "#afffaf";
colors["&amp;156"] = "#afff87";
colors["&amp;155"] = "#afff5f";
colors["&amp;154"] = "#afff00";
colors["&amp;153"] = "#afd7ff";
colors["&amp;152"] = "#afd7d7";
colors["&amp;151"] = "#afd7af";
colors["&amp;150"] = "#afd787";
colors["&amp;149"] = "#afd75f";
colors["&amp;148"] = "#afd700";
colors["&amp;147"] = "#afafff";
colors["&amp;146"] = "#afafd7";
colors["&amp;145"] = "#afafaf";
colors["&amp;144"] = "#afaf87";
colors["&amp;143"] = "#afaf5f";
colors["&amp;142"] = "#afaf00";
colors["&amp;141"] = "#af87ff";
colors["&amp;140"] = "#af87d7";
colors["&amp;139"] = "#af87af";
colors["&amp;138"] = "#af8787";
colors["&amp;137"] = "#af875f";
colors["&amp;136"] = "#af8700";
colors["&amp;135"] = "#af5fff";
colors["&amp;134"] = "#af5fd7";
colors["&amp;133"] = "#af5faf";
colors["&amp;132"] = "#af5f87";
colors["&amp;131"] = "#af5f5f";
colors["&amp;130"] = "#af5f00";
colors["&amp;129"] = "#af00ff";
colors["&amp;128"] = "#af00d7";
colors["&amp;127"] = "#af00af";
colors["&amp;126"] = "#af0087";
colors["&amp;125"] = "#af005f";
colors["&amp;124"] = "#af0000";
colors["&amp;123"] = "#87ffff";
colors["&amp;122"] = "#87ffd7";
colors["&amp;121"] = "#87ffaf";
colors["&amp;120"] = "#87ff87";
colors["&amp;119"] = "#87ff5f";
colors["&amp;118"] = "#87ff00";
colors["&amp;117"] = "#87d7ff";
colors["&amp;116"] = "#87d7d7";
colors["&amp;115"] = "#87d7af";
colors["&amp;114"] = "#87d787";
colors["&amp;113"] = "#87d75f";
colors["&amp;112"] = "#87d700";
colors["&amp;111"] = "#87afff";
colors["&amp;110"] = "#87afd7";
colors["&amp;109"] = "#87afaf";
colors["&amp;108"] = "#87af87";
colors["&amp;107"] = "#87af5f";
colors["&amp;106"] = "#87af00";
colors["&amp;105"] = "#8787ff";
colors["&amp;104"] = "#8787d7";
colors["&amp;103"] = "#8787af";
colors["&amp;102"] = "#878787";
colors["&amp;101"] = "#87875f";
colors["&amp;100"] = "#878700";
colors["&amp;099"] = "#875fff";
colors["&amp;098"] = "#875fd7";
colors["&amp;097"] = "#875faf";
colors["&amp;096"] = "#875f87";
colors["&amp;095"] = "#875f5f";
colors["&amp;094"] = "#875f00";
colors["&amp;093"] = "#8700ff";
colors["&amp;092"] = "#8700d7";
colors["&amp;091"] = "#8700af";
colors["&amp;090"] = "#870087";
colors["&amp;089"] = "#87005f";
colors["&amp;088"] = "#870000";
colors["&amp;087"] = "#5fffff";
colors["&amp;086"] = "#5fffd7";
colors["&amp;085"] = "#5fffaf";
colors["&amp;084"] = "#5fff87";
colors["&amp;083"] = "#5fff5f";
colors["&amp;082"] = "#5fff00";
colors["&amp;081"] = "#5fd7ff";
colors["&amp;080"] = "#5fd7d7";
colors["&amp;079"] = "#5fd7af";
colors["&amp;078"] = "#5fd787";
colors["&amp;077"] = "#5fd75f";
colors["&amp;076"] = "#5fd700";
colors["&amp;075"] = "#5fafff";
colors["&amp;074"] = "#5fafd7";
colors["&amp;073"] = "#5fafaf";
colors["&amp;072"] = "#5faf87";
colors["&amp;071"] = "#5faf5f";
colors["&amp;070"] = "#5faf00";
colors["&amp;069"] = "#5f87ff";
colors["&amp;068"] = "#5f87d7";
colors["&amp;067"] = "#5f87af";
colors["&amp;066"] = "#5f8787";
colors["&amp;065"] = "#5f875f";
colors["&amp;064"] = "#5f8700";
colors["&amp;063"] = "#5f5fff";
colors["&amp;062"] = "#5f5fd7";
colors["&amp;061"] = "#5f5faf";
colors["&amp;060"] = "#5f5f87";
colors["&amp;059"] = "#5f5f5f";
colors["&amp;058"] = "#5f5f00";
colors["&amp;057"] = "#5f00ff";
colors["&amp;056"] = "#5f00d7";
colors["&amp;055"] = "#5f00af";
colors["&amp;054"] = "#5f0087";
colors["&amp;053"] = "#5f005f";
colors["&amp;052"] = "#5f0000";
colors["&amp;051"] = "#00ffff";
colors["&amp;050"] = "#00ffd7";
colors["&amp;049"] = "#00ffaf";
colors["&amp;048"] = "#00ff87";
colors["&amp;047"] = "#00ff5f";
colors["&amp;046"] = "#00ff00";
colors["&amp;045"] = "#00d7ff";
colors["&amp;044"] = "#00d7d7";
colors["&amp;043"] = "#00d7af";
colors["&amp;042"] = "#00d787";
colors["&amp;041"] = "#00d75f";
colors["&amp;040"] = "#00d700";
colors["&amp;039"] = "#00afff";
colors["&amp;038"] = "#00afd7";
colors["&amp;037"] = "#00afaf";
colors["&amp;036"] = "#00af87";
colors["&amp;035"] = "#00af5f";
colors["&amp;034"] = "#00af00";
colors["&amp;033"] = "#0087ff";
colors["&amp;032"] = "#0087d7";
colors["&amp;031"] = "#0087af";
colors["&amp;030"] = "#008787";
colors["&amp;029"] = "#00875f";
colors["&amp;028"] = "#008700";
colors["&amp;027"] = "#005fff";
colors["&amp;026"] = "#005fd7";
colors["&amp;025"] = "#005faf";
colors["&amp;024"] = "#005f87";
colors["&amp;023"] = "#005f5f";
colors["&amp;022"] = "#005f00";
colors["&amp;021"] = "#0000ff";
colors["&amp;020"] = "#0000d7";
colors["&amp;019"] = "#0000af";
colors["&amp;018"] = "#000087";
colors["&amp;017"] = "#00005f";
colors["&amp;016"] = "#000000";
colors["&amp;015"] = "#ffffff";
colors["&amp;014"] = "#00ffff";
colors["&amp;013"] = "#ff00ff";
colors["&amp;012"] = "#0000ff";
colors["&amp;011"] = "#ffff00";
colors["&amp;010"] = "#00ff00";
colors["&amp;009"] = "#ff0000";
colors["&amp;008"] = "#808080";
colors["&amp;007"] = "#c0c0c0";
colors["&amp;006"] = "#008080";
colors["&amp;005"] = "#800080";
colors["&amp;004"] = "#000080";
colors["&amp;003"] = "#808000";
colors["&amp;002"] = "#008000";
colors["&amp;001"] = "#800000";

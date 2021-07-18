let matches;

let color_range = Array.from(Array(257), (_,x) => x);
for(i = 0; i < color_range.length; i++){
  color_range[i] = "&" + color_range[i]
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
colors["&amp;99"] = "#875fff";
colors["&amp;98"] = "#875fd7";
colors["&amp;97"] = "#875faf";
colors["&amp;96"] = "#875f87";
colors["&amp;95"] = "#875f5f";
colors["&amp;94"] = "#875f00";
colors["&amp;93"] = "#8700ff";
colors["&amp;92"] = "#8700d7";
colors["&amp;91"] = "#8700af";
colors["&amp;90"] = "#870087";
colors["&amp;89"] = "#87005f";
colors["&amp;88"] = "#870000";
colors["&amp;87"] = "#5fffff";
colors["&amp;86"] = "#5fffd7";
colors["&amp;85"] = "#5fffaf";
colors["&amp;84"] = "#5fff87";
colors["&amp;83"] = "#5fff5f";
colors["&amp;82"] = "#5fff00";
colors["&amp;81"] = "#5fd7ff";
colors["&amp;80"] = "#5fd7d7";
colors["&amp;79"] = "#5fd7af";
colors["&amp;78"] = "#5fd787";
colors["&amp;77"] = "#5fd75f";
colors["&amp;76"] = "#5fd700";
colors["&amp;75"] = "#5fafff";
colors["&amp;74"] = "#5fafd7";
colors["&amp;73"] = "#5fafaf";
colors["&amp;72"] = "#5faf87";
colors["&amp;71"] = "#5faf5f";
colors["&amp;70"] = "#5faf00";
colors["&amp;69"] = "#5f87ff";
colors["&amp;68"] = "#5f87d7";
colors["&amp;67"] = "#5f87af";
colors["&amp;66"] = "#5f8787";
colors["&amp;65"] = "#5f875f";
colors["&amp;64"] = "#5f8700";
colors["&amp;63"] = "#5f5fff";
colors["&amp;62"] = "#5f5fd7";
colors["&amp;61"] = "#5f5faf";
colors["&amp;60"] = "#5f5f87";
colors["&amp;59"] = "#5f5f5f";
colors["&amp;58"] = "#5f5f00";
colors["&amp;57"] = "#5f00ff";
colors["&amp;56"] = "#5f00d7";
colors["&amp;55"] = "#5f00af";
colors["&amp;54"] = "#5f0087";
colors["&amp;53"] = "#5f005f";
colors["&amp;52"] = "#5f0000";
colors["&amp;51"] = "#00ffff";
colors["&amp;50"] = "#00ffd7";
colors["&amp;49"] = "#00ffaf";
colors["&amp;48"] = "#00ff87";
colors["&amp;47"] = "#00ff5f";
colors["&amp;46"] = "#00ff00";
colors["&amp;45"] = "#00d7ff";
colors["&amp;44"] = "#00d7d7";
colors["&amp;43"] = "#00d7af";
colors["&amp;42"] = "#00d787";
colors["&amp;41"] = "#00d75f";
colors["&amp;40"] = "#00d700";
colors["&amp;39"] = "#00afff";
colors["&amp;38"] = "#00afd7";
colors["&amp;37"] = "#00afaf";
colors["&amp;36"] = "#00af87";
colors["&amp;35"] = "#00af5f";
colors["&amp;34"] = "#00af00";
colors["&amp;33"] = "#0087ff";
colors["&amp;32"] = "#0087d7";
colors["&amp;31"] = "#0087af";
colors["&amp;30"] = "#008787";
colors["&amp;29"] = "#00875f";
colors["&amp;28"] = "#008700";
colors["&amp;27"] = "#005fff";
colors["&amp;26"] = "#005fd7";
colors["&amp;25"] = "#005faf";
colors["&amp;24"] = "#005f87";
colors["&amp;23"] = "#005f5f";
colors["&amp;22"] = "#005f00";
colors["&amp;21"] = "#0000ff";
colors["&amp;20"] = "#0000d7";
colors["&amp;19"] = "#0000af";
colors["&amp;18"] = "#000087";
colors["&amp;17"] = "#00005f";
colors["&amp;16"] = "#000000";
colors["&amp;15"] = "#ffffff";
colors["&amp;14"] = "#00ffff";
colors["&amp;13"] = "#ff00ff";
colors["&amp;12"] = "#0000ff";
colors["&amp;11"] = "#ffff00";
colors["&amp;10"] = "#00ff00";
colors["&amp;9"] = "#ff0000";
colors["&amp;8"] = "#808080";
colors["&amp;7"] = "#c0c0c0";
colors["&amp;6"] = "#008080";
colors["&amp;5"] = "#800080";
colors["&amp;4"] = "#000080";
colors["&amp;3"] = "#808000";
colors["&amp;2"] = "#008000";
colors["&amp;1"] = "#800000";

const myInput = document.getElementById("input");
const myButton = document.getElementById("submit");
const colorTextOutput = document.getElementById("pOut");
const testColor = document.getElementById("test");
const myRadio = document.getElementById('preamble')
myInput.addEventListener("keyup", inEcho);
myButton.addEventListener("click", inReplace);
myRadio.addEventListener("click", inReplace);

//setInterval(inReplace, 20) --kind of buggy, needs work

const preamble =
  "&YB&Oro&zad&Wc&wa&zst&Oin&Yg N&Oe&zt&ww&zo&Or&Yk [&wCorellia&R(&zPrivate Signal&R)&Y]&z:&w";

function colorTest(){
  let testStr = "This is a color: "
  Object.entries(colors).forEach(([k, v]) => {
    for(i = 0; i < k.length; i++){
      testColor.innerHTML += testStr + `<span style="color:${v}"</span>` + v + " \n"
    }
  });
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
  if(myRadio.checked){
  colorTextOutput.textContent = preamble + this.value;
  }else{
    colorTextOutput.textContent = this.value;
  }
}

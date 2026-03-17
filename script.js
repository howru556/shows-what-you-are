var creatorSecret = "false"

function openImgLink() {
    if (creatorSecret == "true") {
        window.open('https://i.etsystatic.com/46038560/r/il/df64f5/6500108215/il_570xN.6500108215_5zxo.jpg', '_blank').focus();
  } else {
        window.open('https://i1.sndcdn.com/avatars-000551092194-3vr5jy-t1080x1080.jpg', '_blank').focus();
    }
}

function changeCreatorSecret() {
    creatorSecret = "true"
}

clickbutton.onclick = function() { openImgLink(); };
secretButton.onclick = function() { changeCreatorSecret(); };

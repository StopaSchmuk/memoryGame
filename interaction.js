let startButtonElem = document.createElement('button');
startButtonElem.className = "startBut";
startButtonElem.innerText = "Start!";
startButtonElem.id = "startBut";
startInterface.append(startButtonElem);

const startBut = document.getElementById('startBut');
startBut.addEventListener('click', function () {
  setTimeout(deleteStartBut, 700)
});
//==========================================================================================//

let gameAreaDiv = document.createElement('div');
gameAreaDiv.className = "gameAreaDiv";
gameAreaDiv.id = "gameAreaDiv";
let gameBlock1 = document.createElement('button');
gameBlock1.className = "gameBlock1";
let gameBlock2 = document.createElement('button');
gameBlock2.className = "gameBlock2";
let gameBlock3 = document.createElement('button');
gameBlock3.className = "gameBlock3";
function addGameElems() {
  startInterface.append(gameAreaDiv);
  gameAreaDiv.append(gameBlock1);
  gameAreaDiv.append(gameBlock2);//глючит
  gameAreaDiv.append(gameBlock3);
}
function deleteStartBut() {//удаляет и СТАВИТ НУЖНЫЕ ОБЪЕКТЫ ДЛЯ ИГРЫ
  startButtonElem.remove()
  setTimeout(addGameElems, 500);

};

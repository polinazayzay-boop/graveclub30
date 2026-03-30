document.addEventListener("DOMContentLoaded", function(){
    // Попап
    let bt = document.querySelector(".bt1");
    let popup = document.querySelector(".popup1");
    let no = document.querySelector(".no");

    if (bt && popup && no) {
        bt.addEventListener("click", function(){
            popup.style.display = "block";
        });
        no.addEventListener("click", function(){
            popup.style.display = "none";
          
        });
    }

    // Редактируемое имя 
    const namebox = document.querySelector('.namebox');
    if (namebox) {
        const ww = namebox.querySelector('.ww');
        if (ww) {
            ww.addEventListener('click', function(e) {
                if (ww.tagName === 'P') {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'ww';
                    input.placeholder = 'Введите имя';
                    input.value = '';
                    namebox.replaceChild(input, ww);
                    input.focus();
                }
            });
        }
    }

    // Кнопки оплаты
    const pay1 = document.querySelector('.pay1');
    const pay2 = document.querySelector('.pay2');
    const paymentMessage = document.querySelector('.payment-message');

    if (pay1 && pay2 && paymentMessage) {
        function resetPayActive() {
            pay1.classList.remove('active');
            pay2.classList.remove('active');
        }

        pay1.addEventListener('click', function() {
            resetPayActive();
            pay1.classList.add('active');
            paymentMessage.textContent = 'Хороший выбор! Уже готовим терминал для тебя ;)';
        });

        pay2.addEventListener('click', function() {
            resetPayActive();
            pay2.classList.add('active');
            paymentMessage.textContent = 'Хороший выбор! Не забудь кошелек, а мы побежали готовить сдачу)';
        });
    } else {
        console.warn('Элементы pay1, pay2 или payment-message не найдены');

    }

    const canvas = document.getElementById('draw-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let drawing = false;

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            ctx.strokeStyle = '#ff0000ff'; 
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function getCoords(e) {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);
            if (clientX === undefined || clientY === undefined) return null;
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        }

        canvas.addEventListener('mousedown', (e) => {
            e.preventDefault();
            drawing = true;
            const coords = getCoords(e);
            if (!coords) return;
            ctx.beginPath();
            ctx.moveTo(coords.x, coords.y);
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!drawing) return;
            e.preventDefault();
            const coords = getCoords(e);
            if (!coords) return;
            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();
        });

        canvas.addEventListener('mouseup', () => drawing = false);
        canvas.addEventListener('mouseleave', () => drawing = false);

       
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            drawing = true;
            const coords = getCoords(e);
            if (!coords) return;
            ctx.beginPath();
            ctx.moveTo(coords.x, coords.y);
        });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (!drawing) return;
            const coords = getCoords(e);
            if (!coords) return;
            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();
        });

        canvas.addEventListener('touchend', () => drawing = false);
        canvas.addEventListener('touchcancel', () => drawing = false);
    }

//popupdone//
     let done = document.querySelector(".done");
    let popupdone = document.querySelector(".popupdone");

    if (done && popupdone) {
        done.addEventListener("click", function(){
            popupdone.style.display = "block";
        });
      
    }
    


    const artist1 = document.querySelector('.btartist1');
const artist2 = document.querySelector('.btartist2');
const artist3 = document.querySelector('.btartist3');

const popupArtist1 = document.querySelector('.popup-artist1');
const popupArtist2 = document.querySelector('.popup-artist2');
const popupArtist3 = document.querySelector('.popup-artist3');

if (artist1 && artist2 && artist3 && popupArtist1 && popupArtist2 && popupArtist3) {

    function resetArtistActive() {
        artist1.classList.remove('active');
        artist2.classList.remove('active');
        artist3.classList.remove('active');
    }

    function hideArtistPopups() {
        popupArtist1.classList.add('none');
        popupArtist2.classList.add('none');
        popupArtist3.classList.add('none');
    }

    // дефолтное состояние
    artist1.classList.add('active');
    hideArtistPopups();
    popupArtist1.classList.remove('none');

    artist1.addEventListener('click', function() {
        resetArtistActive();
        hideArtistPopups();

        artist1.classList.add('active');
        popupArtist1.classList.remove('none');
    });

    artist2.addEventListener('click', function() {
        resetArtistActive();
        hideArtistPopups();

        artist2.classList.add('active');
        popupArtist2.classList.remove('none');
    });

    artist3.addEventListener('click', function() {
        resetArtistActive();
        hideArtistPopups();

        artist3.classList.add('active');
        popupArtist3.classList.remove('none');
    });

} else {
    console.warn('Кнопки артистов или попапы не найдены');
}


  // Попап виенна
    let bt2 = document.querySelector(".popupvibutton");
    let popup2 = document.querySelector(".popupvienna");
    let no2 = document.querySelector(".noo");

    if (bt2 && popup2 && no2) {
        bt2.addEventListener("click", function(){
            popup2.style.display = "block";
        });
        no2.addEventListener("click", function(){
            popup2.style.display = "none";
          
        });
    }

    // ========== ЭЛЕМЕНТЫ СООБЩЕНИЙ ==========
    const bestMsg = document.querySelector('.best');
    const othersMsg = document.querySelector('.others');

    function hideAllMessages() {
        if (bestMsg) bestMsg.classList.add('none');
        if (othersMsg) othersMsg.classList.add('none');
    }

    function showMessage(msgElement) {
        if (msgElement) msgElement.classList.remove('none');
    }

    // ========== 1. LANA ==========
    const lanaImg = document.querySelector('.lana');
    const lanaSound = document.getElementById('lanaSong');
    let isPlaying = false;

    // ========== 2. TAME ==========
    const tameImg = document.querySelector('.tame');
    const tameSound = document.getElementById('tamesong');

    // ========== 3. TYLER ==========
    const tylerImg = document.querySelector('.tyler');
    const tylerSound = document.querySelector('.tylersound');

    // ========== 4. BUNNY ==========
    const bunnyImg = document.querySelector('.bunny');
    const bunnySound = document.querySelector('.bunnysound');

    // Функция остановки всех треков, кроме переданного
    function stopAllExcept(exceptSound, exceptImg) {
        // Lana
        if (lanaSound !== exceptSound) {
            if (!lanaSound.paused || isPlaying) {
                lanaSound.pause();
                lanaSound.currentTime = 0;
                lanaImg.src = './img/lana.png';
                isPlaying = false;
            }
        }
        // Tame
        if (tameSound !== exceptSound) {
            if (!tameSound.paused) {
                tameSound.pause();
                tameSound.currentTime = 0;
                tameImg.src = './img/tame.png';
            }
        }
        // Tyler
        if (tylerSound !== exceptSound) {
            if (!tylerSound.paused) {
                tylerSound.pause();
                tylerSound.currentTime = 0;
                tylerImg.src = './img/tyler.png';
            }
        }
        // Bunny
        if (bunnySound !== exceptSound) {
            if (!bunnySound.paused) {
                bunnySound.pause();
                bunnySound.currentTime = 0;
                bunnyImg.src = './img/bunny.png';
            }
        }
    }

    // ========== ОБРАБОТЧИКИ ==========

    // Lana
    if (lanaImg && lanaSound) {
        lanaImg.addEventListener('click', function() {
            if (isPlaying) {
                // Если уже играет — останавливаем
                lanaSound.pause();
                lanaSound.currentTime = 0;
                lanaImg.src = './img/lana.png';
                isPlaying = false;
                hideAllMessages();   // можно скрыть сообщение, если нужно
            } else {
                // Останавливаем все остальные треки
                stopAllExcept(lanaSound, lanaImg);
                // Запускаем текущий
                lanaImg.src = './img/lanahover.png';
                lanaSound.play().catch(console.log);
                isPlaying = true;
                hideAllMessages();
                showMessage(othersMsg);   // трек 1 – othersMsg
            }
        });
        lanaSound.addEventListener('ended', function() {
            lanaImg.src = './img/lana.png';
            isPlaying = false;
        });
    }

    // Tame
    if (tameImg && tameSound) {
        tameImg.addEventListener('click', function() {
            if (!tameSound.paused) {
                // Останавливаем текущий
                tameSound.pause();
                tameSound.currentTime = 0;
                tameImg.src = './img/tame.png';
                hideAllMessages();   // можно скрыть сообщение, если нужно
            } else {
                // Останавливаем все остальные треки
                stopAllExcept(tameSound, tameImg);
                // Запускаем текущий
                tameImg.src = './img/tamehover.png';
                tameSound.play().catch(console.log);
                hideAllMessages();
                showMessage(othersMsg);   // трек 2 – othersMsg
            }
        });
        tameSound.addEventListener('ended', function() {
            tameImg.src = './img/tame.png';
        });
    }

    // Tyler
    if (tylerImg && tylerSound) {
        tylerImg.addEventListener('click', function() {
            if (!tylerSound.paused) {
                tylerSound.pause();
                tylerSound.currentTime = 0;
                tylerImg.src = './img/tyler.png';
                hideAllMessages();
            } else {
                stopAllExcept(tylerSound, tylerImg);
                tylerImg.src = './img/tylerhover.png';
                tylerSound.play().catch(console.log);
                hideAllMessages();
                showMessage(bestMsg);   // трек 3 – bestMsg
            }
        });
        tylerSound.addEventListener('ended', function() {
            tylerImg.src = './img/tyler.png';
        });
    }

    // Bunny
    if (bunnyImg && bunnySound) {
        bunnyImg.addEventListener('click', function() {
            if (!bunnySound.paused) {
                bunnySound.pause();
                bunnySound.currentTime = 0;
                bunnyImg.src = './img/bunny.png';
                hideAllMessages();
            } else {
                stopAllExcept(bunnySound, bunnyImg);
                bunnyImg.src = './img/bunnyhover.png';
                bunnySound.play().catch(console.log);
                hideAllMessages();
                showMessage(othersMsg);   // трек 4 – othersMsg
            }
        });
        bunnySound.addEventListener('ended', function() {
            bunnyImg.src = './img/bunny.png';
        });
    }

 let bt3 = document.querySelector(".popupritbutton");
    let popup3 = document.querySelector(".popuprita");
    let no3 = document.querySelector(".nooo");

    if (bt3 && popup3 && no3) {
        bt3.addEventListener("click", function(){
            popup3.style.display = "block";
        });
        no3.addEventListener("click", function(){
            popup3.style.display = "none";
          
        });
    }


let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log('Загадано:', secretNumber); 

const guessInput = document.querySelector('.guessbox .www');
const checkButton = document.querySelector('.checkbt');
const feedbackDiv = document.querySelector('.guessbox .feedback');

if (guessInput && checkButton && feedbackDiv) {
    checkButton.addEventListener('click', function() {
        const rawValue = guessInput.value.trim();
        const userGuess = parseInt(rawValue, 10);

        if (rawValue === '' || isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            feedbackDiv.textContent = 'ЭЙ! Это не по правилам!';
            return;
        }

        // Сравнение с загаданным
        if (userGuess === secretNumber) {
            feedbackDiv.textContent = 'Ты угадал! Молодец!!!';
            secretNumber = Math.floor(Math.random() * 10) + 1; // новое число
            console.log('Новое число:', secretNumber);
            guessInput.value = ''; // очищаем поле
        } else if (userGuess < secretNumber) {
            feedbackDiv.textContent = 'Больше!';
        } else {
            feedbackDiv.textContent = 'Меньше!';
        }
    });
}





//ханна попап
let bt4 = document.querySelector(".popuphanbutton");
    let popup4 = document.querySelector(".popuphanna");
    let no4= document.querySelector(".no4");

    if (bt4 && popup4 && no4) {
        bt4.addEventListener("click", function(){
            popup4.style.display = "block";
        });
        no4.addEventListener("click", function(){
            popup4.style.display = "none";
          
        });
    }

  const cards = document.querySelectorAll('.card');
let first = null;
let lock = false;

function checkWin() {
  const doneCards = document.querySelectorAll('.card.done');
  if (doneCards.length === cards.length) {
    document.getElementById('winMessage').style.display = 'block';
  }
}

cards.forEach(card => {
  card.onclick = function () {
    if (lock || card === first || card.classList.contains('done')) return;

    card.classList.add('open');

    if (!first) {
      first = card;
      return;
    }

    lock = true;

    const isPair =
      (first.classList.contains('c1') && card.classList.contains('c2')) ||
      (first.classList.contains('c2') && card.classList.contains('c1')) ||
      (first.classList.contains('c3') && card.classList.contains('c4')) ||
      (first.classList.contains('c4') && card.classList.contains('c3')) ||
      (first.classList.contains('c5') && card.classList.contains('c6')) ||
      (first.classList.contains('c6') && card.classList.contains('c5')) ||
      (first.classList.contains('c7') && card.classList.contains('c8')) ||
      (first.classList.contains('c8') && card.classList.contains('c7'));

    if (isPair) {
      first.classList.add('done');
      card.classList.add('done');
      first = null;
      lock = false;
      checkWin();
    } else {
      setTimeout(() => {
        first.classList.remove('open');
        card.classList.remove('open');
        first = null;
        lock = false;
      }, 900);
    }
  };
}); 

// ===== БЛОК "ПРИДЁШЬ?" =====
const btnYes = document.querySelector('.bt11');
const btnNo = document.querySelector('.bt22');
const questionText = document.querySelector('.pq .ptxt.midtxt:first-child');
const answerText = document.querySelector('.pq .ptxt.midtxt.none');

if (!btnYes || !btnNo || !questionText || !answerText) {
    console.error('Элементы для "Придёшь?" не найдены:', { btnYes, btnNo, questionText, answerText });
    return;
}

btnYes.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.3s ease';
btnNo.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.3s ease';

let yesScale = 1;
let noScale = 1;
let isNoActive = true;
let isAnswered = false;

function updateScales() {
    btnYes.style.transform = `scale(${yesScale})`;
    if (isNoActive) {
        btnNo.style.transform = `scale(${noScale})`;
    }
}

btnNo.addEventListener('click', function() {
    if (!isNoActive || isAnswered) return;

    noScale *= 0.7;

    if (noScale < 0.1) {
        noScale = 0;
        isNoActive = false;
        btnNo.style.opacity = '0';
        btnNo.style.pointerEvents = 'none';
    }

    yesScale *= 1.3;
    if (yesScale > 2.5) yesScale = 2.5;

    updateScales();
});

btnYes.addEventListener('click', function() {
    if (isAnswered) return;
    isAnswered = true;

    // Скрываем вопрос, показываем ответ
    questionText.style.display = 'none';
    answerText.classList.remove('none');

    // Плавно скрываем обе кнопки
    btnYes.style.opacity = '0';
    btnYes.style.pointerEvents = 'none';
    btnNo.style.opacity = '0';
    btnNo.style.pointerEvents = 'none';
});

updateScales();


});



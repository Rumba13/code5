"use strict";
$(function () {
	let Btn = $('.Call');
	let out = $('.output');

	Btn.click(function () {
		let zone = $('.drawn-zone');
		let inputText = $('#in1');
		let inputCode = $('#in2');
		// inputText.val(test);
		let StringtoCode = inputText.val(); //Ввод строки для кодировки
		let NumbertoCode = inputCode.val(); //Ввод кодировки

		let x = 200;
		let y = 200;
		// let StringtoCode = prompt('Це кодыровщык, це решотка'); //Ввод строки для кодировки
		// let NumbertoCode = prompt('Це кодыроука'); //Ввод кодировки
		let LengthString = StringtoCode.length; //Получение длины строки
		StringtoCode = StringtoCode.toUpperCase();
		let LengthNumber = NumbertoCode.length; //Получение длинны кодировки
		let i = 0; //Переменная для цикла
		let Truei = 0; //Вечная переменная для цикла
		let CodeChar = []; // Массив для значений кодировки
		let StringChar = []; //Массив для символов кодировки
		let TrueCodeChar = []; //Переменная для переноса значений
		let StringCode = []; //Для записи перекодированных символов
		let LetCycleNow; //Переменная для цикла
		let r; // Переменная для цикла отвечает за идефикацию символов
		let rez; //
		let PromRez = []; //
		let Truerez = [];
		//Массив для настроек линий чертежа
		//Перемееная для выборки значений линий 

		function GetDrawnValue(NumArr) {
			console.log(Truerez[i]);


		}




		function GetletterCode(Ans) { //Получение цифры буквы
			r = StringChar[Ans];
			//Перебор символов
			if (r === 'А') {
				rez = '1';
			} else if (r === 'Б') {
				rez = '2';
			}
			else if (r === 'В') {
				rez = '3';
			}
			else if (r === 'Г') {
				rez = '4';
			}
			else if (r === 'Д') {
				rez = '5';
			}
			else if (r === 'Е') {
				rez = '6';
			}
			else if (r === 'Ж') {
				rez = '7';
			}
			else if (r === 'З') {
				rez = '8';
			}
			else if (r === 'И') {
				rez = '9';
			}
			else if (r === 'Й') {
				rez = '10';
			}
			else if (r === 'К') {
				rez = '11';
			}
			else if (r === 'Л') {
				rez = '12';
			}
			else if (r === 'М') {
				rez = '13';
			}
			else if (r === 'Н') {
				rez = '14';
			}
			else if (r === 'О') {
				rez = '15';
			}
			else if (r === 'П') {
				rez = '16';
			}
			else if (r === 'Р') {
				rez = '17';
			}
			else if (r === 'С') {
				rez = '18';
			}
			else if (r === 'Т') {
				rez = '19';
			}
			else if (r === 'У') {
				rez = '20';
			}
			else if (r === 'Ф') {
				rez = '21';
			}
			else if (r === 'Х') {
				rez = '22';
			}
			else if (r === 'Ц') {
				rez = '23';
			}
			else if (r === 'Ш') {
				rez = '24';
			}
			else if (r === 'Щ') {
				rez = '25';
			}
			else if (r === 'Ъ') {
				rez = '26';
			}
			else if (r === 'Ы') {
				rez = '27';
			}
			else if (r === 'Ь') {
				rez = '28';
			}
			else if (r === 'Э') {
				rez = '29';
			}
			else if (r === 'Ю') {
				rez = '30';
			}
			else if (r === 'Я') {
				rez = '31';
			}
			else if (r === 'Ч') {
				rez = '32';
			}

			StringCode[Ans] = rez;
		}
		function GetLetterValue(Rez) { //Получение значения цифры

			if (PromRez[i] === 1) {
				// document.write('1↑ - ');
				console.log('1↑');
				Truerez[i] = '1↑';
			} else if (PromRez[i] === 2) {
				// document.write('2↑ - ');
				console.log('2↑');
				Truerez[i] = '2↑';
			} else if (PromRez[i] === 3) {
				// document.write('3↑ - ');
				console.log('3↑');
				Truerez[i] = '3↑';
			} else if (PromRez[i] === 4) {
				// document.write('4↑ - ');
				console.log('4↑');
				Truerez[i] = '4↑';
			} else if (PromRez[i] === 5) {
				// document.write('1⬈ - ');
				console.log('1⬈');
				Truerez[i] = '1⬈';
			} else if (PromRez[i] === 6) {
				// document.write('2⬈ - ');
				console.log('2⬈');
				Truerez[i] = '2⬈';
			} else if (PromRez[i] === 7) {
				// document.write('3⬈ - ');
				console.log('3⬈');
				Truerez[i] = '3⬈';
			} else if (PromRez[i] === 8) {
				// document.write('4⬈ - ');
				console.log('4⬈');
				Truerez[i] = '4⬈';
			} else if (PromRez[i] === 9) {
				// document.write('1→ - ');
				console.log('1→');
				Truerez[i] = '1→';
			} else if (PromRez[i] === 10) {
				// document.write('2→ - ');
				console.log('2→');
				Truerez[i] = '2→';
			} else if (PromRez[i] === 11) {
				// document.write('3→ - ');
				console.log('3→');
				Truerez[i] = '3→';
			} else if (PromRez[i] === 12) {
				// document.write('4→ - ');
				console.log('4→');
				Truerez[i] = '4→';
			} else if (PromRez[i] === 13) {
				// document.write('1⬊ - ');
				console.log('1⬊');
				Truerez[i] = '1⬊';
			} else if (PromRez[i] === 14) {
				// document.write('2⬊ - ');
				console.log('2⬊');
				Truerez[i] = '2⬊';
			} else if (PromRez[i] === 15) {
				// document.write('3⬊ - ');
				console.log('3⬊');
				Truerez[i] = '3⬊';
			} else if (PromRez[i] === 16) {
				// document.write('4⬊ - ');
				console.log('4⬊');
				Truerez[i] = '4⬊';
			} else if (PromRez[i] === 17) {
				// document.write('1↓ - ');
				console.log('1↓');
				Truerez[i] = '1↓';
			} else if (PromRez[i] === 18) {
				// document.write('2↓ - ');
				console.log('2↓');
				Truerez[i] = '2↓';
			} else if (PromRez[i] === 19) {
				// document.write('3↓ - ');
				console.log('3↓');
				Truerez[i] = '3↓';
			} else if (PromRez[i] === 20) {
				// document.write('4↓ - ');
				console.log('4↓');
				Truerez[i] = '4↓';
			} else if (PromRez[i] === 21) {
				// document.write('1⬋ - ');
				console.log('1⬋');
				Truerez[i] = '1⬋';
			} else if (PromRez[i] === 22) {
				// document.write('2⬋ - ');
				console.log('2⬋');
				Truerez[i] = '2⬋';
			} else if (PromRez[i] === 23) {
				// document.write('3⬋ - ');
				console.log('3⬋');
				Truerez[i] = '3⬋';
			} else if (PromRez[i] === 24) {
				// document.write('4⬋ - ');
				console.log('4⬋');
				Truerez[i] = '4⬋';
			} else if (PromRez[i] === 25) {
				// document.write('1← - ');
				console.log('1←');
				Truerez[i] = '1←';
			} else if (PromRez[i] === 26) {
				// document.write('2← - ');
				console.log('2←');
				Truerez[i] = '2←';
			} else if (PromRez[i] === 27) {
				// document.write('3← - ');
				console.log('3←');
				Truerez[i] = '3←';
			} else if (PromRez[i] === 28) {
				// document.write('4← - ');
				console.log('4←');
				Truerez[i] = '4←';
			} else if (PromRez[i] === 29) {
				// document.write('1⬉ - ');
				console.log('1⬉');
				Truerez[i] = '1⬉';
			} else if (PromRez[i] === 30) {
				// document.write('2А⬉ - ');
				console.log('2⬉');
				Truerez[i] = '2⬉';
			} else if (PromRez[i] === 31) {
				// document.write('3⬉ - ');
				console.log('3⬉');
				Truerez[i] = '3⬉';
			} else if (PromRez[i] === 32) {
				// document.write('4⬉ - ');
				console.log('4⬉');
				Truerez[i] = '4⬉';
			}
		}


		//↓==============↓// !!!ГЕНЕРАТОР МАССИВА!!! \\↓==============↓\\

		for (i = 0; i < LengthString; i++) { //Присвоение массиву значения строки
			StringChar[i] = StringtoCode.charAt(i);
		}
		console.log(StringChar);
		for (i = 0; i < LengthNumber; i++) { //Присвоение массиву значения строки кодировки
			CodeChar[i] = NumbertoCode.charAt(i);
			// console.log('1:' + CodeChar);
		}

		while (CodeChar.length < LengthString) {
			for (i = 0; i < LengthNumber; i++) {//Копирование массива
				// console.log('Малова-та кодировка');
				TrueCodeChar.push(CodeChar[i]);
			}
			for (i = 0; i < TrueCodeChar.length; i++) {//Создание массива
				CodeChar.push(TrueCodeChar[i]);
			}
		}

		//↑==============↑// !!!ГЕНЕРАТОР МАССИВА!!! \\↑==============↑\\

		for (i = 0; i < StringChar.length; i++) { // Получение массива перекодированных символов
			GetletterCode(i);
			// console.log(i);
		}

		for (i = 0; i < StringCode.length; i++) {  //Сложение и проверка кодировки
			PromRez[i] = +StringCode[i] + +CodeChar[i];

			if (PromRez[i] > 32) {

				if (PromRez[i] == 33) {
					PromRez[i] = 1;
				} else if (PromRez[i] == 34) {
					PromRez[i] = 2;
				} else if (PromRez[i] == 35) {
					PromRez[i] = 3;
				} else if (PromRez[i] == 36) {
					PromRez[i] = 4;
				}
			}
		}

		for (i = 0; i < StringChar.length; i++) {
			GetLetterValue(i);
		}
		console.log(PromRez);
		console.log('Truerez: ' + Truerez);

		out.text('');
		out.append(Truerez.join(' - '));
		console.log(Truerez);

		// МОДУЛЬ ЧЕРТЁЖНИКА ====================================================================================
		//основа
		var canvas = document.querySelector("canvas");
		var cx = canvas.getContext("2d");
		cx.beginPath();
		cx.clearRect(0, 0, 500, 500);
		cx.moveTo(x, y);
		cx.arc(x, y, 2, 0, 2 * Math.PI, false);
		cx.fillStyle = 'red';
		cx.fill();

		cx.stroke();
		cx.beginPath();
		cx.lineWidth = 1;
		cx.strokeStyle = 'dark';
		for (let index = 0; index < Truerez.length; index++) {
			let pastIndex;
			if (index > 0) { pastIndex = index; pastIndex++; }

			const el = Truerez[index];
			const pastEl = Truerez[pastIndex];

			draw(el);

		}
		function draw(el) {
			cx.moveTo(x, y);



			switch (el) {
				case '1↑':
					console.table(el, x, y,);
					y -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '2↑':
					console.table(el, x, y,);
					y -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '3↑': console.table(el, x, y,);
					y -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '4↑': console.table(el, x, y,);
					y -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '1⬈': console.table(el, x, y,);
					y -= 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '2⬈': console.table(el, x, y,);
					y -= 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '3⬈': console.table(el, x, y,);
					y -= 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '4⬈': console.table(el, x, y,);
					y -= 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '1→': console.table(el, x, y,);
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '2→': console.table(el, x, y,);
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '3→': console.table(el, x, y,);
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '4→': console.table(el, x, y,);
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '1⬊': console.table(el, x, y,);
					y += 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '2⬊': console.table(el, x, y,);
					y += 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '3⬊': console.table(el, x, y,);
					y += 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;

				case '4⬊': console.table(el, x, y,);
					y += 15;
					x += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '1↓': console.table(el, x, y,);
					y += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '2↓': console.table(el, x, y,);
					y += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '3↓': console.table(el, x, y,);
					y += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '4↓': console.table(el, x, y,);
					y += 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '1⬋': console.table(el, x, y,);
					y += 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '2⬋': console.table(el, x, y,);
					y += 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y);
					break;
				case '3⬋': console.table(el, x, y,);
					y += 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '4⬋': console.table(el, x, y,);
					y += 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '1←': console.table(el, x, y,);
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '2←': console.table(el, x, y,);
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '3←': console.table(el, x, y,);
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '4←': console.table(el, x, y,);
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '1⬉': console.table(el, x, y,);
					y -= 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '2⬉': console.table(el, x, y,);
					y -= 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '3⬉': console.table(el, x, y,);
					y -= 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				case '4⬉': console.table(el, x, y,);
					y -= 15;
					x -= 15;
					cx.lineTo(x, y);
					cx.moveTo(x, y); break;
				default: break;

			}
			cx.stroke();
		}








	});
	// var canvas = document.querySelector("canvas");
	// var cx = canvas.getContext("2d");

	// for (var y = 10; y < 100; y += 10) {
	// 	cx.moveTo(10, y);
	// 	cx.lineTo(90, 10);
	// }

});
